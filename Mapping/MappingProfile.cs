using AutoMapper;
using FindAFish.Controllers.Resources;
using FindAFish.Models;

namespace FindAFish.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Genus, GenusResource>();
            CreateMap<Species, SpeciesResource>();
        }
    }
}