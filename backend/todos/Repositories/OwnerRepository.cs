using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todos.Models;

namespace todos.Repositories
{
    public class OwnerRepository : Repository<Owner>, IRepository<Owner>
    {
        TodoContext db;

        public OwnerRepository(TodoContext context) : base(context)
        {
            db = context;
        }

        public override Owner GetById(int id)
        {
            return db.Owner.Where(o => o.Id == id).Include("Todos").FirstOrDefault();
        }
    }
}
