using System.Collections.Generic;

namespace FindAFish.Controllers.Resources
{
    public class GenusResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CommonName { get; set; }
        public ICollection<SpeciesResource> Species { get; set; }

        public GenusResource()
        {
            Species = new List<SpeciesResource>();
        }
    }
}