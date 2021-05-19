const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      let Col = (collection instanceof Array) ? collection : Object.values(collection);

     Col.forEach(item => {
       callback(item);
     });

     return collection
    },

    map: function(collection,callback) {
      let Col = (collection instanceof Array) ? collection : Object.values(collection);
      return Col.map(elt => callback(elt));
    },

    reduce: function(collection,callback,acc) {
			return !acc ? collection.reduce((total,current,arr) => callback(total,current,arr)) : collection.reduce((total,current,arr) => callback(total,current,arr),acc);
    },

    find: function(collection,predicate) {
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i];
    },

    filter: function(collection, predicate) {
      let arr = [];
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) arr.push(collection[i])

      return arr
    },
    size: function(collection) {
          return (collection instanceof Array) ? collection.length : Object.keys(collection).length
        },

    first: function(collection, stop=false) {
         return (stop) ? collection.slice(0, stop) : collection[0]
       },

    last: function(collection, start=false) {
         return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
       },

    compact: function(collection) {
          return collection.filter(el => el);
        },

    sortBy: function(collection, callback) {
          const arr = [...collection];
          return arr.sort(function(a, b) {
            return callback(a) - callback(b);
          });
        },

    unpack: function(receiver, arr) {
          for (let val of arr)
            receiver.push(val)
        },

    flatten: function(collection, shallow,arr=[]) {
       if (!Array.isArray(collection)) return arr.push(collection)
          if (shallow) {
            for (let val of collection)
              Array.isArray(val) ? this.unpack(arr, val) : arr.push(val)
          } else {
            for (let val of collection) {
              this.flatten(val, false, arr)
            }
          }
          return arr
        },

    uniqSorted: function(collection, iteratee) {
          const sorted = [collection[0]]
          for (let idx = 1; idx < collection.length; idx++) {
            if (sorted[idx-1] !== collection[idx])
              sorted.push(collection[idx])
          }
          return sorted
        },

    uniq: function(collection, sorted=false, iteratee=false) {
          if (sorted) {
            return fi.uniqSorted(collection, iteratee)
          } else if (!iteratee) {
            return Array.from(new Set(collection))
          } else {
            const modifiedVals = new Set()
            const uniqVals = new Set()
            for (let val of collection) {
              const moddedVal = iteratee(val)
              if (!modifiedVals.has(moddedVal)) {
                modifiedVals.add(moddedVal)
                uniqVals.add(val)
              }
            }
            return Array.from(uniqVals)
          }
        },

      keys: function(obj) {
          // Using for loop
          const keys = []
          for (let key in obj){
            keys.push(key)
          }
          return keys
        },

      values: function(obj) {
          // Using for loop
          const values = []
          for (let key in obj){
            values.push(obj[key])
          }
          return values

          // Using the custom 'map' method from above
          // return this.map(obj, (value) => value)

        },

      functions: function(obj) {
          const functionNames = []

          for (let key in obj) {
            if (typeof obj[key] === "function"){
              functionNames.push(key)
            }
          }

          return functionNames.sort()
        }
  }
})()

fi.libraryMethod()
