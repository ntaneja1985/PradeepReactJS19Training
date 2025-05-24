import {createAction} from "@reduxjs/toolkit";

export const authActions = {
    login: createAction("auth/login"),
    logout: createAction("auth/logout"),
}