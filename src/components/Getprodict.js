import React, { Component } from "react";
import { connect } from "react-redux";
import Singleproduct from "./Singleproduct";
import { add_product } from "../redux/action/action";
import Removeprodict from "./Removeprodict";
import Search from "./Search";

const mapStateToProps = (state) => ({
  products: state.reducer.data,
  cardproduct: state.reducer.card_product,
  count: state.reducer.count,
});
class Getprodict extends Component {
 
  render() {
    return (
      <div className="row ">
      <Search/>
        <div>
          {this.props.count}

          <Removeprodict />
         

          <hr />
        </div>
        {this.props.products.map((product) => (
          <div
            key={product.id}
            style={{ height: "300px" }}
            className="container col-12 col-sm-3 col-md-3"
          >
            <Singleproduct product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, { add_product })(
  Getprodict
);
