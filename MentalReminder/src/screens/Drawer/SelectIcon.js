import DropDownPicker from 'react-native-dropdown-picker';
import React, { Component } from 'react';
import {iconOptions} from "./Data"

// import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SingleSelect extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// this.state = {
//     country: 'uk'
// }

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
<DropDownPicker
    items={[
        {value: 'meeting', label: 'Meeting', icon: () => <Icon name="phone" size={18} color="#000" />, hidden: false},
        {value: 'bag', label: 'Working', icon: () => <Icon name="file" size={18} color="#000" />},
        {value: 'relax', label: 'Traveling', icon: () => <Icon name="airplane" size={18} color="#000" />},
        {value: 'cook', label: 'Cooking', icon: () => <Icon name="bowl" size={18} color="#000" />},
      ]}
    
    defaultValue={''}
    containerStyle={{height: 40, width: 200}}
    style={{backgroundColor: '#fafafa', width: 200}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        icon: item.value
    })}
/>
);
}
}
