import axios from "axios";

function setAuthUser(user){
    sessionStorage.setItem("authUser", JSON.stringify(user));
}

function getUser(){
    let currentUser = null
    if(sessionStorage["authUser"] !==  null){
        currentUser = JSON.parse(sessionStorage.getItem("authUser"));
    }
    return currentUser;
}

function removeAuthUser(){
    sessionStorage.removeItem("authUser");
}

const AuthService = {
    setAuthUser,getUser,removeAuthUser,authenticate
}

function authenticate(frm){
    return axios.post(`https://localhost:7283/api/AuthApi/authenticate`, JSON.stringify(frm),{
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res)
        .catch(err => {
            console.log(err)
            throw err;
        })
}

export default AuthService