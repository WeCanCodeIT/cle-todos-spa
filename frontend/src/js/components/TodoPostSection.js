export default function TodoPostSection(owners){
    return `
            <input class="add-todo__todoName" type="text" placeholder="Add a Todo here">
            <select class="add-todo__todoOwners" type="dropdown">
                ${owners.map(owner => {
                    return `
                        <option class="add-todo__ownerId" value="${owner.id}">${owner.name}</option>
                    `
                }).join("")}
            </select>
            <button class="add-todo__submit">Save Todo</button>
    `
}