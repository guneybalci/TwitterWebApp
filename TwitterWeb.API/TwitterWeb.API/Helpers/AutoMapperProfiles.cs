using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterWeb.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        // destinationdaki tweet content
        //  opt =>opt.MapFrom(src=>src.tw))
        // opt.Mapfrom  uzantıdan gekir.
        // src=> kaynaktaki
        public AutoMapperProfiles()
        {

        }
    }
}
