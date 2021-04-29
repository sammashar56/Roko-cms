// user logout method that simply deletes the user token on local storage 


export  function logoutUser () {
    localStorage.removeItem('user')
}

export function loadToken(){
    return localStorage.getItem('user');
}
 