import "./About.css";
import {sukuna1,about,phone,sukuna} from "../../constant/constant"

const About = () => {
  return (
    <div>
      <p>hi</p>

      <div className="meeee">
        <span>
          <img className="gojo55" src={sukuna1} alt="normal_image" />
        </span>
        <span>
          <img className="gojo5" src={sukuna1} alt="normal_image" />
        </span>
        <div className="blog1 ">
          <span>
            <img className="shopping" src={about} alt="shop" />
          </span>
          #Read To Know About Us.
        </div>
        <div className="blog2">
          Give Suggestion in blogs Section to help us inovate the Features of
          the Website.
        </div>
      </div>
      <div className="mapdispley">
        <div>
            <div className="suggestion">VENUE LOCATION </div>
            <div className="mapdetailscart - newbottomspace">Vishal_Cart</div>
            <div className="mapdetailscart">Vishal_Cart Lucknow Utter Pradesh.</div>
            <div className="mapdetailscart"><span><img src={phone} alt="map" /></span>7420868346</div>
            <div className="mapdetailscart">phone number</div>
        </div>
        <div>
        <div className="map"><iframe  title="googal_map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lucknow%20bhitavali+(Vishal%20Cart)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
        </div>
      </div>

      <div className="givedisplayflex">
        <div>
          <div className="suggestion">Information About Our Website........</div>
          <div className="detailsabout">
          The Motive Behind Building the Web Site Is Make The Life Easy Of Those People Who Cannot Reach The Store 
          For Basic Nacessarys And To Save The Time And Money Of People By Reching The Products To There Door Step......<br />

          Ecommerce (or electronic commerce) is the buying and selling of goods or services on the Internet.
          It encompasses a wide variety of data, systems and tools for online buyers and sellers, including
          mobile shopping and online payment encryption.

          Most businesses with an online presence use an online store
          and/or platform to conduct ecommerce marketing and 
          sales activities and to oversee logistics and fulfillment.
          According to eMarketer, in 2022, global retail ecommerce sales will surpass $5 trillion for the first time,
          accounting for more than a fifth of overall retail sales. And by 2025, total spending will exceed $7 trillion,
          despite slowing growth. 

           To fully understand ecommerce, let’s take a look at its history, growth and impact on the business world.
            We will also discuss some advantages and disadvantages to ecommerce as well as predictions for the future. 
                For more expert insights on the go, check out our biweekly audio series, the Make it Big Podcast, 
            where global thought leaders discuss all things 
            ecommerce — from industry news and trends to growth strategies and success stories......
          </div>
        </div>
        <div>
          <img className="newimageofsukuna" src={sukuna} alt="kkkk" />
        </div>
      </div>
    </div>
  );
};
export default About;
