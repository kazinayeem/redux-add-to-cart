import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { remove_product } from "../redux/action/action";
function Removeprodict(props) {
  const cardproducts = useSelector((state) => state.reducer.card_product);
  const dispatch = useDispatch();

 const total = cardproducts.reduce((a,b) => a+b.price * b.qnt,0)
  return (
    <div>
      <h2>total price : {total} tk </h2>

      <div className="bg-info">
        {cardproducts.length === 0 ? (
          <h4>no cards</h4>
        ) : (
          cardproducts.map((product) => (
            <div key={Math.random()} className="list-group-item m-1">
              <span>{product.product_name}</span>
              <br />
              <span>price : {Number(product.price)}</span>
              <br />

              <h2>tota price : {parseInt(product.price * product.qnt)}</h2>

              <span>q :{product.qnt}</span>
              <br />
              <span>pid : {product.pid}</span>
              <button
                onClick={() => dispatch(remove_product(product.id))}
                className="btn btn-danger"
              >
                remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default connect()(Removeprodict);
