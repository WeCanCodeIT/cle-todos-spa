export default function Owners(owners){
    return `
        <h1>Owners List</h1>
        <ol>
            ${owners.map(owner =>{
                return `
                    <li>
                        <h4>${owner.name} - (${owner.email})</h4>
                    </li>
                `;
            }).join('')}
        </ol>
    `;
}