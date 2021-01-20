const menuReducer = (state=[],action) => {
    switch(action.type){
        case 'FETCH_NAV_MENUS':
            return action.payload
        default:
            return state;
    }
}

export default menuReducer;