using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductApiController:ControllerBase
    {
        static List<Product> products = new List<Product>()
        {
            new()
            {
                Category = 1, ProductPrice = 100, ProductCode = "P001", ProductId = 1, ProductName = "Product 1"
            }
        };

        [HttpGet]
        [Route("getall")]
        public IActionResult GetAllProducts()
        {
            return Ok(products);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult AddProduct([FromBody] Product productToAdd)
        {
            if (productToAdd == null)
            {
                return BadRequest("Product cannot be null");
            }

            products.Add(productToAdd);
            return CreatedAtAction(nameof(GetAllProducts), new { id = productToAdd.ProductId }, productToAdd);
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = products.FirstOrDefault(p => p.ProductId == id);
            if (product == null)
            {
                return NotFound();
            }

            products.Remove(product);
            return NoContent();
        }

    }
}
