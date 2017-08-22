import React from 'react';
const {PropTypes} = React;
import iconPaths from './fonticons.js';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);
  if (icon) {
    return icon.icon.paths.join(' ');
  } else {   
    return '';
  }
}

const Icon = props => (
  <svg width={props.width+10} height={props.height} viewBox="0 0 1024 1024">
    <path d={getPath(props.icon)} fill={props.color}></path>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height:  PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Icon;