import CarouselPosts from "./components/CarouselPosts";
import FeaturedPost from "./components/FeaturedPost";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <CarouselPosts />
    </>
  );
}
