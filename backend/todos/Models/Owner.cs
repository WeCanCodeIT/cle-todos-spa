using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todos.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual IEnumerable<Todo> Todos { get; set; }
    }
}
