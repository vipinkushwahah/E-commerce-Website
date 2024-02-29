import "./Log_in.css";

import {sukuna1,cart, shirt1,shirt2,shirt3} from "../../constant/constant"

const Cart = () => {
  return (
    <div>
      <p>kk</p>
      <div className="meeee">
        <span>
          <img className="gojo55" src={sukuna1} alt="normal_image" />
        </span>
        <span>
          <img className="gojo5" src={sukuna1} alt="normal_image" />
        </span>
        <div className="blog1 ">
          <span>
            <img className="shopping" src={cart} alt="shop" />
          </span>
          #Shop More With Coupons.
        </div>
        <div className="blog2">Add Your Coupons Code & Save Upto 70%off!.</div>
      </div>
      <div className="displeyflexcontainer">
        <div >
           <div className="divsubtotal"> REMOVE</div> 
           <div className="removelogin1">*</div>
           <div className="removelogin">*</div>
           <div className="removelogin">*</div>
        </div>
        <div>
           <div className="divsubtotal">IMAGE</div> 
           <div><img className="logincontainerimage" src={shirt1} alt="h" /></div>
           <div><img className="logincontainerimage" src={shirt2} alt="h" /></div>
           <div><img className="logincontainerimage" src={shirt3} alt="h" /></div>
        </div>
        <div>
           <div className="divsubtotal">PRODUCT</div> 
           <div className="removelogin1">Cartoon Astronout T_shirt</div>
           <div className="removelogin">Cartoon Astronout T_shirt</div>
           <div className="removelogin">Cartoon Astronout T_shirt</div>
        </div>
        <div>
           <div className="divsubtotal">PRICE</div> 
           <div className="removelogin1">$118.19</div>
           <div className="removelogin">$118.19</div>
           <div className="removelogin">$118.19</div>
        </div>
        <div>
           <div className="divsubtotal">QUANTITY</div> 
           <div><input className="removelogin4" type="number" /></div>
           <div><input className="removelogin3" type="number" /></div>
           <div><input className="removelogin3" type="number" /></div>
        </div>
        <div>
           <div className="divsubtotal">SUBTOTAL</div> 
           <div className="removelogin1">$118.99</div>
           <div className="removelogin">$118.99</div>
           <div className="removelogin">$118.99</div>
        </div>
      </div>
      <div className="carttotaldispley">
        <div>
            <div className="applycoupons">Apply Coupons</div>
            <span><input className="inputcuopon" placeholder="Enter Your Coupon"/></span><span className="couponappley">Apply</span>
        </div>
        <div className="newcarttotal">
            <div className="totalcartstyle">Cart Totals</div>
            <div className="spansubtotal"><span className="subtotalcartstyle">Cart Subtotal</span><span className="subtotalprice">$335</span></div>
            <div className="spansubtotal"><span className="subtotalcartstyle">Shopping</span><span className="subtotalprice">free</span></div>
            <div className="spansubtotal"><span className="subtotalcartstyle1">Total</span><span className="subtotalprice1">$335</span></div>
            <div className="subtotalprice2">Proceed to checkout</div>
        </div>
      </div>
    </div>
  );
};
export default Cart
