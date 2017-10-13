using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Demo.Models
{
    public class FullNameContext : DbContext
    {
        public FullNameContext(DbContextOptions<FullNameContext> options)
            : base(options)
        {
        }

        public DbSet<FullName> Namedetails { get; set; }
        

    }
}