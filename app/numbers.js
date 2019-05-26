if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      let n = num.toString(2)
      return bit > n.length 
      ? 0 
      : parseInt(n.toString(2)[n.length - bit])
    },

    base10: function(str) {
      return parseInt(str, 2)
    },

    convertToBinary: function(num) {
      return num.toString(2).padStart(8, '0')
      // get 
    },

    multiply: function(a, b) {
      var commonMultiplier = 1000000;

      a *= commonMultiplier;
      b *= commonMultiplier;
  
      return (a * b) / (commonMultiplier * commonMultiplier);
    }
  };
});

