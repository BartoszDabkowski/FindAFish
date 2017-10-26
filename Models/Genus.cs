using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindAFish.Models
{
    public class Genus
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public ICollection<Species> Species { get; set; }

        public Genus()
        {
            Species = new List<Species>();
        }
    }
}