const themeReducer = (state='today',action) => {
    switch(action.type){
        case 'THEME_CHANGE':
            return action.payload
        default:
            return state
    }
}
export default themeReducer;