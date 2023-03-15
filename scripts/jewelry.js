import { getJewelry, setJewelry } from "./database.js";

const jewelry = getJewelry()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "jewelry") {
            setJewelry(parseInt(event.target.value))
        }
    }
)

export const Jewelry = () => {
    let html = "<b>Jewelry Type:   </b>"

    html += '<select id="jewelry">'
    html += '<option value="0">Select</option>'

    const arrayOfOptions = jewelry.map( (jewel) => {
            return `<option value="${jewel.id}">${jewel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}