import React from 'react';
import * as Yup from 'yup';
import 'date-fns';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const UserForm = (props) => {

  const initialValues = {
    name: props.user ? props.user.name : '',
    password: props.user ? props.user.password : '',
    password_check: props.user ? props.user.password_check : '',
    email: props.user ? props.user.email : '',
    country: props.user ? props.user.country : '',
    city: props.user ? props.user.city : '',
    district: props.user ? props.user.district : '',
    street: props.user ? props.user.street : '',
    dateOfBirth: props.user ? props.user.dateOfBirth : new Date('2014-08-18')
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('This Field is Required!'),
    email: Yup.string('Invalid Email Form!').email('Invalid E-mail format!').required('This Field is Required!'),
    password: Yup.string()
      .required('This Field is Required!')
      .min(8, "Password should be more than 8 chars")
      .matches(/[a-zA-Z0-9]/, 'Password should contain only letters or numbers'),
    password_check: Yup.string()
      .required('This Field is Required!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    country: Yup.string().required('This Field is Required!'),
    city: Yup.string().required('This Field is Required!'),
    district: Yup.string().required('This Field is Required!'),
    street: Yup.string().required('This Field is Required!'),
    dateOfBirth: Yup.date().max(new Date())
  })

  const onSubmit = (values => {
    props.onSubmit({ ...values });
  })

  const onDateChange = (date) => {
    if (date) {
      initialValues.dateOfBirth = date
    }
  }

  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}>
      <Formik
        className='form'
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount >
        {(formik) => (<Form>
          <div className='input-group'>
            <div className='text-input'>
              <Field
                component={TextField}
                name="name"
                type="name"
                label="UserName"
                className='text-input'
              />
            </div>
            <div className='text-input'>
              <Field
                name="dateOfBirth"
                component={KeyboardDatePicker}
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                label="Date of birth"
                value={initialValues.dateOfBirth}
                onChange={onDateChange}
              />
            </div>
          </div>
          <div className='input-group'>
            <div className='text-input'>
              <Field
                component={TextField}
                name="password"
                type="password"
                label="Password"
              />
            </div>
            <div className='text-input'>
              <Field
                component={TextField}
                name="password_check"
                type="password"
                label="Confirm Password"
                className='text-input'
              />
            </div>
          </div>
          <div className='text-input'>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="E-mail"
              className='text-input'
            />
          </div>
          <h3 className='label'>Address</h3>
          <div className='input-group'>
            <div className='text-input' >
              <Field
                component={TextField}
                name="country"
                type="text"
                label="Country"
                className='text-input'
              />
            </div>
            <div className='text-input' >
              <Field
                component={TextField}
                name="city"
                type="text"
                label="City"
                className='text-input'
              />
            </div>
            <div className='text-input' >
              <Field
                component={TextField}
                name="district"
                type="text"
                label="District"
                className='text-input'
              />
            </div>
            <div className='text-input' >
              <Field
                component={TextField}
                name="street"
                type="text"
                label="Street"
                className='text-input'
              />
            </div>
          </div>
          <div className='submit-btn'>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={!formik.isValid || formik.isSubmitting}>
              Submit
          </Button>
          </div>
        </Form>)}
      </Formik >
    </MuiPickersUtilsProvider>
  );
};

export default UserForm;