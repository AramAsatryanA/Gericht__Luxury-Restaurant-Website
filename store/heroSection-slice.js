import { createSlice } from "@reduxjs/toolkit";

const heroSectionSlice = createSlice({
  name: "hero-section",
  initialState: {
    items: [
      {
        title: "The Key To Fine Dining",
        text: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
        image: "/images/home-page/hero/hero__banner--1.png",
      },
      {
        title: "Reserve Your Table Today",
        text: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
        image: "/images/home-page/hero/hero__banner--2.png",
      },
      {
        title: "Food That Surprise You",
        text: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
        image: "/images/home-page/hero/hero__banner--3.png",
      },
      {
        title: "Love The Original Taste",
        text: "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
        image: "/images/home-page/hero/hero__banner--4.png",
      },
    ],
    indexOfItemToShow: 0,
  },
  reducers: {
    showNextItem(state) {
      if (state.indexOfItemToShow === state.items.length - 1) {
        state.indexOfItemToShow = 0;
      } else {
        state.indexOfItemToShow++;
      }
    },

    showPreviousItem(state) {
      if (state.indexOfItemToShow === 0) {
        state.indexOfItemToShow = state.items.length - 1;
      } else {
        state.indexOfItemToShow--;
      }
    },
  },
});

export const heroSectionActions = heroSectionSlice.actions;

export default heroSectionSlice;
