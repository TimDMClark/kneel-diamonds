
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"
import { Jewelry } from "./jewelry.js"

document.addEventListener(
    "click",
    (event) => {
             
        const itemClicked = event.target

        if (itemClicked.id.startsWith("orderButton")) {

            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>
        
            <section class="choices__jewelry selection">
                ${Jewelry()}
            </section>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <section class = "choices__orders">
                <h2>Custom Jewelry Orders</h2>
                ${Orders()}
            </section>
        </article>
    `
}

