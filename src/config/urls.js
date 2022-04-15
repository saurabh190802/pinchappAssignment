export const API_BASE_URL = "http://hiring-tests.herokuapp.com";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const SIGNUP = getApiUrl('/addUser');