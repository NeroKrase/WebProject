import React from "react";
import {Formik} from "formik";
import * as EmailValidator from "email-validator"
import * as Yup from "yup"
import styles from "./Form.module.css"

const Form = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Contact us</h1>
            <p className={styles.desc}>Use the contact form below to reach out and we’ll get back to you as soon as possible! You can also give us a call, or get in touch with us via our social media channels listed below.</p>
            <Formik
                initialValues={{name: "", email: "", subject: "", message: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    alert("Submitted");
                }}
                validate={values => {
                    let errors = {};
                    const nameRegExp = /^[a-zA-Z ]*$/
                    if (!values.name) {
                        errors.name = "Required";
                    } else if (!nameRegExp.test(values.name)) {
                        errors.name = "Your name contains numbers?  (☉_☉)"
                    }

                    if (!values.email) {
                        errors.email = "Required";
                    } else if (!EmailValidator.validate(values.email)) {
                        errors.email = "Invalid email address"
                    }

                    if (!values.subject) {
                        errors.subject = "Required";
                    }

                    if (!values.message) {
                        errors.message = "Required";
                    }

                    return errors;
                }}

                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Required").matches(/^[a-zA-Z ]*$/, "Name cannot contain numbers!"),
                    email: Yup.string().email().required("Required"),
                    subject: Yup.string().required("Required"),
                    message: Yup.string().required("Required")
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.name && touched.name && styles.error}`}
                            />
                            {errors.name && touched.name && (
                                <div className={styles.input_feedback}>{errors.name}</div>
                            )}
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.email && touched.email && styles.error}`}
                            />
                            {errors.email && touched.email && (
                                <div className={styles.input_feedback}>{errors.email}</div>
                            )}
                            <label className={styles.label} htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Enter the subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.input} ${errors.subject && touched.subject && styles.error}`}
                            />
                            {errors.subject && touched.subject && (
                                <div className={styles.input_feedback}>{errors.subject}</div>
                            )}
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`${styles.textarea} ${errors.message && touched.message && styles.error}`}
                            />
                            {errors.message && touched.message && (
                                <div className={styles.input_feedback}>{errors.message}</div>
                            )}
                            <button className={styles.button} type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }
                }
            </Formik>
        </div>
    )
}

export default Form