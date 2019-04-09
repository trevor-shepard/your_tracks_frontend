import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    return this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.action(this.state)
    .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.form_name}</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SessionForm;