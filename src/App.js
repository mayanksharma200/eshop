import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import Categories from './components/Categories';
import Offer from './components/Offer';
import RecentProducts from './components/RecentProducts';
import Vendor from './components/Vendor';
import Footer from './components/Footer';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  document.title="Home";
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Carousel/>
    <Featured/>
    <FeaturedProducts/>
    <Offer/>
    <RecentProducts/>
    <Vendor/>
    <Footer/>

    </>
  );
}


export default App;
