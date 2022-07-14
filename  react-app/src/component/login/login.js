import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useNavigate } from 'react-router-dom';

export function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate= useNavigate();
  const [submit, isSubmit] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    // navigate('/card')
  };

  const validate = (values) => {
    const errors = {};

    const regex = /[A-Za-z][6]@.[a-z][3]./i;
    if (!values.email) {
      errors.email = "**Email is Required";
    } else if (regex.test(values.email)) {
      errors.email = "**this is not valid email format";
    }

    if (!values.password) {
      errors.password = "**Password is Required";
    } else if (values.password.length < 4 || values.password.length > 10) {
      errors.password =
        "**password must be greater than 4 characters and less than 10 characters";
    }
    if (values.email === 'test@gmail.com' && values.password === 'test123') {

      isSubmit(true);

     



    }

    return errors;
  };
  return (
    <div className="container-fluid main">
      <div className="row justify-content-center align-items-center mx-auto shadow main_div">
        <div className="col-12 col-md-5 col-lg-5 py-3 px-3">
          <div className="card shadow">
            <form className="loginform" onSubmit={submitHandler}>
              <h2 className="text-start p-2 title">Login</h2>
              <div className="input_div">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="input-box p-2"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-danger text-start p">{formErrors.email}</p>
              </div>

              <div className="input_div">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="input-box p-2"
                  id="exampleInputPassword1"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                <p className="text-danger text-start p">
                  {formErrors.password}
                </p>
              </div>

              <div className="py-2 mx-3 mx-auto">
                Don't have an account click on{" "}
                <a href="/register" className="text-decoration-none">
                  Sign Up
                </a>
              </div>

              <button
                type="submit"
                className="btn w-100 loginbutton mb-3"
                id="LoginBtn"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
