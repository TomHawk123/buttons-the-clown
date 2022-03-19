import { sendReservations } from "./dataAccess.js";

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name(s)</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child(ren)'s Name(s)</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">Number of Children</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Length of Party</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="text" name="partyDate" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `
// ¿on the button above, does it even recognize the class or id since there
// is a class/id already?
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentEntry = document.querySelector("input[name='parentName']").value
        const userChildEntry = document.querySelector("input[name='childName']").value
        const userChildNumberEntry = document.querySelector("input[name='numberOfChildren']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value
        const userDate = document.querySelector("input[name='partyDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentEntry,
            childName: userChildEntry,
            numberOfChildren: userChildNumberEntry,
            address: userPartyAddress,
            duration: userPartyLength,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendReservations(dataToSendToAPI)
    }
})


