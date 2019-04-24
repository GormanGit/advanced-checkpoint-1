import App from "./App";
import {loadMyMovieList} from "./actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function mapStateToProps(state){
  return {
    myMovieList: state.myMovieList,
    searchResults: state.searchResults,

  };
}
function mapDispatchToProps(dispatch){
  return {
    loadMyMovieList: function (movies) {
      dispatch(loadMyMovieList(movies));
    }
  };
}
App.propTypes = {
  myMovieList: PropTypes.array.isRequired,
  searchResults: PropTypes.array.isRequired,

}
export default connect(mapStateToProps, mapDispatchToProps)(App)