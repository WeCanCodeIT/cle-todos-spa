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
    public class TodoController : ControllerBase
    {
        private IRepository<Todo> todoRepo;

        public TodoController(IRepository<Todo> todoRepo)
        {
            this.todoRepo = todoRepo;
        }

        // GET: api/Todo
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return todoRepo.GetAll();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public Todo Get(int id)
        {
            return todoRepo.GetById(id);
        }

        // POST: api/Todo
        [HttpPost]
        public IEnumerable<Todo> Post([FromBody] Todo value)
        {
            todoRepo.Create(value);
            return todoRepo.GetAll();
        }

        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public IEnumerable<Todo> Put([FromBody] Todo todo)
        {
            todoRepo.Update(todo);
            return todoRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<Todo> Delete(int id)
        {
            var todo = todoRepo.GetById(id);
            todoRepo.Delete(todo);
            return todoRepo.GetAll();
        }
    }
}
