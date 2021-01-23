const homeReducer = (state=null,action) => {
    switch(action.type){
        case 'FETCH_HOME_DATA':
            return action.payload
        default :
            return state;
    }
}

export default homeReducer;