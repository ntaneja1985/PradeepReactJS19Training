using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Add Swagger
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "WebApi", Version = "v1" });
//});

builder.Services.AddControllers();

builder.Services.AddCors(config =>
{
    config.AddPolicy("testpolicy", option =>
    {
        option.AllowAnyHeader();
        option.AllowAnyOrigin();
        option.AllowAnyMethod();
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(option =>
    {
        string? issuer = builder.Configuration.GetSection("Jwt:Issuer").Value;
        string? audience = builder.Configuration.GetSection("Jwt:Audience").Value;
        string? key = builder.Configuration.GetSection("Jwt:Key").Value;
        option.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = issuer,
            ValidAudience = audience,
            IssuerSigningKey = key != null ? new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)) : throw new ArgumentNullException(nameof(key))
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("testpolicy");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
