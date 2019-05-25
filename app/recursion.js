if (typeof define !== 'function') { var define = require('amdefine')(module); }



define(function() {
  return {
    listFiles: function listFiles (dir, filelist) {

        if (typeof filelist === 'string') {
          dir = dir.files.find(d => {
            if (d && d.dir) {
              return d.dir === filelist
            } 
            return false
          })
          filelist = []
        } else {
          filelist = filelist || [];
        }

        var files = dir.files;

        files.forEach(function(file) {
          if (typeof file === "object") {
            filelist = listFiles(file, filelist);
          }
          else {
            filelist.push(file);
          }
        });
        return filelist;
    },

    permute: function(inputArr) {
      let result = [];

      const permute = (arr, m = []) => {
        if (arr.length === 0) {
          result.push(m)
        } else {
          for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next))
         }
       }
     }
    
     permute(inputArr)
    
     return result;
    }
  };
});
