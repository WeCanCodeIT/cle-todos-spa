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

        <section class="owner__add-todo">
            <input class="owner__add-todo__name" type="text" placeholder="Add a new Todo here"></input>
            <button class="owner__add-todo__submit" id="${owner.id}">Add a Todo for ${owner.name}</button>
        </section>
    `
}