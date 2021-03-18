//import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import SelectIcon from "./SelectIcon";
import InputPreset from "./InputPreset";
import Select from 'react-select';
import { iconOptions } from './Data';
import Dropdown from 'react-dropdown';


//import React, { Component } from 'react'


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const MyComponent = () => (
//   <Select options={options} value={value} onChange={((value) => setV(value))}/>
// )
// class PresetScreen extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {value: ''};

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleChange(event) {
//   this.setState({value: event.target.value});
// }

// handleSubmit(event) {
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

const PresetScreen = (props) => {
  //render () {
    return (
      // <View style={styles.container}>
      <View style={styles.headerText}>
          <Text style={styles.title}>Add New Preset</Text>
          {/* <Text style={styles.p}> Icon: </Text> */}
          {/* <Text style={styles.cen}> <FontAwesomeIcon icon={ faSuitcase } size={50}/> </Text> */}
          <Text style={styles.p}> Name: </Text>
              <InputPreset/>
          <Text style={styles.p}> Icon </Text>
          {/* <Select styles={{
            width: "100px",
            height: "25px" 
          }}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={''}
          name="icon"
          options={iconOptions}
          /> */}
    
          <SelectIcon/>
          <Text style={{paddingTop: 200}}>{"\n"} {"\n"} {"\n"} {"\n"}</Text>
          
          <Button
            title="Done"
            onPress={() => {props.navigation.navigate('Menu', {
              screen: 'MenuScreen'})}}
          />
      </View>
      
      // {' '}
//<InputPreset/> 
//<SelectIcon/>
      //   <Text>Add New Preset</Text>
      //   <Text>Icon 
      //     icon={({color, size}) => (
      //           <Icon 
      //           name="pencil-plus" 
      //           color={color}
      //           size={size}
      //           />)}
      //   </Text>
      //   <Button
      //     title="Click Here"
      //     onPress={() => alert('Button Clicked!')}
      //   />
      // </View>
    );
};
//}

export default PresetScreen;

{/* <Text style={styles.p}> <InputPreset/> </Text> */}
          {/* <Text style={styles.p}> Go do work </Text> */}
          {/* <input type="text" name="PresetName" placeholder="Preset Name" /> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });

{/* <TextInput style={{marginLeft: 17, paddingLeft: 5, height: 30, borderColor: 'gray', borderWidth: 1, width: 230 }}
              {...props}
              editable
              name="PresetName" 
              placeholder="Preset Name"  
              />  */}