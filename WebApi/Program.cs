var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

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

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("testpolicy");

app.UseHttpsRedirection();



app.UseAuthorization();

app.MapControllers();

app.Run();
