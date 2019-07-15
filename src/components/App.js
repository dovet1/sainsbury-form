import React from 'react';
import UserForm from './UserForm'

class App extends React.Component {
  state = { inputs: ' '};

  onUserFormSubmit = inputs => {
    this.setState({ inputs: inputs })
  }

  render() {
    console.log(this.state.inputs)
    return (
      <div style={{marginTop: '10px'}}>
        <UserForm onSubmit={this.onUserFormSubmit} />
        <textarea value={this.state.inputs.firstName}></textarea>
      </div>
    );
  }
}

export default App;
