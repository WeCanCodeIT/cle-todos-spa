export default function Owner(owner){
    return `
        <h1>${owner.name}</h1>
        <ol>
            ${owner.todos.map(todo =>{
                return `
                <li>
                    <h4>${todo.name}</h4>
                </li>
                `
            }).join("")}
        </ol>
    `
}