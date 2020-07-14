using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace todos.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public virtual Owner Owner { get; set; }
        public int OwnerId { get; set; }
    }
}
