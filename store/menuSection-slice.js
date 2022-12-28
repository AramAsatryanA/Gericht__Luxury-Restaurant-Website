import { createSlice } from "@reduxjs/toolkit";

const menuSectionSlice = createSlice({
  name: "menu-section",
  initialState: {
    "wine-menu": [
      {
        title: "Chapel Hill Shiraz",
        description: ["AU", "Bottle"],
        price: 56,
      },
      {
        title: "Catena Malbec",
        description: ["AR", "Bottle"],
        price: 59,
      },
      {
        title: "La Vieille Rosé",
        description: ["FR", "750 ml"],
        price: 44,
      },
      {
        title: "Rhino Pale Ale",
        description: ["CA", "750 ml"],
        price: 31,
      },
      {
        title: "Irish Guinness",
        description: ["IE", "750 ml"],
        price: 26,
      },
    ],
    "cocktails-menu": [
      {
        title: "Aperol Spritz",
        description: ["Aperol", "Villa Marchesi prosecco", "soda"],
        price: 20,
      },
      {
        title: "Dark 'N' Stormy",
        description: ["Dark rum", "Ginger beer", "Slice of lime"],
        price: 16,
      },
      {
        title: "Daiquiri",
        description: ["Rum", "Citrus juice", "Sugar"],
        price: 10,
      },
      {
        title: "Old Fashioned",
        description: ["Bourbon", "Brown sugar", "Angostura Bitters"],
        price: 31,
      },
      {
        title: "Negroni",
        description: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
        price: 26,
      },
    ],
  },
});

export default menuSectionSlice;
