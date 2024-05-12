import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { routenames } from './routenames';
import { Login, MainPage, SignUp } from '../pages';

export const Router: FC = () => (
  <Routes>
    <Route index element={<MainPage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);
