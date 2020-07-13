import React from 'react';
import * as Yup from 'yup';
import 'date-fns';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const BookForm = (props) => {
  const initialValues = {
    avatar: props.book ? props.book.avatar : {},
    name: props.book ? props.book.name : '',
    author: props.book ? props.book.author : '',
    ISBN: props.book ? props.book.ISBN : '',
    rating: props.book ? props.book.rating : 0,
    available: props.book ? props.book.available : '',
    sold: props.book ? props.book.sold : 0,
    description: props.book ? props.book.description : '',
    price: props.book ? props.book.price : '',
    pages: props.book ? props.book.pages : '',
    edition: props.book ? props.book.edition : '',
    commemnts: props.book ? props.book.commemnts : [],  // dict {User int:ID? : Comment:Int } ??? 
    ratings: props.book ? props.book.ratings : [],  // dict {User int:ID? : Rating:Int } ??? 
    dateOfPublication: props.book ? props.book.dateOfPublication : new Date('2014-08-18')
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('This Field is Required!'),
    author: Yup.string().required('This Field is Required!'),
    ISBN: Yup.number().required('This Field is Required!'),
    description: Yup.string().required('This Field is Required!'),
    rating: Yup.number().min(0).max(5),
    available: Yup.number().min(0),
    sold: Yup.number().min(0),
    price: Yup.number().required('This Field is Required!').min(0),
    pages: Yup.number().required('This Field is Required!').min(0),
    edition: Yup.number().required('This Field is Required!').min(1),
    // commemnts: '',
    // ratings: '',
    dateOfPublication: Yup.date().max(new Date())
  })

  const onSubmit = ((values, onSubmit) => {
    props.onSubmit({ ...values });
    onSubmit.setSubmitting(false)
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
        {(formProps) => (
          <Form>
            <Field
              component={TextField}
              name="name"
              type="name"
              label="BookName"
            />
            <Field
              component={TextField}
              name="author"
              type="name"
              label="Author"
            />
            <Field
              component={TextField}
              name="ISBN"
              type="number"
              label="ISBN"
            />
            <Field
              component={TextField}
              name="available"
              type="number"
              label="Available at store"
            />
            <Field
              component={TextField}
              name="price"
              type="number"
              label="Price"
            />
            <Field
              component={TextField}
              name="pages"
              type="number"
              label="Pages"
            />
            <Field
              component={TextField}
              name="edition"
              type="number"
              label="Edition"
            />
            <Field
              name="dateOfPublication"
              component={KeyboardDatePicker}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              label="Publication date"
              value={initialValues.dateOfPublication}
              onChange={onDateChange}
            />
            <label>Description</label>
            <Field
              name="description"
              component='textarea'
              label="Description"
            />
            <ErrorMessage name="description" />
            <input
              type='file'
              name='avatar'
              onChange={(e) => {
                formProps.setFieldValue('avatar', e.target.files[0])
              }}
            />
            <Button
              type="submit"
              size="large"
              disabled={!(formProps.isValid && formProps.dirty) || formProps.isSubmitting}>
              Submit
              </Button>
          </Form>
        )}
      </Formik >
    </MuiPickersUtilsProvider>
  );
};

export default BookForm;