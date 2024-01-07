import Announcement from "../components/Announcement";
import Carousel from "../components/CarouselS";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
    </>
  );
};

export default Home;
