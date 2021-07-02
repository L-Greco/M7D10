import { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { typeQuery, fetchWeatherAction } from "../actions";

const mapStateToProps = (state) => ({
  query: state.query,
});
const mapDispatchToProps = (dispatch) => ({
  typingQuery: (query) => {
    dispatch(typeQuery(query));
  },
  fetchingWeather: (endpoint, query, key) => {
    dispatch(fetchWeatherAction(endpoint + query + key));
  },
});

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleEnter = () => {
    console.log(
      process.env.REACT_APP_ENDPOINT,
      this.state.query,
      process.env.REACT_APP_WEATHER_API_KEY
    );
    if (this.props.history.pathname !== "/") {
      this.props.history.push(`/`);
    }
    if (this.props.query !== this.state.query) {
      this.props.typingQuery(this.state.query);
      this.props.fetchingWeather(
        process.env.REACT_APP_ENDPOINT,
        this.state.query,
        process.env.REACT_APP_WEATHER_API_KEY
      );
    }
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "flex-end" }} className="mt-3">
        <input
          className="form-control mt-3 "
          type="search"
          style={{ fontFamily: '"Indie Flower" !important' }}
          placeholder="Search for the the town your are looking for ..."
          aria-label="Search"
          value={this.state.query}
          onChange={(e) => {
            this.setState({ query: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "NumpadEnter") {
              this.handleEnter();
            }
          }}
        ></input>
        <button
          className="btn btn-outline-info px-4"
          onClick={() => {
            this.handleEnter();
          }}
        >
          Go!
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
