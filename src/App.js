import React from "react";
import Form from "./components/Form";

import Header from "./components/Header";
import Resume from "./components/Resume";
import Global from './styles/global';

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <Global />
    </>
  );
};

export default App;
