import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Form1 = (values) => {
	return (
		<Form className='form'>
			<h4>Add Your Information Below!</h4>

			<Field type='text' name='name' placeholder='name' className='field'/>

			<Field type='text' name='email' placeholder='email' className='field'/>

			<Field type='password' name='password' placeholder='password' className='field'/>

			<Field type='checkbox' name='terms' className='field'/>

			<button type='submit'>Submit</button>
		</Form>
	)
}

export default withFormik({
	mapPropsToValues: (values) => {
		return {
			name: values.name || '',
			email: values.email || '',
			password: values.password || '',
			
		}
	},

	validationSchema: yup.object().shape({
		name: yup.string().required('Full name is required!')
	})
})(Form1)