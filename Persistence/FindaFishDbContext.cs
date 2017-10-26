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

        public DbSet<Genus> Genus{ get; set; }
        public DbSet<Species> Species{ get; set; }
    }
}