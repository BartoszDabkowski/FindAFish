using System.Collections.Generic;
using System.Threading.Tasks;
using FindAFish.Models;
using FindAFish.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FindAFish.Controllers
{
    public class GenusesController : Controller
    {
        private readonly FindaFishDbContext context;
        public GenusesController(FindaFishDbContext context)
        {
            this.context = context;

        }

        [HttpGet("/api/Genuses")]
        public async Task<IEnumerable<Genus>> GetGenuses(){
            return await context.Genuses.Include(g => g.Species).ToListAsync();
        }
    }
}