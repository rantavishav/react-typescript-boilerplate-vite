import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { guestRoutes, userRoutes } from './routes';
import { CircularLoader } from './components/statelessComponent';

import './styles/global.css';

export default function App() {
  const isLoggedIn = false; // get from local storage or redux store
  const routes = isLoggedIn ? userRoutes : guestRoutes;

  const mainContent = routes.map((route) => {
    return route.component ? (
      <Route path={route.path} element={<route.component />} key={route.name} />
    ) : (
      route.redirectRoute && (
        <Route path='*' key={route.name} element={<Navigate to={route.path} />} />
      )
    );
  });

  return (
    <>
      <Suspense fallback={<CircularLoader />}>
        <div className='App'>
          <Routes>{mainContent}</Routes>
        </div>
      </Suspense>
    </>
  );
}
