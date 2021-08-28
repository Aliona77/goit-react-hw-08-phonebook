import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
//import{ Spinner }from '../../components/Spinner/Spinner.jsx';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };
  return (
    <div>
      <h1>Log in</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
