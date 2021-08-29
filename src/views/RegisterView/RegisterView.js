import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div style={styles.box}>
      <h1>Sign in </h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
