import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

const Touchable = ({children, onPress, style}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Touchable;