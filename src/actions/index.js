import API from '../api/API';

// * GET NAVBAR MENU * //
export const fetchNavbarMenu = () => async dispatch => {
    const response = await API.get('menu/5ff7218cb35f4f4170697f28');
    dispatch({type:'FETCH_NAV_MENUS',payload:response.data.data.menu})
}

// * FETCH ALL BLOGS * //
export const fetchAllBlogs = () => async dispatch => {
    const response = await API.get('blog');
    dispatch({type:'FETCH_ALL_BLOGS',payload:response.data})
}

// * FETCH ALL BLOGS CATEGORYS LIST * //
export const fetchAllBlogsCategory = category => async dispatch => {
    const response = await API.get(`blog/category/${category}`);
    dispatch({type:'FETCH_ALL_BLOGS_CATEGORY',payload:response.data})
}

// * FETCH CATEGORY BLOG * //
export const fetchCategoryBlog = category => async dispatch => {
    const response = await API.get(`blogcategory/view/${category}`);
    dispatch({type:'FETCH_CATEGORY_BLOG',payload:response.data})
}


// * FETCH LATEST NO OF BLOGS * //
export const fetchGetNoLatestBlog = no => async dispatch => {
    const response = await API.get(`blog/latest/${no}`);
    dispatch({type:'FETCH_NO_LATEST_BLOG',payload:response.data})
}