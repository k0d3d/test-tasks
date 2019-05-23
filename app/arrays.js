if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.findIndex(i => item === i)
    },

    sum : function(arr) {
      return arr.reduce((p, c) => p + c)
    },

    remove : function(arr, item) {
      return arr.filter(i => i !== item)
    },

    removeWithoutCopy : function(arr, item) {

      arr.sort()
      while(arr.indexOf(item) > -1) {
        arr.splice(arr.indexOf(item), 1)
      }
      return arr
    },

    append : function(arr, item) {
      arr.push(item)
      return arr
    },

    truncate : function(arr) {
      arr.splice(arr.length -1, 1)
      return arr
    },

    prepend : function(arr, item) {
      arr.unshift(item)
      return arr
    },

    curtail : function(arr) {
      arr.splice(0, 1)
      return arr
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item)
      return arr
    },

    count : function(arr, item) {
      // sort
      // get 1st index
      //  get last index
      arr.sort()
      return 1 + arr.lastIndexOf(item) - arr.indexOf(item)
    },

    duplicates : function(arr) {
      // let try moving in pairs.. maybe that will work
      let dups = new Set(),
          r = []
      arr.sort()
      arr.reduce((pv, cv) => {
        if (pv === cv) {
          dups.add(pv)
        }
        return cv
      })
      for (let m of dups.values()) {
        r.push(m)
      }
      return r
    },

    square : function(arr) {
      return arr.map(e => e * e)
    },

    findAllOccurrences : function(arr, target) {
      let indexBank = [], lastIndex = 0
      for (; lastIndex < arr.length - 1 ; lastIndex++) {
        let currentIndex = arr.indexOf(target, lastIndex)
        console.log(currentIndex)
        if (currentIndex > -1) {
          indexBank.push(currentIndex)
          lastIndex = currentIndex
        }
      }
      return indexBank
    }
  };
});
