'use strict';

module.exports = function() {
  let prefixCls = this.state.prefixCls;
  let args = Array.prototype.slice.call(arguments, 0);
  return args.map(s => {
    return prefixCls + '-' + s;
  }).join(' ');
};
