import {createStore} from 'redux'
const initialState = {
  isLogin:false,
  userInfo: {}
}

const reducer = (state = initialState,action)=>{
  switch (action.type) {
    case "setUserInfo":
      return {
        ...state,
        isLogin: true,
        userInfo: action.value
      };
    default:
      return state;
  }
}

const store = createStore(reducer)
export default store;