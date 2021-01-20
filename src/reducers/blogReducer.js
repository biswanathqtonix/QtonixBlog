const istate = {
    categoryblog:[],
    blogs:[],
    blogscategory:[],
}

const blogReducer = (state=istate,action) => {
    switch(action.type){
        case 'FETCH_ALL_BLOGS':{
            return{
                ...state,
                blogs:action.payload
            }
        }
        case 'FETCH_ALL_BLOGS_CATEGORY':{
            return{
                ...state,
                blogscategory:action.payload
            }
        }

        case 'FETCH_CATEGORY_BLOG':{
            return{
                ...state,
                categoryblog:action.payload

            }
        }
        default :
            return state;
    }
}

export default blogReducer;