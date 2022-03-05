import React from 'react';


class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  submit(e) {
    e.preventDefault(); 
    this.props.onCreate(this.state.text)

    this.setState({text: ""})
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)} className="input-group mb-3">
        <input 
          required
          value={this.state.text}
          onChange={(e) => this.handleChange(e)}
          type="text" 
          className="form-control" 
          placeholder="Enter todo here" 
        />
        <button className="btn btn-primary" type="submit" id="button-addon2">Submit</button>
      </form>
    )
  }
}

export default CreateTodo;