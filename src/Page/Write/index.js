import React, { Component } from 'react';
import ReactQuill from 'react-quill';
class Index extends Component {
    constructor(props) {
      super(props)
      this.state = { text: '' } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
        console.log(value)
      this.setState({ text: value })
    }
  
    render() {
      return (
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
      )
    }
}
export default Index;
