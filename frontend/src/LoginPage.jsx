import axios from 'axios';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import routes from './routes.js';
import image from './images/chatlogo.jpg';
import { useDispatch } from 'react-redux'
import {auth, userAuth } from './slices/authSlice.js'
import HeaderContainer from './HeaderContainer.jsx';
import { useSelector } from 'react-redux';

const sendAuthRequest = async (dispatch, loginData) => {
  const res = await axios.post(routes.signIn(), loginData);
  const { token, username } = res.data;
  dispatch(auth({ username, token })); 
};

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [err, setErr] = useState('')
  const user = useSelector(userAuth);


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await sendAuthRequest(dispatch, values); 
        navigate('/'); 
      } catch (error) {
        formik.setSubmitting(false); 
        if (error.isAxiosError && error.response.status === 401) { 
          setErr(error);
        } else {
          throw error;
        }
      }
  }});

  



  return (
    <HeaderContainer >
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
            <h1 className="text-center mb-4">Войти</h1>
            <fieldset disabled={formik.isSubmitting}>
              <Form.Group className="form-floating mb-3">
                <Form.Control
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="Ваш ник"
                  name="username"
                  id="username"
                  autoComplete="username"
                  isInvalid={err !== ''}
                  required
                  
                />
                <Form.Label htmlFor="username">Ваш ник</Form.Label>
              </Form.Group>
              <Form.Group className="form-floating mb-4">
                <Form.Control
                  className="form-control"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Пароль"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  isInvalid={err !== ''}
                  required
                />
                <Form.Label htmlFor="password">Пароль</Form.Label>
                <Form.Control.Feedback type="invalid">the username or password is incorrect</Form.Control.Feedback>
              </Form.Group>
              <Button
              className="w-100 mb-3 btn btn-outline-primary"
              variant="outline-primary"
              type="submit"
              disabled={formik.isSubmitting}
            >Войти</Button>
            </fieldset>
          </Form>
          
          </div>
          <div className="card-footer p-4">
            <div className="text-center">
              <span>Нет аккаунта? </span>
              <a href="/signup">Регистрация</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
;

export default LoginPage;


