import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../css/main.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	pap: {
		boxShadow: '3px 5px 2px rgba(112, 128, 144, .5)',
		border: '2px solid rgb(236, 203, 203)',
		padding: '0% !mportant',
		width: '30%',
		marginTop: '2.5%',
		borderRadius: ' 4%',
	},
	avatar: {
		marginLeft: '45%',
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		padding: '0%',
		marginTop: theme.spacing(0),
	},
	agree: {
		fontSize: '11px',
		display: 'inlineFlex',
		fontWeight: '100',
	},
	submit: {
		width: '40%',
		padding: '1%',
		marginLeft: '30%',
		fontSize: '12px',
	},
}));

export default function LogIn() {
	const classes = useStyles();
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					console.log('Logging in', values);
					setSubmitting(false);
				}, 500);
			}}
			validationSchema={Yup.object().shape({
				email: Yup.string().email().required('Required'),
				password: Yup.string()
					.required('No password provided.')
					.min(8, 'Password is too short - should be 8 chars minimum.')
					.matches(/(?=.*[0-9])/, 'Password must contain a number.'),
			})}
		>
			{(props) => {
				const {
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
				} = props;

				return (
					<Container className={classes.pap}>
						<div className={classes.paper}>
							<CssBaseline />
							<form onSubmit={handleSubmit} className={classes.form}>
								<Avatar className={classes.avatar}></Avatar>
								<Typography component='h1' variant='h5'>
									Sign In
								</Typography>

								<label htmlFor='email'>Email</label>
								<input
									name='email'
									type='text'
									placeholder='Enter your email'
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.email && touched.email && 'error'}
								/>
								{errors.email && touched.email && (
									<div className='input-feedback'>{errors.email}</div>
								)}
								<label htmlFor='email'>Password</label>
								<input
									name='password'
									type='password'
									placeholder='Enter your password'
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.password && touched.password && 'error'}
								/>
								{errors.password && touched.password && (
									<div className='input-feedback'>{errors.password}</div>
								)}
								<FormControlLabel
									control={
										<Checkbox
											className='terms'
											value='allowExtraEmails'
											required
											color='primary'
										/>
									}
									label='I Agree to Terms and Conditions.'
									control={
										<Checkbox
											className='terms'
											value='allowExtraEmails'
											color='primary'
										/>
									}
									label='Remember Me'
									className={classes.agree}
								/>
								<button
									type='submit'
									className={classes.submit}
									variant='contained'
									disabled={isSubmitting}
								>
									Sign In
								</button>
								<div className='social'>
									<div className='socialSpan'>OR Sign In With</div>
									<div className='socials'>
										<a href='' className='socialf'>
											<i className='fa fa-facebook-f' aria-hidden='true'></i>
											acebook
										</a>
										OR
										<a href='' className='socialg'>
											<i className='fa fa-google' aria-hidden='true'></i>
											oogle
										</a>
									</div>
								</div>
								<Link href='#' variant='body2'>
									<i className='signInAcc'>Don't have an account? Sign Up</i>
								</Link>
							</form>
						</div>
					</Container>
				);
			}}
		</Formik>
	);
}
