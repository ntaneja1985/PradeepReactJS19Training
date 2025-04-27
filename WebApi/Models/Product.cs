namespace WebApi.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string  ProductCode { get; set; }
        public int Category { get; set; }

        public int ProductPrice { get; set; }
    }
}
