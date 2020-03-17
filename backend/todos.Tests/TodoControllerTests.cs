using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using todos.Controllers;
using todos.Models;
using todos.Repositories;
using Xunit;

namespace todos.Tests
{

    public class TodoControllerTests
    {
        private TodosController underTest;
        IRepository<Todo> todoRepo;

        public TodoControllerTests()
        {
            todoRepo = Substitute.For<IRepository<Todo>>();
            underTest = new TodosController(todoRepo);
        }
        
        [Fact]
        public void Get_Returns_Count_of_2_Todos()
        {
            // arrange
            var expectedTodos = new List<Todo>()
            {
                new Todo(1, "First item", "First owner"),
                new Todo(2, "Second item", "Second owner")
            };

            todoRepo.GetAll().Returns(expectedTodos);

            // act
            var result = underTest.Get();
            var countOfTodos = result.Count();

            // assert
            Assert.Equal(2, countOfTodos);
        }

        [Fact]
        public void Get_Returns_List_of_Todos()
        {
            var expectedTodos = new List<Todo>()
            {
                new Todo(1, "First item", "First Owner"),
                new Todo(2, "Second item", "Second Owner")
            };
            todoRepo.GetAll().Returns(expectedTodos);

            var result = underTest.Get();

            Assert.Equal(expectedTodos, result.ToList());
        }
    }
}
