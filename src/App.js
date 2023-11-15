import React from "react";
import { connect } from "react-redux";
import { products } from "./products";

class App extends React.Component {
  state = {
    product: products[0],
  };
  

  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    const { product } = this.state;
    return (
      <>
      <div style={{ backgroundColor: "#e0e0eb", width: "1000px", height: "450px", position: "absolute", right: "30%", left: "15%" }}>
        <div className="cart-items-container">
          <div style={{ display: "flex", alignItems: "top", justifyContent: "space-between", margin: "50px" }} className="items-info">
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <img style={{ width: "200px" }} src={product.thumbnail} alt="image" />
              </div>
              <div className='title'>
                <h2>{product.title}</h2>
                <p style={{ color: "#0000e6" }}>Description</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} className="right-part">
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", paddingRight: "20px" }}>
                  <button onClick={this.increment} className="btn btn-success mr-5">
                   +
                  </button>
                  <h2 className="mt-5 display-1">{this.props.count}</h2>
                  <button onClick={this.decrement} className="btn btn-danger">
                   -
                  </button>
                </div>
                <div>
                  <h2>{product.price}₹</h2>
                </div>
              </div>
              <div style={{ marginRight: "60px", color: "red" }}>Remove</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ marginLeft: "60px", color: "#c2c2a3" }}>SUBTOTAL</h4>
            <h3 style={{ marginRight: "60px" }}>{this.props.count * product.price}₹</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ marginLeft: "60px", color: "#c2c2a3" }}>SHIPPING</h3>
            <h3 style={{ marginRight: "60px" }}>FREE</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ marginLeft: "60px", color: "#c2c2a3" }}>TOTAL</h3>
            <h3 style={{ marginRight: "60px" }}>{this.props.count * product.price + 0}₹</h3>
          </div>
        </div>
      </div>
    </>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
