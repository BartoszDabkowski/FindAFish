using System.Collections.Generic;
using System.Threading.Tasks;
using FindAFish.Models;
using FindAFish.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using FindAFish.Controllers.Resources;

namespace FindAFish.Controllers
{
    [Route("/api/genuses")]
    public class GenusesController : Controller
    {
        private readonly FindaFishDbContext context;
        private readonly IMapper mapper;
        public GenusesController(FindaFishDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<GenusResource>> GetGenuses()
        {
            var genus = await context.Genuses.Include(g => g.Species).ToListAsync();

            return mapper.Map<List<Genus>, List<GenusResource>>(genus);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGenus([FromBody] GenusResource genusResource){
            var genus = mapper.Map<GenusResource, Genus>(genusResource);

            context.Genuses.Add(genus);
            await context.SaveChangesAsync();

            var result = mapper.Map<Genus, GenusResource>(genus);
            return Ok(result);
        }
    }
}