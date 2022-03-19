import { getReservations, deleteReservation } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map(convertReservationToListElement).join("")
            }
        </ul>
    `

    return html
}

const convertReservationToListElement = (reservation) => {
    return `
    <li>
        ${reservation.parentName}'s party for ${reservation.childName}
        <button class="reservation__delete"
            id="reservation--${reservation.id}">
            Delete
        </button>
    </li>
    `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})