
import { useState } from "react";
import "./blog.css";
import {gojo5,blog,saturo} from '../../constant/constant'

const Blogs = () => {
  //todolist
  const [list, setlist] = useState("");
  const [input, setinput] = useState([]);

  //blogs
  const [blogs, setblogs] = useState([
    { body: " While not exclusively focused on e-commerce, Smashing Magazine offers a wealth of web design and development articles that can be useful for creating a successful online store.", id: 1 },
    { body: "Practical Ecommerce offers articles, podcasts, and webinars on various e-commerce topics, including marketing, technology, and management.", id: 2 },
    { body: "WooCommerce is a plugin for WordPress that allows you to create an online store, and their blog covers topics such as store management, marketing, and design.", id: 3 },
  ]);

  const handledelete = (id) => {
    const newblog = blogs.filter((blog) => blog.id !== id);
    setblogs(newblog);
  };

  //todolist
  const handle = (event) => {
    setlist(event.target.value);
  };

  const handleadd = () => {
    setinput((prev) => {
      return [...prev, list];
    });
    setlist("");
  };

  const handaldelete = (index) => {
    input.splice(index, 1);
    setinput([...input]);
  };
  return (
    <div>
      <div className="white">
        <p className="hell">hello</p>

        <div className="meee">
          <span>
            <img className="gojo55" src={gojo5} alt="normal_image" />
          </span>
          <span>
            <img className="gojo5" src={gojo5} alt="normal_image" />
          </span>
          <div className="blog1 ">
            <span>
              <img className="shopping" src={blog} alt="shop" />
            </span>
            #Read Our Current Blogs
          </div>
          <div className="blog2">
            Give Suggestion in the form of blogs to help us inovate the Features
            of the Website
          </div>
        </div>

        <div className="givedisplayflex">
            <div>
          <label className="suggestion">Give your Suggestion Below</label>
          <br />
          <input
            className="todolist"
            placeholder="write your blog"
            onChange={(e) => handle(e)}
            value={list}
          ></input>
          <button className="btnpost" onClick={handleadd}>
            Post
          </button>
          {input.map((newterm, index) => {
            return (
              <div >
                <span>
                  <div className="showiterm2">{newterm} </div>
                </span>
                <span>
                  <button
                    className="deletpost"
                    onClick={() => handaldelete(index)}
                  >
                    Delete Blog
                  </button>
                </span>
              </div>
            );
          })}

          {blogs.map((blog) => (
            <div key={blog.id}>
              <span>
                <div className="showiterm1"> {blog.body} </div>
              </span>
              <span>
                <button
                  className="deletpost"
                  onClick={() => handledelete(blog.id)}
                >
                  Delete blog
                </button>
              </span>
            </div>
          ))}
          </div>
          <div>
                <img className="newimage" src={saturo} alt="kkkk" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
