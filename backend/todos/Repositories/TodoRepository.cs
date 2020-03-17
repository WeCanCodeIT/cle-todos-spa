using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todos.Models;

namespace todos.Repositories
{
    public class TodoRepository : Repository<Todo>, IRepository<Todo>
    {
        public TodoRepository(TodoContext context) : base(context)
        {

        }
    }
}
