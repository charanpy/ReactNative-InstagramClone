import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
// import PropTypes from "prop-types"
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectColor } from '../../../redux-sagas/theme/theme.selector';

const TextComponent = (props) => {
  const {
    colorText, color, style, children
  } = props;
  // console.log(color);
  const [textColor, setTextColor] = useState('black');
  useEffect(() => {
    if (textColor === colorText) return;
    setTextColor(colorText);
  }, [textColor, colorText]);

  return (
    <Text style={{ color: color || textColor, ...style }}>{children}</Text>
  );
};

const mapStateToProps = createStructuredSelector({
  colorText: selectColor,
});

export default connect(mapStateToProps)(TextComponent);
