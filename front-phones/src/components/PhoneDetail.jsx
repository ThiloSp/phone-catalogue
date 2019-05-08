import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhone } from "../actions";
import { Link } from "react-router-dom";

export class PhoneDetail extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPhone(id);
  }

  render() {
    let phone = this.props.state.singlePhone;
    let loading = this.props.state.loading;
    if (loading) {
      return (
        <div className="container">
          <div className="spinner" />
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="container widthDetail">
          <h1>{phone.name}</h1>
          <div className="flexDetail">
            <img src={phone.picture} className="phonePic margin" alt="" />
            <div className="flexDates margin">
              <p>
                <span>Price: </span>
                {phone.price}
              </p>
              <p>
                <span>Colours: </span>
                {phone.colours}
              </p>
              <p>
                <span>Item Dimensions: </span>
                {phone.size}"
              </p>
              <p>
                <span>Item Weight: </span>
                {phone.weight}
              </p>
              <p>
                <span>Customer Rating: </span>
                {phone.rating}
              </p>
            </div>
          </div>
          <p className="description">
            <span>Description: </span>
            <br />
            {phone.description}
          </p>
          <Link to="/">
            <h4>Back to list</h4>
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(
  mapStateToProps,
  { getPhone }
)(PhoneDetail);
