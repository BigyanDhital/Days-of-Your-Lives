import React from 'react';
import {Text} from 'react-native';

const WhiteText = props => {
  return (
    <Text style={[{color: '#ffffff', textAlign: 'center'}, props.style]}>
      {props.children}
    </Text>
  );
};

export default WhiteText;
