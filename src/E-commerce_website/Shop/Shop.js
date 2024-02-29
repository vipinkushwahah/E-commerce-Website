import "./shop.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import MRP from "../../MRPcomponent/Mrp";
import {shirt1,shirt2,shirt3,shirt4,shirt5,shirt6,shirt7,shirt8,shirt9,shirt10,shoe,shoe1,shoe2,shoe3,star,basket,funky,monkey,shopping,asus,sandisk,samsung,nike,adidas,canon,apple,huawei} from '../../constant/constant'

const Shop = () => {
    const [openDetailsPage, setOpenDetailsPage] = useState(false);
    const [detailsPageData, setDetailsPageData] = useState({image:"", price:0, name:"", image1:"", image2:"",image3:"",image4:""})
  
  
    let info = [
      {id: '1', name: "multi Astronout T-shirt", amount: 80, image: shirt1, image1:shirt1, image2:shirt2, image3:shirt3, image4:shirt4},
      {id: '2', name: "nike", amount: 224, image: shirt2, image1:shirt5, image2:shirt6, image3:shirt7, image4:shirt8},
      {id: '3', name: "spider", amount: 331, image: shirt3, image1:shirt9, image2:shirt1, image3:shirt2, image4:shirt4},
      {id: '4', name: "unico Astronout T-shirt", amount: 132, image: shirt4, image1:shirt1, image2:shirt10, image3:shirt5, image4:shirt3},
    ];
  
    let information = [
      {id: '5', name: "multi Astronout T-shirt", amount: 80, image: shirt5, image1:shirt1, image2:shirt2, image3:shirt3, image4:shirt4},
      {id: '6', name: "Astronout T-shirt", amount: 94, image: shirt6, image1:shirt5, image2:shirt6, image3:shirt7, image4:shirt8},
      {id: '7', name: "spider T-shirt", amount: 111, image: shirt7, image1:shirt9, image2:shirt1, image3:shirt2, image4:shirt4},
      {id: '8', name: "captain", amount: 222, image: shirt8, image1:shirt1, image2:shirt10, image3:shirt5, image4:shirt3},
    ];
  
    let information2 = [
      {id: '9', name: "multi Astronout T-shirt", amount: 70, image: shoe, image1:shirt1, image2:shirt2, image3:shirt3, image4:shirt4},
      {id: '10', name: "naruto", amount: 44, image: shoe1,  image1:shoe1, image2:shirt6, image3:shirt7, image4:shirt8},
      {id: '11', name: "black panther", amount: 311, image: shoe2, image1:shirt9, image2:shirt1, image3:shirt2, image4:shirt4},
      {id: '12', name: "new unico", amount: 422, image: shoe3, image1:shirt1, image2:shirt10, image3:shirt5, image4:shirt3},
    ];
  
    const detailsPage = (image, price , name, image1 ,image2, image3, image4) => {
      setDetailsPageData( pre => {
        return {...pre, image, price, name, image1 ,image2, image3, image4}
      })
      setOpenDetailsPage(true);
    };
 
  const rating = () => {
    return (
      <div>
        <span>
          <img className="star" src={star} alt="basket" />
        </span>
        <span>
          <img className="star" src={star} alt="basket" />
        </span>
        <span>
          <img className="star" src={star} alt="basket" />
        </span>
        <span>
          <img className="star" src={star} alt="basket" />
        </span>
      </div>
    );
  };

  const comp = (amount, image, name, image1, image2, image3, image4) =>{
    return(
      <>
       <img
            className="child_class"
            src={image}
            alt="spider"
            onClick={() => detailsPage(image,  amount, name, image1, image2, image3, image4)}
          />
          <div className="spider"> spider_man</div>
          <div>{name}</div>
          {rating()}
          <div>${amount}</div>
          <div>
          <NavLink  to="/logIn"><img className="basket" src={basket} alt="basket" /></NavLink>
          </div>
      </>
    );
  };

  return openDetailsPage ? (
    <>
      <MRP image1={detailsPageData.image1} image2={detailsPageData.image2} image3={detailsPageData.image3} image4={detailsPageData.image4} name={detailsPageData.name} faceimage={detailsPageData.image} price={detailsPageData.price}  />
    </>
  ) : (
    <div>
      <div className="shopspace">....</div>
      <div className="black">
        <div className="im">
          <span>
            <img className="shop_images" src={funky} alt="normal_image" />
          </span>
          {/* <span> <img className="shop_images" src={ape} alt="normal_image" /></span> */}
          <span>
            <img className="shop_images" src={monkey} alt="normal_image" />
          </span>
          <div className="seasonal ">
            <span>
              <img className="shopping" src={shopping} alt="shop" />
            </span>
            #Seasonal Offer
          </div>
          <div className="season">
            save more with Coupons & up to <span className="off">40</span>% off!
          </div>
        </div>
        <div className="logos">
          <div className="logos_slide">
            <img className="social_slider" src={asus} alt="shirt" />
            <img className="social_slider" src={sandisk} alt="shirt" />
            <img className="social_slider" src={samsung} alt="shirt" />
            <img className="social_slider" src={nike} alt="shirt" />
            <img className="social_slider" src={adidas} alt="shirt" />
            <img className="social_slider" src={canon} alt="shirt" />
            <img className="social_slider" src={apple} alt="shirt" />
            <img className="social_slider" src={huawei} alt="shirt" />
          </div>
          <div className="logos_slide">
            <img className="social_slider" src={asus} alt="shirt" />
            <img className="social_slider" src={sandisk} alt="shirt" />
            <img className="social_slider" src={samsung} alt="shirt" />
            <img className="social_slider" src={nike} alt="shirt" />
            <img className="social_slider" src={adidas} alt="shirt" />
            <img className="social_slider" src={canon} alt="shirt" />
            <img className="social_slider" src={apple} alt="shirt" />
            <img className="social_slider" src={huawei} alt="shirt" />
          </div>
        </div>
      </div>
      <div>
        <div className="product">Featured Products</div>
        <div className="sumer">Summer Collection New Mordern Design</div>
      <Swiper slidesPerView={3} grabCursor={true} className="swipe">
      { information.map( details => (
        <SwiperSlide>
          <div className="abc">
        <div className="parant_class">
        { comp(details.amount, details.image, details.name,  details.image1,details.image2,details.image3,details.image4)}
        </div>
        </div>
        </SwiperSlide>
          ))}
      </Swiper>
      </div>
      <div>
        <div className="product">Featured Products</div>
        <div className="sumer">Summer Collection New Mordern Design</div>
        <Swiper slidesPerView={3} grabCursor={true} className="swipe">
        { info.map( details => (
          <SwiperSlide>
            <div className="abc">
              <div className="parant_class">
              { comp(details.amount, details.image, details.name, details.image1,details.image2,details.image3,details.image4)}
              </div>
            </div>
          </SwiperSlide>
                ))}
        </Swiper>
      </div>
      <div>
        <div className="product">Featured Products</div>
        <div className="sumer">Summer Collection New Mordern Design</div>
      <Swiper slidesPerView={3} grabCursor={true} className="swipe">
      { information2.map( details => (
        <SwiperSlide>
          <div className="abc">
        <div className="parant_class">
        { comp(details.amount, details.image, details.name, details.image1,details.image2,details.image3,details.image4)}
        </div>
        </div>
        </SwiperSlide>
            ))}
      </Swiper>
      </div>
    </div>
  );
};
export default Shop;
