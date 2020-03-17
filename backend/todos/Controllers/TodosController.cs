using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using todos.Models;
using todos.Repositories;

namespace todos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        // private IRepository 

        private IRepository<Todo> todoRepo;


        // constructor that injects and object of type IRepository
        public TodosController(IRepository<Todo> todoRepo)
        {
            this.todoRepo = todoRepo;
        }

        private static List<string> all = new List<string>()
        {
            "Remodel Bathroom",
            "Finish my laser app",
            "Do things with kids"
        };


        // GET: api/Todos
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return todoRepo.GetAll();
        }

        // GET: api/Todos/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Todos
        [HttpPost]
        public IEnumerable<Todo> Post([FromBody] Todo value)
        {
            todoRepo.Create(value);
            return todoRepo.GetAll();
        }


        // PUT: api/Todos/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
