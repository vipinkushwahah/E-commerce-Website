import "./login.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import { useState } from "react";
import saturo from "../../assets/gojo (1).jpg";
import gojo from "../../assets/gojo (2).jpg";
import {  Form, redirect, useActionData, useNavigate } from "react-router-dom";

export default function CreateAccount ()  {
 
  const [action, setaction] = useState("Login");
  // const [details, setdetails] = useState({ name: "", email: "", password: "" });
  const data = useActionData()
  const navigate = useNavigate();


  useEffect(() => {
    VanillaTilt.init(document.querySelector(".box"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.5,
    });
  });

  // const handelchange = (name, event) => {
  //   event.preventDefault();
  //   setdetails((prv) => {
  //     return {
  //       ...prv,
  //       [name]: event.target.value,
  //     };
  //   });
  // };

  const onChnagePage = (action) => {
    // console.log("details", details);
    setaction(action);
    // let isSignUp = window.confirm("your Account is Created!");
    // if(isSignUp){
    //   navigate('/')
    // }else {
    //   return;
    // }
  };
  const onChnagePage1 = (action) => {
    
      // console.log("details", details);
      setaction(action);
      //this is for navigation similler to login button! 
   
    //   let isSignUp = window.confirm(" Account Accsesed !");
    //   if(isSignUp){
    //     navigate('/')
    //   }else {
    //     return;
    // };
}

//form

 
  return (
    <div className="gojo1">
      <div>
        <img className="gojo" src={saturo} alt="gojo" />
        <div className="to">logIn to shop</div>
      </div>
      <div className="box1">
        <div className="box">
          <div className="elements code"></div>
          <div className="elements name">
            <h2>{action}</h2>
          </div>
          <div className="elements content">
            <Form method="post" action="/create">
              {action === "Login" ? (
                <div></div>
              ) : (
                <input
                  className="password1"
                  type="text"
                  name="name"
                  placeholder="name"
                 required
                  // onChange={(e) => handelchange("name", e)}
                />
              )}

              <input
                className="password1"
                type="email"
                name="email"
                placeholder="email"
               required
                // onChange={(e) => handelchange("email", e)}
              />
              <input
                className="password1"
                type="password"
                name=" password"
                placeholder="password"
                required
                // onChange={(e) => handelchange("password", e)}
              />
              <div className={action === "Login" ? "submit" : "submit"}>
                <button
                  type="submit"
                  className="newform"
                  onClick={() => onChnagePage1("Login")}
                >
                  Login
                </button>
              </div>
              <div className={action === "Sign Up" ? "submit" : "submit"}>
                <button
                  type="submit"
                  className="newform"
                  onClick={() => onChnagePage("Sign Up")}
                >
                  signUp
                </button>
              </div>
              {data && data.error && <p>{data.error}</p>}
            </Form>
          </div>
          <div className="card"></div>
        </div>
      </div>
      <div>
        <img className="gojo2" src={gojo} alt="gojo" />
      </div>
    </div>
  );
};


export const HomeAction = async  ({ request })=>{
  console.log(request)
  
    const data = await request.formData()


    console.log("dtaaaa", data)

    const submission = {
      name:data.get('name'),
      email:data.get('email'),
      
    }

    console.log("submission", submission)

    //send post request
    if(submission.email.length<10){
      return {error: 'email is empty'}
    }

    //redirect
    return redirect('/')
}
