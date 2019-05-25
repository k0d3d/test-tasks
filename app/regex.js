if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      let hasNum = /[0-9]+/
      return hasNum.test(str)
    },

    containsRepeatingLetter : function(str) {
      let hasRepeats = /([a-zA-Z]).*?\1/g
      return hasRepeats.test(str)
    },

    endsWithVowel : function(str) {
      let hasVowelEnd = /[aeiou]$/mi
      return hasVowelEnd.test(str)
    },

    captureThreeNumbers : function(str) {
      let numbers = /\d{3}/g

      return str.match(numbers) ? str.match(numbers)[0]: false
    },

    matchesPattern : function(str) {
      let telX = /^\d{3}-\d{3}-\d{4}$/g
      return telX.test(str)
    },
    isUSD : function(str) {
      let isUsd = /^\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/g
      return isUsd.test(str)
    }
  };
});
