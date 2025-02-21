import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "wouter";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [, setLocation] = useLocation();

  const handleSubmit = async (values, formikHelpers) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register`,
        values
      );

      console.log("Registration successful: ", response.data);

      setLocation("/");
    } catch (error) {
      console.error(
        "Registration failed",
        error.response?.data || error.message
      );
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={formik.isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
