using System.ComponentModel.DataAnnotations;

namespace FindAFish.Models
{
    public class Species
    {
        public int Id { get; set; }
        public Genus Genus { get; set; }
        public int GenusId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string CommonName { get; set; }
    }
}