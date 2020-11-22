export const fetchJoke = (dispatch) => () => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch((innerDispatch) =>
          innerDispatch({ type: "SET_JOKE", payload: data })
        )
      })
}

export const fetchUser = (dispatch) => () => {
  setTimeout(() => {
    fetch("https://randomuser.me/api/", {
      headers: {
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch((innerDispatch) =>
          innerDispatch({ type: "SET_USERS", payload: data })
        )
      })
  }, 3000)
}
