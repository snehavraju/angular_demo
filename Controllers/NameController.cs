using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Demo.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;


namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class NameController : Controller
    {
        
        private readonly FullNameContext _context;

        public NameController(FullNameContext context)
        {
            _context = context;

        } 

                    [HttpGet]
            public async Task<List<FullName>> GetAllAsync()
            {
                return await _context.Namedetails.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<FullName> GetByIdproduct(int id)
            { 
               try{   
              FullName objProductInfo = await _context.Namedetails.FindAsync(id);
              return objProductInfo;
               }
               catch(Exception ex)
               {
                   throw new Exception(ex.Message);
               }


               /* var item = _context.Product_Info.FirstOrDefault(t => t.ProductId == id);
                if (item == null)
                {
                   // return  NotFound();
                }
                return new ObjectResult(item);*/
            }  

            [HttpPost]
            public async Task CreateAsync([FromBody] FullName item)
            {
                /*if (item == null)
                {
                   // return BadRequest();
                   throw new ArgumentException(" No data to Post");
                }*/

                

                _context.Namedetails.Add(item);
                await _context.SaveChangesAsync();

               // return CreatedAtRoute("GetTodo", new { ProductId = item.ProductId }, item);
            } }}