import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormHandle = this.onFormHandle.bind(this);
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState(() => {
      return {
        term
      };
    });
  }

  onFormHandle(e) {
    e.preventDefault();

    this.props.dispatch(fetchWeather(this.state.term));
    this.setState(() => ({ term: "" }));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormHandle} >
        <div className="row">
          <div className="col-xs-10">
          <input
            className="form-control"
            type="text"
            placeholder="Get the forecast for the next 5 days"
            value={this.state.term}
            onChange={this.onInputChange}
            autoFocus
          />
          </div>
        <div className="col-xs-2" style={{width:"100%"}}>
        <span >
            <button type="submit" className="btn btn-primary">
              Searh
            </button>
          </span>
        </div>
         
        </div>
          
        </form>
      </div>
    );
  }
}

export default connect()(SearchBar);
