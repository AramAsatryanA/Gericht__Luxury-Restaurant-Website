import HeroSection from "../components/HomePageContent/HeroSection";
import AboutSection from "../components/HomePageContent/AboutSection";
import BookSection from "../components/HomePageContent/BookSection";
import MenuSection from "../components/HomePageContent/MenuSection/MenuSection";
import ChefSection from "../components/HomePageContent/ChefSection";
import CustomersSection from "../components/HomePageContent/CustomersSection/CustomersSection";
import VideoSection from "../components/HomePageContent/VideoSection";
import AwardsSection from "../components/HomePageContent/AwardsSection/AwardsSection";
import BlogsSection from "../components/HomePageContent/BlogsSection/BlogsSection";
import PhotoGallerySection from "../components/HomePageContent/PhotoGallerySection/PhotoGallerySection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BookSection />
      <MenuSection />
      <ChefSection />
      <CustomersSection />
      <VideoSection />
      <AwardsSection />
      <BlogsSection />
      <PhotoGallerySection />
    </>
  );
}

export default HomePage;
