import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
//import ContactView from './views/TodosView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import Container from './components/Container/Container';
import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path="/todos" component={TodosView} /> */}
      </Switch>
    </Container>
  );
}


