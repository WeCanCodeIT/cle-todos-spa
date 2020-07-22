export default function Todos(todos){
    return `
        <h1>List of Todos</h1>
        <ol>
            ${todos.map(todo => {
                return `
                    <li class='todo-item'>
                        <h3>${todo.name}</h3>
                        <button class='todo-item__edit'>Edit</button>
                        <button class='todo-item__delete'>Delete</button>
                        <input class='todo-item__id' type='hidden' value='${todo.id}'>
                    </li>
                `
            }).join("")}
        </ol>
        <section class="add-todo">
            <button class="add-todo__button">Add a Todo</button>
            
        </section>
    `
}