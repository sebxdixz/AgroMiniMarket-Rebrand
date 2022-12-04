import React from 'react';
import "./Catalog.css";
import Catalog from "react-catalog-view";
import products from './json_in_jsx';
import "../../css/colors.module.css";

function ProductData(props) {

   const CONTENT_KEYS =
   {
      imgKey: "image",
      cardTitleKey: "title",
      cardDescriptionKey: "description",
      priceKey: "price",
      discountedPriceKey: "discounted",
      priceCurrencyKey: "currency",
      discountCurrencyKey: "currency"
   };

   return (
      <Catalog

         data={products}
         // Array of JSON Objects (required)
         contentKeys={CONTENT_KEYS}
         // JSON Object defining the keys that will be 
         // used from the data array, keys should match. (required)
         skeleton={0}
         // Any non zero number will override default cards
         // and will show that many skeleton cards.           
         cardSize="md"
         // Card sizes, sm, md and lg for small, medium  and large  
         btnTwoText="Agregar al Carro"
         // Enter text for action button two 
         // or pass empty string to hide.
         btnOneHandler={(args, event, objectData) => {
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'  
         }}
         btnTwoHandler={(args, event, row) => {
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'
         }}
         imageClickHandler={(args, event, row) => {
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'
         }}
      />
   )
}

export default ProductData;
