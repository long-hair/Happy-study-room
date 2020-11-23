import store from './index';
export default {
  $store: store,
  $getState(){
    return store.getState();
  },
  $dispatch(action){
    store.dispatch(action);
  }
}