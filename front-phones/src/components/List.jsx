import React, { Component } from "react";
import { connect } from "react-redux";
import { getList } from "../actions/index";
import { Link } from "react-router-dom";

export class List extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    let phones = this.props.state.phones;
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
        <div className="container">
          <h1>List of phones</h1>
          <div className="flexList">
            {phones.map(el => (
              <Link to={`/${el.id}`} key={el.id}>
                <div className="margin">
                  <img src={el.picture} className="phonePic" alt="..." />
                  <h4 class="centerText">{el.name}</h4>
                </div>
              </Link>
            ))}
          </div>
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
const mapDispatchToProps = {
  getList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
