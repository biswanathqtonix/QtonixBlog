const iState={
    isFooterMainTab:true,
    isFooterModalOpen:true,
    isFooterModalTab2Open:false,
    isFooterModalSubmit:false
}


const footerModalReducer = (state=iState, action) => {
    switch(action.type){
        case 'TOTAL_MODAL_CLOSE':{
            return{
                ...state,
                isFooterModalOpen:action.payload
            }
        }

        case 'SHOW_FOOTER_MODAL':{
            return{
                ...state,
                isFooterModalOpen:action.payload
            }
        }
        case 'IS_FOOTER_MODAL_TAB1_OPEN':{
            return{
                ...state,
                isFooterMainTab:action.payload
            }
        }
        case 'IS_FOOTER_MODAL_TAB2_OPEN':{
            return{
                ...state,
                isFooterModalTab2Open:action.payload
            }
        }
        case 'IS_FOOTER_MODAL_TAB3_OPEN':{
            return{
                ...state,
                isFooterModalSubmit:action.payload
            }
        }

        
        default:
            return state
    }
}

export default footerModalReducer