import React from "react";
import { connect, Connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  //remove is coming from redux store function in the bottom
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>

      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>

        {/* amount */}
        <p className="amount">{amount}</p>

        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //ownProps use karanne remove karaddi apita remove karana id eka hoyaganna ona e nisa ownProps use karala e Item eke details ganna puluwan
  //ownprops eken wenne component eketa ena props ona ekak access karanna puluwan

  const { id, amount } = ownProps; //getting the remove item id

  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    // using the arrow functuion because remove dispatch work only when remove button clicked.

    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),

    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
//1st arrgument eka null karanne carContainer eken alredy prop ekak ewanawa cartItem ekata enisa aya store eken ganna ona ne, 2nd arrgument eka
//use karanne dispatch eka access karanna
