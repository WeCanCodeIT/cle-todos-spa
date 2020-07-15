export default function Todos(todos){
    return `
        <h1>List of Todos</h1>
        <ol>
            ${todos.map(todo => {
                return `
                    <li>${todo.name} by ${todo.owner.name}</li>
                `
            }).join("")}
        </ol>
        <section class="add-todo">
            <button class="add-todo__button">Add a Todo</button>
            
        </section>
    `
}