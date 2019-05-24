if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise (( resolve, reject ) => {
        resolve(value)
      })
    },

    manipulateRemoteData : function(url) {
      return new Promise ((resolve, reject) => {
        $.ajax({
          url,
          method: "GET",
          dataType: "json"          
        })
        .done(({people}) => {
          let ppl = people.map(r => r.name)
          ppl.sort()
          resolve(ppl)
        })
        .fail(resp => reject(resp))
      })

    }
  };
});
