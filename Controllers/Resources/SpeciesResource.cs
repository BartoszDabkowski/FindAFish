namespace FindAFish.Controllers.Resources
{
    public class SpeciesResource
    {
        public int Id { get; set; }
        public int GenusId { get; set; }
        public string Name { get; set; }
        public string CommonName { get; set; }
    }
}