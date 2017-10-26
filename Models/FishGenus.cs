using System.Collections.Generic;

namespace FindAFish.Models
{
    public class FishGenus
    {
        public int Id { get; set; }
        public string Genus { get; set; }
        public ICollection<FishSpecies> FishSpecies { get; set; }

        public FishGenus()
        {
            FishSpecies = new List<FishSpecies>();
        }
    }
}