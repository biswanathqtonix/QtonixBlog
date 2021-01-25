const pageReducer = (state=null,action) => {
    switch(action.type){
        case 'DYNAMIC_PAGE_DATA':
            return action.payload;
        default :
            return state;
    }
}
export default pageReducer;