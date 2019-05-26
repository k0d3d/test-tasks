if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr)
    },

    speak : function(fn, obj) {
      return fn.call(obj)
    },

    functionFunction : (greeting) => (name) => {
      return `${greeting}, ${name}`
    },

    makeClosures : function(arr, fn) {
      return arr.map(m => () => fn(m))
    },

    partial : function(fn, greeting, name) {
      return (punct) => {
        return fn(greeting, name, punct)
      }

    },

    useArguments : function(...args) {
      return args.reduce( (p, c) => p + c)
    },

    callIt : function(fn, ...thisArgs) {
      return fn.apply(null, thisArgs)
    },

    partialUsingArguments : function(fn, ...ttop) {
      
      return (...thisArgs) => {
        return fn.apply(null, ttop.concat(thisArgs))
      }
    },

    curryIt : function curryIt (func) {
      var curry =  (fn, ...args) => {
        args.push(fn)
        let y = (func.length === args.length) ? 
          func(...args) :
          (n) => {
            return curry(n, ...args)
          }
        return y
      }
      return curry
    }
  };
});
