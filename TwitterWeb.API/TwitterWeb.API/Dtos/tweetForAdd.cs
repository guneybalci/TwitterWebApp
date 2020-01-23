using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterWeb.API.Dtos
{
    public class tweetForAdd
    {
        public int userIdFK { get; set; }

        public string tweetContent { get; set; }
    }
}
