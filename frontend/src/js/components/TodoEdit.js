export default function TodoEdit(todo){
    return `
        <h3>${todo.name}</h3>
        <input class="edit-todo__name" type="text" value="${todo.name}">
        <input class="edit-todo__owner" type="hidden" value="${todo.ownerId}">
        <input class="edit-todo__id" type="hidden" value="${todo.id}">
        <button class="edit-todo__submit">Save Changes</button>
    `
}