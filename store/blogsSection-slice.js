import { createSlice } from "@reduxjs/toolkit";

const blogsSectionSlice = createSlice({
  name: "blogs-section",
  initialState: {
    blogs: [
      {
        image: "/images/home-page/blogs/blogs__grill.png",
        date: "04.17.2022",
        author: "Annalisa L.",
        title: "tips for prepping and caring for your grill",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      },
      {
        image: "/images/home-page/blogs/blogs__cocktail.png",
        date: "05.23.2022",
        author: "John M.",
        title: "summer cocktails and mocktails",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      },
      {
        image: "/images/home-page/blogs/blogs__cooking.png",
        date: "08.07.2022",
        author: "Frew W.",
        title: "easy cooking for college students",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
      },
    ],
  },
});

export default blogsSectionSlice;
