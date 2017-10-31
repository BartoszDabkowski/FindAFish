using AutoMapper;
using FindAFish.Controllers.Resources;
using FindAFish.Models;

namespace FindAFish.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to API Respurce
            CreateMap<Genus, GenusResource>();
            CreateMap<Species, SpeciesResource>();

            // API Resource to Domain
            CreateMap<GenusResource, Genus>();
            CreateMap<SpeciesResource, Species>();
        }
    }
}