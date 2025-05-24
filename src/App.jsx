import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginPage} from './pages/login-page';
import {HomePage} from './pages/home-page';
import {SignUpPage} from './pages/signup-page';
import {AuthLayout} from './layouts/auth-layout';
import {AppLayout} from './layouts/app-layout';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path='/home/:id' element={<HomePage />} />
        </Route>
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
