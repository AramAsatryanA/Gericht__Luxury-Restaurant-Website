import { createSlice } from "@reduxjs/toolkit";

const photoGallerySectionSlice = createSlice({
  name: "photoGallery-section",
  initialState: {
    images: [
      {
        id: "image-1",
        image: "/images/home-page/photoGallery/instagram__1.jpg",
      },
      {
        id: "image-2",
        image: "/images/home-page/photoGallery/instagram__2.jpg",
      },
      {
        id: "image-3",
        image: "/images/home-page/photoGallery/instagram__3.jpg",
      },
      {
        id: "image-4",
        image: "/images/home-page/photoGallery/instagram__4.jpg",
      },
      {
        id: "image-5",
        image: "/images/home-page/photoGallery/instagram__5.jpg",
      },
      {
        id: "image-6",
        image: "/images/home-page/photoGallery/instagram__6.jpg",
      },
      {
        id: "image-7",
        image: "/images/home-page/photoGallery/instagram__7.jpg",
      },
    ],
  },
});

export default photoGallerySectionSlice;
