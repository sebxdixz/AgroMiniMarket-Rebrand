import Manzana from "./fotos/manzana.jpg"
import Piña from "./fotos/pina.jpg"
import Naranja from "./fotos/naranja.jpg"
import Mango from "./fotos/mango.jpg"


let products = 
    [
        {
           id: 1,
           title: "Naranja",
           description: "Naranja pa la monja",
           price: "1400",
           currency: "$ /kg",
            image: Naranja
        },
        {
           id: 2,
           title: "Mango",
           description: "Mango pa quien esta al mando",
           price: "3400",
           currency: "$ /kg",
           image: Mango,
        },
        {
           id: 3,
           title: "Manzana",
           description: "Manzana la mas sana",
           currency: "$ /kg",
           price: "2050",
           image: Manzana,
        },
        {
            id: 4,
            title: "Piña",
            description: "Piña pa la niña",
            currency: "$ /unidad",
            price: "2500",
            image: Piña,
         }
     ];

export default products;