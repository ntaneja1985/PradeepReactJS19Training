import AuthService from "../../services/Auth.service.ts";
import {createReducer} from "@reduxjs/toolkit";
import {authActions} from "../actions/auth.actions.ts";

const initialState = {
    currentUser: AuthService.getUser()
}

const authReducer = createReducer(initialState,(builder) =>{
    builder
        .addCase(authActions.login,(state,action)=>{
            state.currentUser = action.payload;
            AuthService.setAuthUser(action.payload);
        })
        .addCase(authActions.logout,(state,action)=>{
            state.currentUser = null;
            AuthService.removeAuthUser();
        })
})

export default authReducer