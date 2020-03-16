export default function Todos(todos){
    return `
        <ul>
            ${todos.map(todo => {
                return `
                <li>
                    <h3>${todo}</h3>
                </li>
                `  
            }).join("")}          
        </ul>

        <section class="add-todo">
            <input class="add-todo__todoName" type="text" placeholder="Add a Todo here">
            <button class="add-todo__submit">Add a Todo</button>
        </section>
    `;
}