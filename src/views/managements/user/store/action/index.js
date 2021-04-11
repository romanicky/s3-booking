import axios from "axios"

const baseURL = process.env.REACT_APP_API_HOST
// ** Get all Roles
export const getAllRoles = () => {
  return async (dispatch) => {
    await axios.get(`${baseURL}roles`).then((response) => {
      dispatch({
        type: "GET_ROLES",
        data: response.data
      })
    })
  }
}

// ** Get all Data
export const getAllData = () => {
  return async (dispatch) => {
    await axios.get(`/users/list/all-data`).then((response) => {
      dispatch({
        type: "GET_ALL_DATA",
        data: response.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = (params) => {
  return async (dispatch) => {
    await axios.get(`${baseURL}users`, params).then((response) => {
      dispatch({
        type: "GET_DATA",
        data: response.data.users,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get User
export const getUser = (id) => {
  return async (dispatch) => {
    await axios
      .get(`${baseURL}users/user`, { id })
      .then((response) => {
        dispatch({
          type: "GET_USER",
          selectedUser: response.data.user
        })
      })
      .catch((err) => console.log(err))
  }
}

// ** Add new user
export const addUser = (user) => {
  return (dispatch, getState) => {
    axios
      .post(`${baseURL}users`, user)
      .then(() => {
        dispatch({
          type: "ADD_USER",
          user
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
      .catch((err) => console.log(err))
  }
}

// ** Delete user
export const deleteUser = (id) => {
  return (dispatch, getState) => {
    axios
      .delete(`${baseURL}users/${id}`)
      .then((response) => {
        dispatch({
          type: "DELETE_USER"
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}
