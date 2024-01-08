import Announcement from "../components/Announcement";
import Carousel from "../components/CarouselS";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
