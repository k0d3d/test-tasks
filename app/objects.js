if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj)
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting
      return constructor
    },

    iterate : function(obj) {
      let m = []
      for (let t in obj) {
        if (obj.hasOwnProperty(t)) {
          m.push(`${t}: ${obj[t]}`)
        }
      }
      return m
    }
  };
});
