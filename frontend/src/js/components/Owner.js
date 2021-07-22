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
    `;
}