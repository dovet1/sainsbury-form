import React from 'react';

class UserForm extends React.Component {
  state = { firstName: '', lastName: '', hobby: ''};

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      hobby: this.state.hobby
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit= {this.onFormSubmit} className="ui form">
          <div>
            <input
              placeholder="First name"
              type="text"
              value={this.state.firstName}
              onChange={ e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder="Last name"
              type="text"
              value={this.state.lastName}
              onChange={ e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div>
            <select
              name="hobby"
              value={this.state.hobby}
              onChange={ e => this.setState({ hobby: e.target.value })}
            >
                <option value="tennis">Tennis</option>
                <option value="swimming">Swimming</option>
                <option value="gym">Gym</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


export default UserForm;
