using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todos.Repositories
{
    public class Repository<T> where T : class
    {
        private DbContext db;

        public Repository(DbContext db)
        {
            this.db = db;
        }

        public virtual IEnumerable<T> GetAll()
        {
            return db.Set<T>().ToList();
        }

        public virtual T GetById(int id)
        {
            return db.Set<T>().Find(id);
        }

        public void Create(T entity)
        {
            db.Set<T>().Add(entity);
            Save();
        }

        public void Update(T entity)
        {
            db.Set<T>().Update(entity);
            Save();
        }

        public void Delete(T entity)
        {
            db.Set<T>().Remove(entity);
            Save();
        }


        public void Save()
        {
            db.SaveChanges();
        }
    }
}
