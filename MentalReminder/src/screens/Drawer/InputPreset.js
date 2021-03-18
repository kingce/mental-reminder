import React from 'react';
import { StyleSheet, View ,TextInput, Form, Label } from 'react-native';

class InputPreset extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        // <Form onSubmit={this.handleSubmit}>
        //   <Label>
            // Name:
            <TextInput style={{width: 200, height: 25}}
              editable
              name="PresetName" 
              placeholder="Preset Name"  
              value={this.state.value} 
              onChange={this.handleChange} 
            />
        //   </Label>
        // </Form>
      );
    }
  }
  export default InputPreset;