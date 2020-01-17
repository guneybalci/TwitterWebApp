﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterWeb.API.Models
{

    [Table("Users")]
    public class User
    {
        public User()

        {
            Tweets = new List<Tweet>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int userId { get; set; }

        [Column(TypeName = "nvarchar(25)")]
        public string userName { get; set; }

        [Column(TypeName = "nvarchar(25)")]
        public string userSurname { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string loginName { get; set; }

        [Column(TypeName = "nvarchar(8)")]
        public string password { get; set; }

        [Column(TypeName = "varbinary(max)")]
        public byte[] passwordHash { get; set; }

        [Column(TypeName = "varbinary(max)")]
        public byte[] passwordSalt { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string imageUrl { get; set; }

        public List<Tweet> Tweets { get; set; }

    }
}
