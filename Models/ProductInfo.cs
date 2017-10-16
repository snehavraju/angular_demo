using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;



namespace Demo.Models
{
    
    public class ProductInfo
    {
        [Key]
        [Required]
        public int ProductId { get; set; }
        [Required]
        
        
        public string ProductName {get;set;}
        
        [Required]
        public string ProductDescription {get;set;}
        [Required]
        public int ProductRate{get;set;}
        [Required]
        public int GroupId {get;set;}
    

       
        
    }
}