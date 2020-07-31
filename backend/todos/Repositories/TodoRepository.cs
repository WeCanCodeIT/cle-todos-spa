using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todos.Models;

namespace todos.Repositories
{
    public class TodoRepository : Repository<Todo>, IRepository<Todo>
    {
        TodoContext db; 

        public TodoRepository(TodoContext context) : base(context)
        {
            db = context;
        }

        public override IEnumerable<Todo> GetAll()
        {
            return db.Todos.Include("Owner").ToList();
        }
    }
}
