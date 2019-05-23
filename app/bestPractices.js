if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

function getValue (flag) {
  return flag ? 'a' : 'b'
}
define(function() {
  return {
    globals : function() {
      myObject = false

      return myObject;
    },

    functions : function(flag) {

      //ans1
      // return getValue(flag);
      // ans2
      return flag ? 'a' : 'b'
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      return val1 === val2
    }
  };
});
