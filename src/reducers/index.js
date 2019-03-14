import { createStore } from "redux";
// import { combineReducers } from 'redux';

const bookReducer = function(state = {
  bookdata: [],
  bannerdata: [],
  kinddata: []
}, action) {
  const { type, data } = action
  switch (type) {
    case "BOOK_DATA" : {
      return {
        bookdata : data,
        bannerdata : state.bannerdata,
        kinddata: state.kinddata
      }
    }
    case "BANNER_DATA" : {
      return {
        bookdata : state.bookdata,
        bannerdata : data,
        kinddata: state.kinddata
      }
    }
    case "KIND_DATA" : {
      return {
        bookdata : state.bookdata,
        bannerdata : state.bannerdata,
        kinddata: data
      }
    }
    default : 
      return state;
  }
}

// const allReducer = {
//   bookReducer
// }

// const rootReducer = combineReducers(allReducer)

const store = createStore(bookReducer);

export default store
