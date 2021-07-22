export default function Owner(owner){
    if(owner.todos == null){
        owner.todos = [];
    }

    return `
        <h1>${owner.name}</h1>
        <ul>
            ${owner.todos.map(todo => {
                return `
                    <li>
                        ${todo.name}
                    </li>
                `;
            }).join('')}
        </ul>

        <section class="owner_addtodo">
            <label>Todo Name: </label>
            <input type='text' id='todoName' Placeholder='Add a New Todo Item' />
            <br />
            <button class="todoAddButton" id="${owner.id}">Add Todo Item</button>
        </section>
    `;
}