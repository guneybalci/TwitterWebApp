using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwitterWeb.API.Models;

namespace TwitterWeb.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string LoginName, string password);
        Task<bool> UserExists(string LoginName);

    }
}
