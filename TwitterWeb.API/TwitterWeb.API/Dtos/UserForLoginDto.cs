using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterWeb.API.Dtos
{
    public class UserForLoginDto
    {
        public string userLoginName { get; set; }
        public string password { get; set; }
    }
}
