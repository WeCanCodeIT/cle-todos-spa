using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using todos.Models;
using todos.Repositories;

namespace todos
{
    public class Startup
    {
        // used for Web APIs, when IConfiguration is injected into the 
        // Startup constructor
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // used for asp.net 3.1 cors issue
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // used for Web APIs
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // used for Web APIs to add MVC Controllers, but not Razor pages and Views
            // Adds services for Authorization, Validation, formattors, CORS, etc.
            services.AddControllers(); 

            // Not needed for Web APIs as it adds both Views and Razor Pages,
            // which are unnecessary for our Web API
            // services.AddMvc();

            services.AddDbContext<TodoContext>();
            services.AddScoped<IRepository<Todo>, TodoRepository>();

            // used for asp.net 3.1 cors issue
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("http://localhost:8080", 
                                        "https://localhost:8080")
                                        .AllowAnyHeader()
                                        .AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // used for any asp.net empty template
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // used for asp.net 3.1 cors issue
            app.UseCors(MyAllowSpecificOrigins);

            // used for Web APIs, to ensure requests are made over secure domain
            app.UseHttpsRedirection();

            // used for any asp.net empty template, it looks at incoming request
            // and decides which endpoint should execute
            app.UseRouting();

            // used for Web APIs
            app.UseAuthorization();

            // used for any asp.net empty template to configure and execute endpoints, 
            // endpoint routing is the preferred approach for Core versions 3.0 +
            app.UseEndpoints(endpoints =>
            {
                // this Endpoint implementation used for Web APIs
                // It only maps controllers that have routing attributes, 
                // for example [Route("api/[controller]")] 
                endpoints.MapControllers();
            });
        }
    }
}
