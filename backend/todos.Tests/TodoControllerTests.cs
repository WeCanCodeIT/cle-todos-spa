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

        // Alternative test for Get() action
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

        [Fact]
        public void Post_Creates_New_Todo()
        {
            // arrange
            var newTodo = new Todo(1, "New todo", "Owner name");
            var todoList = new List<Todo>();

            // Use When..Do to substitute for methods that don't return a value, like the Repository method Create()
            // When() allows us to call the method on the substitute and pass an argument
            // Do() allows us to pass a callback function that executes when the method is called
            todoRepo.When(t => t.Create(newTodo))
                .Do(t => todoList.Add(newTodo));

            todoRepo.GetAll().Returns(todoList);

            // act
            var result = underTest.Post(newTodo);

            // assert
            Assert.Contains(newTodo, result);
        }
    }
}
