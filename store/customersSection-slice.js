import { createSlice } from "@reduxjs/toolkit";

const customersSectionSlice = createSlice({
  name: "customers-section",
  initialState: {
    customers: [
      {
        image: "/images/home-page/customers/customers__wade-warren.png",
        name: "Wade Warren",
        occupation: "Sommelier",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
        quotesIcon: "/images/website__icon-quotes.png",
      },
      {
        image: "/images/home-page/customers/customers__jane-cooper.png",
        name: "Jane Cooper",
        occupation: "Chef",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
        quotesIcon: "/images/website__icon-quotes.png",
      },
      {
        image: "/images/home-page/customers/customers__robert-fox.png",
        name: "Robert Fox",
        occupation: "Chef",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
        quotesIcon: "/images/website__icon-quotes.png",
      },
      {
        image: "/images/home-page/customers/customers__brooklyn-simmons.png",
        name: "Brooklyn Simmons",
        occupation: "Caterer",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
        quotesIcon: "/images/website__icon-quotes.png",
      },
    ],
  },
});

export default customersSectionSlice;
