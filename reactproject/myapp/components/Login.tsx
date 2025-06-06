
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {useState} from "react";
import {useUser} from "../context/UserProvider.tsx";
import AuthService from "../services/Auth.service.ts";
import {useNavigate} from "react-router-dom";

function Login() {

    const initialLoginForm = {
        username:"",
        password:""
    }

    const [message, setMessage] = useState("");
    const { loginClick } = useUser();
    const navigate = useNavigate();
    // Safe destructuring

    const loginValidationSchema = {
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required")
    }

    const onLogin = (frm) =>{
        if(frm.username ==="admin" && frm.password ==="admin"){
            alert("User logged in");
            setMessage("")
            debugger;
            const user = { username: frm.username, password: frm.password };
            //loginClick(user);
            AuthService.authenticate(frm)
                .then(response =>{
                    if(response.status === 200){
                        setMessage("User logged in");
                        loginClick(response.data);
                        navigate('/databinding');
                    }
                    else {
                        setMessage("User not logged in");
                    }

                })
        } else {
            setMessage("User cannot login")
        }
    }
    return (
        <>
        <Formik initialValues={initialLoginForm}
                 onSubmit={(values)=>onLogin(values)}>
            <Form>
                <div className="form-group">
                    <label>Enter User Name</label>
                    <Field name="username" type="text" className="form-control"></Field>
                    <ErrorMessage component="label" name="username" className="text-danger"></ErrorMessage>
                </div>
                <div className="form-group">
                    <label>Enter Password</label>
                    <Field name="password" type="password" className="form-control"></Field>
                    <ErrorMessage component="label" name="password" className="text-danger"></ErrorMessage>
                </div>
                <div>
                    <input  type="submit" className="btn btn-primary" value="Login"></input>
                </div>
            </Form>
        </Formik>
            {message && <div className="alert">{message}</div>}
        </>
    )
}

export default Login
