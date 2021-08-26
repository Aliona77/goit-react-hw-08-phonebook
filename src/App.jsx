import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ContactView from './views/ContactView/ContactView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
//import Container from './components/Container/Container';
import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
  <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
         { <Route path="/contacts" component={ContactView} />}
      </Switch>
    </>
  );
}
// import { useEffect, Suspense} from 'react';
// import { useSelector, useDispatch} from 'react-redux';
// import { Switch } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
// import ContactsView from './views/ContactView/ContactView';
// import HomeView from './views/HomeView/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import PublicRoute from './components/PublicRoute/PublicRoute';
// import {  authSelectors, authOperations } from './redux/auth';



// export default function App() {
//   const dispatch = useDispatch();
//  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <div>

//       {isFetchingCurrent ? (
//         <h2>Loading</h2>
//           ) : (
//         <>
//           <AppBar />
//             <Switch>
//               <Suspense fallback={<p>Загружаем...</p>}>

//               <PublicRoute exact path="/">
//                 <HomeView />
//                 </PublicRoute>
                
//               <PublicRoute exact path="/register" restricted>
//                 <RegisterView />
//                 </PublicRoute>
                
//               <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
//                 <LoginView />
//                 </PublicRoute>
                
//               <PrivateRoute path="/contacts" redirectTo="/login">
//                 <ContactsView />
//                 </PrivateRoute>
                
//                 </Suspense>
//           </Switch>
//           </>
//           )}
//     </div>
//   );
// }


