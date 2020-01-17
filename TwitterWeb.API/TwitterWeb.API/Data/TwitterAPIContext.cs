using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwitterWeb.API.Models;

namespace TwitterWeb.API.Data
{
    public class TwitterAPIContext : DbContext
    {
        public TwitterAPIContext(DbContextOptions<TwitterAPIContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Tweet> Tweets { get; set; }
    }
}
