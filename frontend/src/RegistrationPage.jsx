import axios from 'axios';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Form, Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import routes from './routes.js';
import image from './images/logo2.jpg';
import {auth} from './slices/authSlice.js'
import * as yup from 'yup';
import HeaderContainer from './HeaderContainer.jsx';

const sendAuthRequest = async (dispatch, loginData) => {
  const res = await axios.post(routes.signUp(), loginData);
  const { token, username } = res.data;
  dispatch(auth({ username, token })); 
};

const registrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState('');

  const schema = yup.object({
    username: yup
      .string()
      .required('Заполните поле!')
      .min(3, 'Минимум три символа!')
      .max(20, 'Минимум три символа!'),
    password: yup
      .string()
      .required('Заполните поле!')
      .min(5, 'Минимум три символа!'),
    confirmPassword: yup
      .string()
      .required('Заполните поле!')
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают!'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const sugnUpData = {
        username: values.username,
        password: values.password
      }
      try {
        await sendAuthRequest(dispatch, sugnUpData); 
        navigate('/'); 
      } catch (error) {
        formik.setSubmitting(false); 
        if (error.isAxiosError && error.response.status === 409) { 
          setErr('server error!! ТАкоей пользвотель уже есть!'); 
        } else {
          throw error;
        }
      }
    },
  });

  return (<HeaderContainer>

      <div className="row justify-content-center pt-5 h-100 align-content-center">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img
        className="rounded-circle"
        alt="Войти"
        src={image}
      />
              </div>
          <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-md-0">
            <h1 className="text-center mb-4">Зарегистрироваться</h1>
            <fieldset disabled={formik.isSubmitting}>
              <Form.Group className="form-floating mb-3">
                <Form.Control
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur = {formik.handleBlur}
                  value={formik.values.username}
                  placeholder="Ваш ник"
                  name="username"
                  id="username"
                  autoComplete="username"
                  isInvalid={err !== '' || !!formik.errors.username && formik.touched.username}
                  required
                />
                <Form.Label htmlFor="username">Ваш ник</Form.Label>
                {formik.errors.username && formik.touched.username && <div className="invalid-tooltip">{formik.errors.username}</div>}
              </Form.Group>
              <Form.Group className="form-floating mb-3">
                <Form.Control
                  className="form-control"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur = {formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Пароль"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  isInvalid={err !== '' || !!formik.errors.password && formik.touched.password}
                  required
                />
                <Form.Label htmlFor="password">Пароль</Form.Label>
                {formik.errors.password && formik.touched.password && <div className="invalid-tooltip">{formik.errors.password}</div>}
                
              </Form.Group>
              <Form.Group className="form-floating mb-4">
                    <Form.Control
                      className="form-control"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      value={formik.values.confirmPassword}
                      placeholder="Подтверждение пароля"
                      name="confirmPassword"
                      id="confirmPassword"
                      isInvalid={err !== '' || !!formik.errors.confirmPassword && formik.touched.confirmPassword}
                      autoComplete="current-password"
                      required
                    />
                    <Form.Label htmlFor="confirmPassword">Подтверждение пароля</Form.Label>
                    {formik.errors.confirmPassword
                    && formik.touched.confirmPassword
                    && <div className="invalid-tooltip">{formik.errors.confirmPassword}</div>}
                    <Form.Control.Feedback type="invalid">Пользователь с таким именесм существует</Form.Control.Feedback>
                  </Form.Group>

              <Button
              className="w-100 mb-3 btn btn-outline-primary"
              variant="outline-primary"
              type="submit"
              disabled={formik.isSubmitting}
            >Зарегистрироваться</Button>
            </fieldset>

          </Form>
          
          </div>
          </div>
        </div>
      </div>

    </HeaderContainer>
  );
};

export default registrationPage;