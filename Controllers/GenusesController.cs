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
    public class GenusesController : Controller
    {
        private readonly FindaFishDbContext context;
        private readonly IMapper mapper;
        public GenusesController(FindaFishDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet("/api/Genuses")]
        public async Task<IEnumerable<GenusResource>> GetGenuses()
        {
            var genus = await context.Genuses.Include(g => g.Species).ToListAsync();

            return mapper.Map<List<Genus>, List<GenusResource>>(genus);
        }
    }
}