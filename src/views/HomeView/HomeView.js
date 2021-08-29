import React from "react";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 60,
    textAlign: "center",
    color: "lime",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome
      <AddToHomeScreenIcon style={{ fontSize: 55 }} />
    </h1>
  </div>
);

export default HomeView;
