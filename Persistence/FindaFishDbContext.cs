using Microsoft.EntityFrameworkCore;

namespace FindAFish.Persistence
{
    public class FindaFishDbContext : DbContext
    {
        public FindaFishDbContext(DbContextOptions<FindaFishDbContext> options)
            : base(options)
        {
        }
    }
}