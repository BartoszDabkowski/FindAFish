using FindAFish.Models;
using Microsoft.EntityFrameworkCore;

namespace FindAFish.Persistence
{
    public class FindaFishDbContext : DbContext
    {
        public FindaFishDbContext(DbContextOptions<FindaFishDbContext> options)
            : base(options)
        {
        }

        public DbSet<FishGenus> FishGenus{ get; set; }
        public DbSet<FishSpecies> FishSpecies{ get; set; }
    }
}