import { ServiceForm } from "./ServiceForm.js"
import { Reservations } from "./Reservations.js"
// that needs to be collected for a person to reserve a clown for a 
// birthday party

// export a function that returns a template literal for index.html module
export const ClownService = () => {
    return `
    <h1 id="mainHeader">Button's Clown Service </h1>
    <section class="serviceForm">
        ${ServiceForm()}
        </section>
        
        <section class="reservations">
            <h2>Reservations</h2>
            ${Reservations()}
            </section>`
}