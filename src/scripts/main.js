// import all necessary functions from modules
import { fetchReservations } from "./dataAccess.js";
import { ClownService } from "./ClownService.js";

// story a querySelector for the container id in index.html in 
// an immutable variable.

const mainContainer = document.querySelector("#container")

// create a function that will invoke the .then() method on the 
// return of the fetchReservations function. The .then() method 
// takes no parameters and has an implicit return of inoking the 
// ClownService function in the innerHTML of the mainContainer variable.
const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ClownService()
        }
    )
}
//invoke the function
render()

// add an event listener to the mainContainer for the customEvent 
// "stateChanged" to invoke the rendering function.

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)