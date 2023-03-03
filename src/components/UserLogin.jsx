import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserLogin = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    
    const submit = data => {
        axios.post("https://reqres.in/api/login/", data)
        .then(res => {
            navigate("/api/users")
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => {
            if (err.response.status === 400) {
                alert("Invalid credentials")
            }
            console.log(err.response)})
            reset({
                email: "",
                password: "",
            })
    }

    return (
        <div>
            <section className="m-5">
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register("password")}

                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        </div>
    );
};

export default UserLogin;
