import React from 'react';
import * as Yup from 'yup';
import 'date-fns';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const AuthorForm = (props) => {

  const initialValues = {
    name: props.author ? props.author.name : '',
    email: props.author ? props.author.email : '',
    country: props.author ? props.author.country : '',
    city: props.author ? props.author.city : '',
    dateOfBirth: props.author ? props.author.dateOfBirth : new Date('2014-08-18'),
    books: props.author ? props.author.books : [{ name: '', genre: '' }]
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('This Field is Required!'),
    email: Yup.string().email('Invalid E-mail format!'),
    country: Yup.string(),
    city: Yup.string(),
    books: Yup.array().of(Yup.object().shape({
      name: Yup.string().required('Please add a BookName'),
      genre: Yup.string().required('Please add a genre')
    })),
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
        <Form>
          <Field
            component={TextField}
            name="name"
            type="name"
            label="UserName"
          />
          <Field
            component={TextField}
            name="email"
            type="email"
            label="E-mail"
          />
          <label>Address</label>
          <Field
            component={TextField}
            name="country"
            type="text"
            label="Country"
          />
          <Field
            component={TextField}
            name="city"
            type="text"
            label="City"
          />
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
          <FieldArray name='books'>
            {arrayHelpers => (
              <div>
                {arrayHelpers.form.values.books.map((book, index) => (
                  <div key={index}>
                    <Field
                      name={`books[${index}.name]`}
                      component={TextField}
                      label="Book name"
                    />
                    <Field
                      name={`books[${index}.genre]`}
                      component={TextField}
                      label="Genre"
                    />
                    {index > 0 && (
                      <Button
                        size='small'
                        variant="outlined"
                        color="secondary"
                        type='button'
                        onClick={() => arrayHelpers.remove(index)}>
                        Remove Book
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type='button'
                  onClick={() => arrayHelpers.push({ name: '', genre: '' })}>
                  ADD Another book
                </Button>
              </div>
            )
            }
          </FieldArray>
          <Button type="submit" size="large">Submit</Button>
        </Form>
      </Formik >
    </MuiPickersUtilsProvider>
  );
};

export default AuthorForm;