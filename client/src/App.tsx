import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Register, Scan, Statistics, Turns } from './pages';
import { ProtectedRoute, PublicRoute } from './components';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/' element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Navigate replace to='/dashboard/turns' />} />
        <Route path='/dashboard/turns' element={<Turns />} />
        <Route path='/dashboard/statistics' element={<Statistics />} />
      </Route>
      <Route path='/dashboard/scan' element={<Scan />} />
      <Route path='scan/:uid/:id' element={<h1>hola</h1>} />
      <Route path='/*' element={<Navigate replace to='/404' />} />
      <Route path='/404' element={<h1>404</h1>} />
    </Routes>
  );
}
