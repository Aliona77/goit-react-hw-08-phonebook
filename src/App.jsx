
import { useEffect, Suspense} from 'react';
import {  useDispatch} from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactView/ContactView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { authOperations } from './redux/auth';



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
              <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
                </PublicRoute>
                
              <PublicRoute exact path="/register" restricted >
                <RegisterView />
                </PublicRoute>
                
              <PublicRoute exact path="/login"  redirectTo="/contacts" restricted   >
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


