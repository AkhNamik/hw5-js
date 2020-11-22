import React from "react"
import { connect } from "react-redux"
import { fetchJoke } from "../../store/actions";
const mapStateToProps = state => ({
    jokeText: state.joke.text
})
const mapDispatchToProps = (dispatch) => ({
    setJoke: (payload) => dispatch({ type: "SET_JOKE", payload }),
    fetchJoke: fetchJoke(dispatch),
  });
const Joke = (props) => {
    const updateJoke = () => {
        props.fetchJoke();
      };
    
      React.useEffect(() => {
        updateJoke();
      }, []);
    
      return (
        <div>
          <p onClick={() => updateJoke()}>Joke: {props.jokeText}</p>
        </div>
      );
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Joke))
