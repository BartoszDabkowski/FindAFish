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
    [Route("/api/species")]
    public class SpeciesController : Controller
    {
        private readonly FindaFishDbContext context;
        private readonly IMapper mapper;
        public SpeciesController(FindaFishDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<SpeciesResource>> GetSpecies()
        {
            var species = await context.Species.Include(s => s.Genus).ToListAsync();

            return mapper.Map<List<Species>, List<SpeciesResource>>(species);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSpecies([FromBody] SpeciesResource speciesResource){
            var species = mapper.Map<SpeciesResource, Species>(speciesResource);

            context.Species.Add(species);
            await context.SaveChangesAsync();

            var result = mapper.Map<Species, SpeciesResource>(species);
            return Ok(result);
        }
    }
}