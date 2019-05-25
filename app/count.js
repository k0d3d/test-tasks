if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let timer 

      timer = setInterval(() => {
        console.log(start)
        if ( start === end ) {
          clearInterval(timer)
        }
        start++
      }, 100)


      return {
        cancel: () => {
          return clearInterval(timer)
        }
      }
    }
  };
});