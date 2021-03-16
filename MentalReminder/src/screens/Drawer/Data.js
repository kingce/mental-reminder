import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  export const iconOptions = [
    {value: 'bag', label: 'Working'},
    {value: 'meeting', label: 'Meeting'},
    {value: 'cook', label: 'Cooking'},
    {value: 'relax', label: 'Relaxing'},
  ];

//   {value: 'bag', <Text> <FontAwesomeIcon icon={ faSuitcase } size={50}/> </Text>},
//     {value: 'meeting', icon={({color, size}) => (<Icon name="account-group" color={color} size={size}/>)}},
//     {value: 'cook', icon={({color, size}) => (<Icon name="bowl-mix" color={color} size={size}/>)}},
//     {value: 'relax', icon={({color, size}) => (<Icon name="google-controller" color={color} size={size}/>)}},
