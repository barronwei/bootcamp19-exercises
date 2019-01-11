import React, { Component, Fragment } from "react";
import Welcome from "../../components/Welcome";
import Form from "../../containers/Form/";

class Home extends Component {
  render() {
    // replace this with a new container to contain your form!
    return (
      <Fragment>
        <Welcome />
        <Form />
      </Fragment>
    )
  }
}

export default Home;
