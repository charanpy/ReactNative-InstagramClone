import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColor } from '../redux-sagas/theme/theme.selector';

const Icon = ({
  Component, name, size, color, style
}) => {
  return <Component name={name} size={size} color={color} style={style} />;
};

const mapStateToProps = createStructuredSelector({
  color: selectColor,
});

export default connect(mapStateToProps)(Icon);
