export default function Owners(owners){
    return `
        <h1>List of Owners</h1>
        <ul>
            ${owners.map(owner => {
                return `
                <li>
                    <h4 class="owner__name" id="${owner.id}">${owner.name}</h4>
                </li>
                `
            }).join("")}
        </ul>
    `
}