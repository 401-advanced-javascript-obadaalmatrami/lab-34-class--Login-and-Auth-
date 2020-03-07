import React from 'react';

import LoginContext from '../src/components/auth/context.js';
import Login from '../src/components/auth/login.js';
import Auth from '../src/components/auth/auth.js';
import ToDo from './components/todo/todo-connected.js';

const Edit = props => {
  return (
    <Auth capability="update">
      <span>You can edit!</span>
    </Auth>
  )
}

const Delete = props => {
  return (
    <Auth capability="delete">
      <span>You can delete!</span>
    </Auth>
  );
};

class App extends React.Component {
  render() {
    return (
      <>
        <LoginContext>
        <Login />
        <Edit />
        <Delete />
      </LoginContext>
        <ToDo />
    </>
    );
  }
}
export default App;
