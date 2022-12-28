import { createSlice } from "@reduxjs/toolkit";

const awardsSectionSlice = createSlice({
  name: "awards-section",
  initialState: {
    awards: [
      {
        image: "/images/home-page/awards/awards__award-gourmand.png",
        title: "Bib Gourmand",
        description: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        image: "/images/home-page/awards/awards__award-star.png",
        title: "Rising Star",
        description: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        image: "/images/home-page/awards/awards__award-hospitality.png",
        title: "AA Hospitality ",
        description: "Lorem ipsum dolor sit amet, consectetur.",
      },
      {
        image: "/images/home-page/awards/awards__award-chef.png",
        title: "Outstanding Chef",
        description: "Lorem ipsum dolor sit amet, consectetur.",
      },
    ],
  },
});

export default awardsSectionSlice;
