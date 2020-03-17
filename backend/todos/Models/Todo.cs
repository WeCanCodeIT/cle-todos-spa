using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todos.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
    }
}
