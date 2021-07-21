export default function Todos(todos){
    return `
        <h1>Todo List</h1>
        <ol>
           ${todos.map(todo =>{
               return `
                    <li>
                        ${todo.name} submitted by ${todo.owner.name}
                    </li>
               `;
           }).join('')}
        </ol>
    `;
}