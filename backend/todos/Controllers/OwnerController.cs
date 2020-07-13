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
    public class OwnerController : ControllerBase
    {
        IRepository<Owner> ownerRepo;

        public OwnerController(IRepository<Owner> ownerRepo)
        {
            this.ownerRepo = ownerRepo;
        }

        // GET: api/Owner
        [HttpGet]
        public IEnumerable<Owner> Get()
        {
            return ownerRepo.GetAll();
        }

        // GET: api/Owner/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Owner
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Owner/5
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
