import API from '../api/API';

// * THEME CHANGE * //
export const websiteTheme = theme => async dispatch => {
    dispatch({type:'THEME_CHANGE',payload:theme})
}


// * FOOTER MODAL * //
export const callFooterModal = data => async dispatch => {
    dispatch({type:'SHOW_FOOTER_MODAL',payload:data})
}
export const footerModalTab1 = data => async dispatch => {
    dispatch({type:'IS_FOOTER_MODAL_TAB1_OPEN',payload:data})
}
export const footerModalTab2 = data => async dispatch => {
    dispatch({type:'IS_FOOTER_MODAL_TAB2_OPEN',payload:data})
}
export const footerModalTab3 = data => async dispatch => {
    dispatch({type:'IS_FOOTER_MODAL_TAB3_OPEN',payload:data})
}
export const footerModalClose = data => async dispatch => {
    dispatch({type:'TOTAL_MODAL_CLOSE',payload:data})
}


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


// * FETCH HOME PAGE DATA * //
export const fetchHomePage = no => async dispatch => {
    const response = await API.get('/blog/homepage');
    dispatch({type:'FETCH_HOME_DATA',payload:response.data})
}


// * FETCH DYNAMIC PAGE DATA * //
export const fetchDynamicPage = pageurl => async dispatch => {
    const response = await API.get(`/page/viewpage/${pageurl}`);
    dispatch({type:'DYNAMIC_PAGE_DATA',payload:response.data.data})
}


// * GET USER DETAILS * //
export const storeUserDetails = data => async dispatch => {
    dispatch({type:'USER_DETAILS',payload:data})
}
