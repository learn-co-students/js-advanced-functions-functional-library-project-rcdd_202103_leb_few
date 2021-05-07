const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const element in collection){
        if(typeof collection === "object"){
          callback(collection[element]);
        }
        else{
          callback(element);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let result = [];
      for(const element in collection){
        if(typeof collection === "object"){
          result.push(callback(collection[element]));
        }
        else{
          result.push(callback(element));
        }
      }
      return result;
    },

    reduce: function(collection, callback, acc=0) {
      let result = acc;
      for(const element in collection){
        if(typeof collection === "object"){
          result = callback(result, collection[element], collection);
        }
        else{
          result = callback(result, element, collection);
        }
      }
      return result;
    },

    find: function(collection, predicate) {
      for(const element in collection){
        if(typeof collection === "object"){
          if(predicate(collection[element])){
            return collection[element];
          }
        }
        else{
          if(predicate(element)){
            return element;
          }
        }
      }
      return undefined;
    },

    filter: function(collection, predicate){
      let result = [];
      for(const element in collection){
        if(typeof collection === "object"){
          if(predicate(collection[element])){
            result.push(collection[element]);
          }
        }
        else{
          if(predicate(element)){
            result.push(element);
          }
        }
      }
      return result;
    },

    size: function(collection){
      if(typeof collection === "object"){
        return Object.keys(collection).length;
      }
      else{
        return collection.length;
      }
    },

    first: function(array, n=1){
      let result = [];
      if(n === 1){
        return array[0];
      }
      for(let i=0; i<n; i++){
        result.push(array[i]);
      }
      return result;
    },

    last: function(array, n=1){
      let result = [];
      if(n === 1){
        return array[array.length-1];
      }
      for(let i=array.length-n; i<array.length; i++){
        result.push(array[i]);
      }
      return result;
    },

    compact: function(array){
      let result = [];
      for(let i =0; i<array.length; i++){
        if(array[i]){
          result.push(array[i]);
        }
      }
      return result;
    },

    sortBy: function(array, callback){
      let result = [...array];
      return result.sort(function(a, b){
        if (callback(a) < callback(b)) {
          return -1;
        }
        if (callback(a) > callback(b)) {
          return 1;
        }
        return 0;
        });
    },

    flatten: function(array, shallow = false){
      function flatDeep(arr, d = 1) {
        return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
      }
      if(shallow){
        return flatDeep(array);
      }
      return flatDeep(array, Infinity);
    },

    uniq: function(array, isSorted=false, callback){
      let result = [];
      let arr = [];

      if(callback !== undefined){
        arr = array.map(callback);
      } else{
        arr = [...array];
      }

      if(! isSorted){
        arr.forEach(function(element, index){
          if(result.find(function(ele){
            if(callback){
              return callback(ele) === element;
            }
            return ele === element;
          }) === undefined){
            result.push(array[index]);
          }
        });
      }

      if(isSorted){
        let previous = arr[0];
        let current;
        for(let i=0; i<arr.length; i++){
          current = arr[i];
          if(current != previous){
            result.push(array[i]);
          }
          previous = current;
        }
      }

      return result;
    },

    keys: function(object){
      return Object.keys(object);
    },

    values: function(object){
      return Object.values(object);
    },

    functions: function(object){
      let keys = Object.keys(object);
      let result = [];
      for(let i=0; i<keys.length; i++){
        if(typeof object[keys[i]] === "function"){
          result.push(keys[i]);
        }
      }
      return result.sort(function(a, b){
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    }

  }
})()

fi.libraryMethod()
