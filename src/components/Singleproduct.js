import React, { useState } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { add_product } from "../redux/action/action";

function Singleproduct(props) {
  const dispatch = useDispatch();
  const [number, setnumber] = useState(1);

  const changenumber = (e) => {
    setnumber(Number(e.target.value));
  };

  return (
    <div className="">
    
      <div className="card">
        <div className="card-header">{props.product.id}</div>
        <input
          style={{ width: "50px" }}
          type="number"
          value={number}
          onChange={changenumber}
        />
        <div className="card-body">
          <h4> {props.product.product_name}</h4>
          <h4>price :{props.product.price}</h4>

          <h4>price :{props.product.type}</h4>
          {props.product.stoke === 0 ? (
            <button
              className="btn btn-danger"
              onClick={() =>   window.alert("product stock is not available")}
            >
              stoke out
            </button>
          ) : (
            <button
              className="btn btn-primary"
              //  onClick={() => card(props.product)}
              onClick={() => dispatch(add_product(props.product, number))}
            >
              Add to card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect()(Singleproduct);
