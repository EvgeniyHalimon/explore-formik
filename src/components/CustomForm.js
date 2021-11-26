import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Select, MenuItem, FormControl, Box}  from '@mui/material';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .max(20, 'Must be 15 characters or less')
        .required('Name is required'),
    surname: yup
        .string('Enter your surname')
        .max(20, 'Must be 15 characters or less')
        .required('Surname is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

function CustomForm(){
    const formik = useFormik({
    initialValues: {
        name: '',
        surname: '',
        email: '',
        role: 'Admin',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values)
        alert(JSON.stringify(values, null, 2));
    },
    });

    return (
        <Box
            className="form-container"
            onSubmit={formik.handleSubmit}
            component="form"
            >
            <FormControl fullWidth>
            <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                type="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                fullWidth
                id="surname"
                name="surname"
                label="Surname"
                type="surname"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
            />
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            
            <Select
                labelId="role1"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                fullWidth
            >
                <MenuItem value={'Admin'}>Admin</MenuItem>
                <MenuItem value={'User'}>User</MenuItem>
            </Select>
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
            </FormControl>
        </Box>
    )
}

export default CustomForm
