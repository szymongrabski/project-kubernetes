import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddBookForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      authors: '',
      image: ''
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Required'),
      subtitle: Yup.string().required('Required'),
      image: Yup.string().url('Invalid URL').required('Required'),
      authors: Yup.string().required('Required')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post('http://localhost:8080/books', values);
        console.log('Server response:', response.data);
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="subtitle">Subtitle:</label>
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subtitle}
        />
        {formik.touched.subtitle && formik.errors.subtitle ? (
          <div>{formik.errors.subtitle}</div>
        ) : null}

        <label htmlFor="authors">Authors (comma-separated):</label>
        <input
          id="authors"
          name="authors"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.authors}
        />
        {formik.touched.authors && formik.errors.authors ? (
          <div>{formik.errors.authors}</div>
        ) : null}

        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
