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
                return await _context.Product_Group.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<FullName> GetByIdproduct(int id)
            { 
               try{   
              FullName objProductInfo = await _context.Product_Group.FindAsync(id);
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

                

                _context.Product_Group.Add(item);
                await _context.SaveChangesAsync();

               // return CreatedAtRoute("GetTodo", new { ProductId = item.ProductId }, item);
            } 

             [HttpPut("{id}")]
                public async Task UpdateAsync(int id, [FromBody] FullName item)
                {
                   /* if (item == null || item.ProductId != id)
                    {
                        return BadRequest();
                    }*/

                    var todo = _context.Product_Group.FirstOrDefault(t => t.Id == id);
                    /*if (todo == null)
                    {
                        return NotFound();
                    }*/


                    todo.GroupName = item.GroupName;
                   

                    _context.Product_Group.Update(todo);
                   await  _context.SaveChangesAsync();
                    //return new NoContentResult();
                } 

                [HttpDelete("{id}")]
                public async Task DeleteAsync(int id)
                {
                    var todo = _context.Product_Group.FirstOrDefault(t => t.Id == id);
                    if (todo == null)
                    {
                        //return NotFound();
                    }

                    _context.Product_Group.Remove(todo);
                    await _context.SaveChangesAsync();
                    //return new NoContentResult();
                } 
            
            }}