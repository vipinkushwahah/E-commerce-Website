import "./home.css";
import world from "../../assets/globe.png";
import { NavLink } from "react-router-dom";
import MRP from "../../MRPcomponent/Mrp";
import { useState } from "react";
import {
  shirt1,
  shirt2,
  shirt3,
  shirt4,
  shirt5,
  shirt6,
  shirt7,
  shirt8,
  shirt9,
  shirt10,
  shirt11,
  basket,
  star,
  asus,
  sandisk,
  samsung,
  nike,
  adidas,
  canon,
  apple,
  huawei,
  juta,
} from "../../constant/constant";

import { info, information, information2 } from "../../constant/data";

const Home = () => {
  const [openDetailsPage, setOpenDetailsPage] = useState(false);
  const [detailsPageData, setDetailsPageData] = useState({
    image: "",
    price: 0,
    name: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const detailsPage = (image, price, name, image1, image2, image3, image4) => {
    setDetailsPageData((pre) => {
      return { ...pre, image, price, name, image1, image2, image3, image4 };
    });
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
  const off = (value) => {
    return (
      <>
        <span className="big - percent - positon"> {value}</span>
        <span className="small - percent ">
          %<span className="small2 - percent">off</span>
        </span>
      </>
    );
  };
  const comp = (amount, image, name, image1, image2, image3, image4) => {
    return (
      <>
        <img
          className="child_class"
          src={image}
          alt="spider"
          onClick={() =>
            detailsPage(image, amount, name, image1, image2, image3, image4)
          }
        />
        <div className="spider"> spider_man</div>
        <div>{name}</div>
        {rating()}
        <div>${amount}</div>
        <div>
          <NavLink to="/logIn">
            <img className="basket" src={basket} alt="basket" />
          </NavLink>
        </div>
      </>
    );
  };

  return openDetailsPage ? (
    <>
      <MRP
        image1={detailsPageData.image1}
        image2={detailsPageData.image2}
        image3={detailsPageData.image3}
        image4={detailsPageData.image4}
        name={detailsPageData.name}
        faceimage={detailsPageData.image}
        price={detailsPageData.price}
      />
    </>
  ) : (
    <div>
      <div className="main-container">
        <div>
          <div className="font_size1">
            Search Your One From Thousand <br /> Of Products
          </div>
          <div className="border">
            <input
              type="text"
              className="search"
              placeholder="Search For Your Product"
            />
            <img className="world" src={world} alt="world" />
            <div className="label">
              We Have The Largest Culection Of products You Want.
            </div>
            <div className="offer">Save More With Coupons & Up to 70% off!</div>
            <div className="shop">
              <NavLink to="/shop">Shop Now</NavLink>
            </div>
          </div>
        </div>
        <div className="image">
          <div>
            <span className="big">70</span>
            <span className="small">
              %<span className="small2">off</span>
            </span>
            <span className="text">
              Best Deal Only For You. <span className="btn">Shop Now</span>
            </span>
          </div>
          <img className="image1" src={juta} alt="juta" />
        </div>
      </div>
      <div className="gray">
        <div className="head">Featured Trending Products</div>
        <div className="hadding2">Summer Collection New Mordern Design</div>
      </div>
      <div className="logos">
        <div className="logos_slide">
          {off(20)}
          <img className="img_hight" src={shirt1} alt="shirt" />
          {off(40)}
          <img className="img_hight" src={shirt2} alt="shirt" />
          {off(10)}
          <img className="img_hight" src={shirt3} alt="shirt" />
          {off(10)}
          <img className="img_hight" src={shirt4} alt="shirt" />
          {off(5)}
          <img className="img_hight" src={shirt5} alt="shirt" />
          {off(11)}
          <img className="img_hight" src={shirt6} alt="shirt" />
          {off(50)}
          <img className="img_hight" src={shirt7} alt="shirt" />
          {off(34)}
          <img className="img_hight" src={shirt8} alt="shirt" />
          {off(23)}
          <img className="img_hight" src={shirt9} alt="shirt" />
          {off(12)}
          <img className="img_hight" src={shirt10} alt="shirt" />
          {off(7)}
          <img className="img_hight" src={shirt11} alt="shirt" />
          {off(9)}
        </div>
        <div className="logos_slide">
          {off(20)}
          <img className="img_hight" src={shirt1} alt="shirt" />
          {off(40)}
          <img className="img_hight" src={shirt2} alt="shirt" />
          {off(10)}
          <img className="img_hight" src={shirt3} alt="shirt" />
          {off(10)}
          <img className="img_hight" src={shirt4} alt="shirt" />
          {off(5)}
          <img className="img_hight" src={shirt5} alt="shirt" />
          {off(11)}
          <img className="img_hight" src={shirt6} alt="shirt" />
          {off(50)}
          <img className="img_hight" src={shirt7} alt="shirt" />
          {off(34)}
          <img className="img_hight" src={shirt8} alt="shirt" />
          {off(23)}
          <img className="img_hight" src={shirt9} alt="shirt" />
          {off(12)}
          <img className="img_hight" src={shirt10} alt="shirt" />
          {off(7)}
          <img className="img_hight" src={shirt11} alt="shirt" />
          {off(9)}
        </div>
      </div>
      <div className="gray1">
        <div className="shirtHadding">
          <div>New Unique Design Shirts Only For You </div>
          <span className="bumpar">Bumper Offer for You</span>
          <span className="big"> 60</span>
          <span className="small">
            %<span className="small2">off</span>
          </span>
        </div>
      </div>
      <div className="main_parant">
        {information.map((details) => (
          <div className="parant_class">
            {comp(
              details.amount,
              details.image,
              details.name,
              details.image1,
              details.image2,
              details.image3,
              details.image4
            )}
          </div>
        ))}
      </div>
      <div className="gray1">
        <div className="shirtHadding2">
          <div>New Unique Design T-Shirts Only For You</div>
          <span className="bumpar">Bumper Offer for You</span>
          <span className="big"> 50</span>
          <span className="small">
            %<span className="small2">off</span>
          </span>
        </div>
      </div>
      <div className="main_parant ">
        {info.map((details) => (
          <div className="parant_class">
            {comp(
              details.amount,
              details.image,
              details.name,
              details.image1,
              details.image2,
              details.image3,
              details.image4
            )}
          </div>
        ))}
      </div>
      <div className="gray1">
        <div className="shirtHadding3">
          <div>New Unique Design shoes Only For You</div>
          <span className="bumpar">Bumper Offer for You</span>
          <span className="big"> 60</span>
          <span className="small">
            %<span className="small2">off</span>
          </span>
        </div>
      </div>
      <div className="main_parant ">
        {information2.map((details) => (
          <div className="parant_class">
            {comp(
              details.amount,
              details.image,
              details.name,
              details.image1,
              details.image2,
              details.image3,
              details.image4
            )}
          </div>
        ))}
      </div>
      <div className="homespacebetweeen">
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
    </div>
  );
};
export default Home;
