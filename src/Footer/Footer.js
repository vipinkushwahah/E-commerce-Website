import "./footer.css";
import { shopping, linkdin, instagram, facebook,github} from "../constant/constant"


const Footer = () => {
  return (
    <div>
      <div className="a">
        <footer className="footer_area">
          <div className="new_footer_top">
            <div className="flex">
              
                <div className="">
                  
                    <div className="novbar_3">
                        <span><img className="shopping" src={shopping} alt="shopping" /></span>
                    <span className="white1">Vishal_Cart</span>
                    </div>
                    <br />
                    <div className="text_center">
                     this is an new shopping cart only Design for You pepole.<br />
                     an mordern way of designing the web pages and making the best user <br />freindliy 
                     webpages so that you can enjoy ouver services to the fullest
                    </div>
                  
                </div>
                <div className="">
                  <div className=" z_index">
                    <div className="links">
                      important links
                    </div>
                    <ul className="ulandLi">
                      <li>
                        <a href="http://localhost:3000/" >home</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/about"  >about</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/contact"  >contact</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/blog"  >blog</a>
                      </li>
                      <li>
                        <a href="https://github.com/vipinkushwahah/"  target="blank">Projects</a>
                      </li>
                      <li>
                        <a href="https://github.com/vipinkushwahah/"  target="blank">git_hub</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="z_index" >
                    <div className="links">links</div>
                    <ul className="ulandLi">
                      <li>
                        <a href="http://localhost:3000/" >home</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Term &amp; conditions</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/blog" >blogs</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Documentation</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Support Policy</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="" >
                    <div className="links">
                      Social Links
                    </div>
                    <div className="social_icon">
                      <a href="https://www.linkedin.com/in/vipinkushwahah/" target='blank' className="">
                      <img className="allimages" src={linkdin} alt="linkdin" />
                      </a>
                      <a href="https://github.com/vipinkushwahah/" target="blank" className="">
                      <img className="allimages" src={github} alt="linkdin" />
                      </a>
                      <a href="https://www.instagram.com/vipinkushwaha39/?hl=en" target='blank' className="">
                        <img className="allimages" src={instagram} alt="linkdin" />
                      </a>
                      <a href="https://www.instagram.com/"  target="blank" className="">
                      <img className="allimages" src={facebook} alt="linkdin" />
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one"></div>
              <div className="footer_bg_two"></div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400"></p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
