using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todos.Models;

namespace todos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private TodoDbContext _db;
        public TodoController(TodoDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Todo> GetTodos()
        {
            return _db.Todos.ToList();
        }

        [HttpGet("{id}")]
        public Todo GetTodo(int id)
        {
            return _db.Todos.Find(id);
        }

    }
}
