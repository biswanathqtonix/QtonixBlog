import {combineReducers} from 'redux'

import menuReducer from './menuReducer'
import blogReducer from './blogReducer'
import homeReducer from './homeReducer'
import pageReducer from './pageReducer'
import userReducer from './userReducer'
import themeReducer from './themeReducer'

// const songReducer = () => {
//     return[
//         {title:'Song1', duration:'4.45'},
//         {title:'Song2', duration:'5.45'},
//         {title:'Song3', duration:'6.45'},
//         {title:'Song4', duration:'7.45'},
//         {title:'Song5', duration:'8.45'},
//     ]
// };

export default combineReducers({
    // songs:songReducer,
    theme:themeReducer,
    menu:menuReducer,
    blog:blogReducer,
    homedatas:homeReducer,
    page:pageReducer,
    userdetails:userReducer,
})