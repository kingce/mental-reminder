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



// import React, { Component, Fragment } from 'react';

// import Select from 'react-select';
// import { iconOptions } from './Data';
// //import { Note } from './docs/styled-components';

// const Checkbox = props => <input type="checkbox" {...props} />;

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

// // type St = {
// //   isClearable: boolean,
// //   isDisabled: boolean,
// //   isLoading: boolean,
// //   isRtl: boolean,
// //   isSearchable: boolean,
// // };

// export default class SingleSelect extends Component{
//   state = {
//     isClearable: true,
//     isDisabled: false,
//     isLoading: false,
//     isRtl: false,
//     isSearchable: true,
//   };

//   toggleClearable = () =>
//     this.setState(state => ({ isClearable: !state.isClearable }));
//   toggleDisabled = () =>
//     this.setState(state => ({ isDisabled: !state.isDisabled }));
//   toggleLoading = () =>
//     this.setState(state => ({ isLoading: !state.isLoading }));
//   toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
//   toggleSearchable = () =>
//     this.setState(state => ({ isSearchable: !state.isSearchable }));
//   render() {
//     const {
//       isClearable,
//       isSearchable,
//       isDisabled,
//       isLoading,
//       isRtl,
//     } = this.state;
//     return (
//       <Fragment>
//         <Select
//           styles={{
//             width: "100px",
//             height: "25px" 
//           }}
//           className="basic-single"
//           classNamePrefix="select"
//           defaultValue={''}
//           // isDisabled={isDisabled}
//           // isLoading={isLoading}
//           // isClearable={isClearable}
//           // isRtl={isRtl}
//           // isSearchable={isSearchable}
//           name="icon"
//           options={iconOptions}
//           // labelIcon={true}
//           // defaultIcon="block"
//         />
//         {/* <Note Tag="label">
//           <Checkbox
//             checked={isClearable}
//             onChange={this.toggleClearable}
//             id="cypress-single__clearable-checkbox"
//           />
//           Clearable
//         </Note>
//         <Note Tag="label" style={{ marginLeft: '1em' }}>
//           <Checkbox
//             checked={isSearchable}
//             onChange={this.toggleSearchable}
//             id="cypress-single__searchable-checkbox"
//           />
//           Searchable
//         </Note>
//         <Note Tag="label" style={{ marginLeft: '1em' }}>
//           <Checkbox
//             checked={isDisabled}
//             onChange={this.toggleDisabled}
//             id="cypress-single__disabled-checkbox"
//           />
//           Disabled
//         </Note>
//         <Note Tag="label" style={{ marginLeft: '1em' }}>
//           <Checkbox
//             checked={isLoading}
//             onChange={this.toggleLoading}
//             id="cypress-single__loading-checkbox"
//           />
//           Loading
//         </Note>
//         <Note Tag="label" style={{ marginLeft: '1em' }}>
//           <Checkbox
//             type="checkbox"
//             checked={isRtl}
//             onChange={this.toggleRtl}
//             id="cypress-single__rtl-checkbox"
//           />
//           RTL
//         </Note> */}
//       </Fragment>
//     );
//   }
// }
