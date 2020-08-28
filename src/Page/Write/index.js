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
        <div style={{ width: '100%', minHeight: '100vh'}}>
          <ReactQuill value={this.state.text} onChange={this.handleChange} />
        </div>
      )
    }
}
export default Index;
