import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
 // import Slider from "../../components/Slider/Slider";
import Contact from "../../components/Contact/Contact";
import "./Home.scss" ; 
export default function Home(){
    return(
        <>
       <div className="home">
        {/* <Slider/> */}
        <FeaturedProducts type = "Trending" 
        i1 = "/img/d1.jpeg"
        i2 = "/img/d2.jpeg"
        s1 = "/img/shoes1.jpeg"
        s2 = "/img/shoes2.jpeg"
        n1 = "/img/necklace1.jpeg"
        n2 = "/img/necklace2.jpeg"
        b1 = "/img/bag1.jpeg"
        b2 =  "/img/bag2.jpeg"        />
       <Categories/>
        <FeaturedProducts type = "Recommended" 
         i1 = "/img/d3.jpeg"
         i2 = "/img/d4.jpeg"
         s1 = "/img/shoes3.jpeg"
         s2 = "/img/shoes4.jpeg"
         n1 = "/img/necklace1.jpeg"
         n2 = "/img/necklace2.jpeg"
         b1 = "/img/bag3.jpeg"
         b2 =  "/img/bag4.jpeg"        />

         <Contact />
       </div>
        </>
    );
}