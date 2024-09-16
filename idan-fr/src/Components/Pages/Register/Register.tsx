import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterModel } from "../../../Models/RegisterModel";
import notifyService from "../../../Sevices/NotificationService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import urlService from "../../../Sevices/UrlService";


function Register(): JSX.Element {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        userId:
            yup.string()
                .matches(/^\d{9}$/, 'ID must be exactly 9 digits')
                .required('ID is required'),
        firstName:
            yup.string()
                .required("First Name is required"),
        lastName:
            yup.string()
                .required("Last Name is required"),
        address:
            yup.string()
                .required("Address is required"),
        phone:
            yup.string()
                .required("Phone is required"),
        email:
            yup.string()
                .email("Invalid Email format")
                .required("Email is required"),
        password:
            yup.string()
                .length(6, "password must be 6 charters")
                .required("Password is required"),
        confirm:
            yup.string()
                .required("Password is required")
                .oneOf([yup.ref('password')], 'Your passwords do not match.')
    });


    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<RegisterModel>({ mode: "all", resolver: yupResolver(schema) });

    //Developer Code to send to remote sever
    const sendDataToRemoteServer = async (register: RegisterModel) => {

        try {
            // Sending the new user details to the backend server.
            const response = await axios.post(urlService.urls.users, register);
            // Saving the first name of the user that currently register to the local storage browser.
            localStorage.setItem("firstName", JSON.stringify(register.firstName));
            // Saving the last name of the user that currently register to the local storage browser.
            localStorage.setItem("lastName", JSON.stringify(register.lastName));
            // Saving the user id of the user that currently register to the local storage browser.
            localStorage.setItem("userId", JSON.stringify(register.userId));
            // navigate to order route.
            navigate('/order');
            notifyService.success('Added register successfully');
        }
        catch (error) {
            notifyService.error('Unable to add register : ' + error)
        }
    }


    return (
        <div className="Register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(sendDataToRemoteServer)}>
                {(errors?.userId) ? <span>{errors.userId.message}</span> : <label>Id:</label>}
                <input {...register("userId")} type="id" placeholder="Id..." />

                {(errors?.firstName) ? <span>{errors.firstName.message}</span> : <label>First name:</label>}
                <input {...register("firstName")} type="text" placeholder="First Name..." />

                {(errors?.lastName) ? <span>{errors.lastName.message}</span> : <label >Last name:</label>}
                <input {...register("lastName")} type="text" placeholder="Last Name..." />

                {(errors?.address) ? <span>{errors.address.message}</span> : <label>Address:</label>}
                <input {...register("address")} type="text" placeholder="address..." />
                
                {(errors?.phone) ? <span>{errors.phone.message}</span> : <label>Phone:</label>}
                <input {...register("phone")} type="text" placeholder="phone..." />

                {(errors?.email) ? <span>{errors.email.message}</span> : <label>Email:</label>}
                <input {...register("email")} type="email" placeholder="Email..." />

                {(errors?.password) ? <span>{errors.password.message}</span> : <label>Password:</label>}
                <input {...register("password")} type="password" placeholder="Password..." />

                {(errors?.confirm) ? <span>{errors.confirm.message}</span> : <label>Confirm Password:</label>}
                <input {...register("confirm")} type="password" placeholder="Confirm Password..." /><br />

                <button type="submit" className="button-44" disabled={!isValid}>Send</button>


            </form>
        </div>
    );
}

export default Register;
