import { useEffect, Suspense, lazy} from 'react';
import {  useDispatch} from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { authOperations } from './redux/auth';
import { Spinner } from './components/Spinner/Spinner';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactView/ContactView' /* webpackChunkName: "ContactsView" */),
);


export default function App() {
  const dispatch = useDispatch();

 useEffect(() => {
    console.log('useEffect');
    dispatch(authOperations.getCurrentUser());
  }, [dispatch])

  return (
    <>
          <AppBar />
          
            <Switch>
              <Suspense fallback={<Spinner/>}>
              <PublicRoute exact path="/">
                <HomeView />
                </PublicRoute>
                
              <PublicRoute  exact path="/register" restricted>
                <RegisterView />
                </PublicRoute>
                
              <PublicRoute  exact path="/login" redirectTo="/contacts" restricted >
                <LoginView />
                </PublicRoute>
                
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
          </PrivateRoute>
          
                </Suspense>
                </Switch>
          </>
          )
}


