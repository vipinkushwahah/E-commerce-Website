import "./mrp.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState } from "react";

import {star, basket,shoe,  shoe1, shoe2,shoe3} from "../constant/constant"

const MRP = ({ faceimage, price, name, image1, image2, image3, image4}) => {
 
  const [showImage, setShowImage] = useState(faceimage);

  const image1info = useCallback(
    (image) => {
      setShowImage(image);
    },
    []
  );

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

  const comp = (amount, image, name) =>{
    return(
      <>
       <img
            className="child_class"
            src={image}
            alt="spider"
          />
          <div className="spider"> spider_man</div>
          <div>{name}</div>
          {rating()}
          <div>${amount}</div>
          <div>
            <img className="basket" src={basket} alt="basket" />
          </div>
      </>
    );
  };

  return (
    <div>
      <div className="defferance">
        <div>
          <div>
            <img className="skaletern" src={showImage} alt="skaletern" />
          </div>
          <div>
            <span>
              <img
                className="skaletern1"
                src={image1}
                alt="skaletern"
                onClick={()=>image1info(image1)}
              />
            </span>
            <span>
              <img
                className="skaletern1"
                src={image2}
                alt="skaletern"
                onClick={()=>image1info(image2)}
              />
            </span>
            <span>
              <img
                className="skaletern1"
                src={image3}
                alt="skaletern"
                onClick={()=>image1info(image3)}
              />
            </span>
            <span>
              <img className="skaletern1" src={image4} alt="skaletern"  onClick={()=>image1info(image4)}/>
            </span>
          </div>
        </div>
        <div>
          <div className="homestyle1">Home/shoe</div>
          <div className="homestyle2">{name} </div>
          <div className="homestyle3">${price}</div>
          <div className="cars">
            <select>
              <option className="option" value="" selected>
                Select size
              </option>
              <option value="saab">6UK</option>
              <option value="opel">7UK</option>
              <option value="audi">8UK</option>
              <option value="audi">9UK</option>
            </select>

            <br />
            <div>
              <input className="input" type="number" />
              <span>
                <button className="submit1">Add To Cart</button>
              </span>
            </div>
            <div className="details">Product Details</div>
            <div className="details1">
              Mens Check Shirt made with care and thought.100% Gaurenteed soft
              cotton and softness
              <br />
              felt in the fabric which makes the shirt very easy and comfortable
              to wear casually.
              <br />
              From the newest designs and trendiest styles for men at we are
              making fashionable clothing affordable.
              <br />
              Shirt feels soft and light on the body.Casual/Office wear shirt
              for Men, One Pocket, Full sleeves.
              <br />
              Made of cotton fabric for all weather comfort and Best Fitting.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="product">Featured Products</div>
        <div className="sumer">Summer Collection New Mordern Design</div>
        <Swiper slidesPerView={3} grabCursor={true} className="swipe">
          <SwiperSlide>
            <div className="abc">
              <div className="parant_class">
              {comp(80, shoe, "new mordern show")}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="parant_class">
            {comp(430, shoe1, "Cartoon Astronout T-shirt")}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="parant_class">
            {comp(230, shoe2, "Cartoon Astronout T-shirt")}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="parant_class">
            {comp(330, shoe3, "Cartoon Astronout T-shirt")}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default MRP;
