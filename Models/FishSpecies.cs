namespace FindAFish.Models
{
    public class FishSpecies
    {
        public int Id { get; set; }
        public FishGenus Genus { get; set; }
        public int GenusId { get; set; }
    }
}