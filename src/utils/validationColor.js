
module.exports = function validationColor(props, propName, componentName) {
  if (props[propName] && !(/^#[0-9a-fA-F]{3,6}$/).test(props[propName])) {
    return new Error(`${componentName}.props.${propName} Validation failed!`);
  }
};
