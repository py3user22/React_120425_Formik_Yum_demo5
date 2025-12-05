import React from 'react';
import { useFormik } from "formik";
import { userSchema } from "../validation/userSchema_1201.jsx"
import {Input, Text } from "@chakra-ui/react";


function FormikYumForm() {

    const formik = useFormik({
        initialValues: {  name: "", email: "", password: "",  },
        validationSchema: userSchema,
        onSubmit: (values) => { console.log("Form submitted: ", values) }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input type="text" name="name"
                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                   value={formik.values.name} placeholder="Jesus Gomez @120125" color="blue" />

            {formik.touched.name && formik.errors.name && ( <Text color="red.400">{formik.errors.name}</Text> )}


            <Input type="email" name="email"
                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                   value={formik.values.email} placeholder="jesusg31.2013@gmail.com" color="green.200" />

            {formik.touched.email && formik.errors.email && ( <Text color="red.400">{formik.errors.email}</Text> )}


            <Input type="password" name="password"
                   onChange={formik.handleChange} onBlur={formik.handleBlur}
                   value={formik.values.password} placeholder="Enter password" color="black" />

            {formik.touched.password && formik.errors.password && ( <Text color="red.400">{formik.errors.password}</Text> )}

            <button type="submit">Submit</button>

        </form>
    );
}

export default FormikYumForm;