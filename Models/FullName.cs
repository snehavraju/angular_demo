using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;



namespace Demo.Models
{
    
    public class FullName
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        
        public string FirstName { get; set; }

        [Required]
        
        public string LastName { get; set;}
        
        
    }
}