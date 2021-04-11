// ** Initial State
const initialState = {
  allData: [],
  data: [],
  roles: [],
  total: 1,
  params: {},
  selectedUser: null
}

const usersManagements = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
    case 'GET_ROLES':
      return { ...state, roles: action.data }
    case 'ADD_USER':
      return { ...state }
    case 'DELETE_USER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default usersManagements