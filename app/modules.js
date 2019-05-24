if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    createModule : function(greeting, name) {

      return {
        name,
        greeting,
        sayIt : function sayIt () {
          return `${this.greeting}, ${this.name}`
        }
      }
    }
  };
});

