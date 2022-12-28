import { configureStore } from "@reduxjs/toolkit";

import heroSectionSlice from "./heroSection-slice";
import menuSectionSlice from "./menuSection-slice";
import customersSectionSlice from "./customersSection-slice";
import awardsSectionSlice from "./awardsSection-slice";
import blogsSectionSlice from "./blogsSection-slice";
import photoGallerySectionSlice from "./photoGallerySection-slice";

const store = configureStore({
  reducer: {
    heroSectionContent: heroSectionSlice.reducer,
    menuSectionContent: menuSectionSlice.reducer,
    customersSectionContent: customersSectionSlice.reducer,
    awardsSectionContent: awardsSectionSlice.reducer,
    blogsSectionContent: blogsSectionSlice.reducer,
    photoGallerySectionContent: photoGallerySectionSlice.reducer,
  },
});

export default store;
