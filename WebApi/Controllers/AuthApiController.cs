using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApi.Models;
using WebApi.ViewModels;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthApiController(IConfiguration configuration) : ControllerBase
    {

        static List<User> users = new ()
        {
            new User { UserId = 1, UserName = "admin", FullName = "Admin User", Password = "admin" },
            new User { UserId = 2, UserName = "user", FullName = "Regular User", Password = "user" }
        };

        

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] LoginViewModel loginViewModel)
        {
            var authenticatedUser = users.FirstOrDefault(u => u.UserName == loginViewModel.UserName && u.Password == loginViewModel.Password);
            if (authenticatedUser == null)
            {
                return Unauthorized();
            }

            var userViewModel = new UserViewModel
            {
                UserId = authenticatedUser.UserId,
                UserName = authenticatedUser.UserName,
                FullName = authenticatedUser.FullName,
                Token = GenerateJwtToken(authenticatedUser) // This should be replaced with a real JWT token
            };
            // Here you would typically generate a JWT token and return it
            return Ok(userViewModel);
        }

        private string GenerateJwtToken(User user)
        {
            string issuer = configuration.GetSection("Jwt:Issuer").Value;
            string audience = configuration.GetSection("Jwt:Audience").Value;
            string key = configuration.GetSection("Jwt:Key").Value;
            // Implement JWT token generation logic here
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Email, user.UserName),
                new Claim(JwtRegisteredClaimNames.Sub, user.FullName)
            };

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
