const todaysDate = new Date(Date.now());

export default function Footer(){
    return `
        &copy; ${todaysDate}
    `;
}