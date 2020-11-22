import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../../store/actions";
const mapStateToProps = state => ({
  userFirstName: state.user.text.first,
  userLastName: state.user.text.last,
})
const mapDispatchToProps = (dispatch) => ({
    fetchUser: (payload) => dispatch({ type: "SET_USERS", payload }),
    fetchUser: fetchUser(dispatch),
  });
const Users = (props) => {
  const updateUser = () => {
    props.fetchUser();
  };
      React.useEffect(() => {
        props.fetchUser();
      }, [props.userFirstName, props.userLastName]);
      return (
        <div>
          <p onClick={() => updateUser()}>User: {props.userFirstName} {props.userLastName}</p>
        </div>
      );
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Users))