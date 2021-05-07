const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
        }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection);
        }
      }
      return collection;
    },

    map: function (collection, callback) {
      let newCol = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCol.push(callback(collection[i], i, collection));
        }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          newCol.push(callback(value, key, collection));
        }
      }
      return newCol;
    },


    reduce: function (collection, callback, acc) {
      for (let i = 0; i < collection.length; i++) {

        if (acc === undefined) {
          acc = collection[0]
          i++
        }
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },


    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function (collection, predicate) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },


    size: function (collection) {
      return Object.keys(collection).length
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length-1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function (array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    sortBy: function (array, callback) {
      let sortedArray = [...array];
      sortedArray.sort(function (a, b) { return callback(a) - callback(b) });
      return sortedArray;
    },

    flatten: function (array, shallow = false) {
      let newCol = [];
       //[1, [2], [3, [[4]]]]
      for (let initIndex of array) {
        if (Array.isArray(initIndex)) {
          if (shallow === true) {
            for (let nextIndex of initIndex) {
              newCol.push(nextIndex);
            }
          } else {
            let result = this.flatten(initIndex)
            for (let nextIndex of result) {
              newCol.push(nextIndex);
            }
          }
        } else {
          newCol.push(initIndex);
        }
      }
      return newCol;
    },

    uniq: function (array, isSorted = false, callback = (x) => x) {
      //[1, 2, 3, 6], false, (x => x % 3)
      let newCol = [];
      for (let i of array) {
        let counter = 0;
        for (let n of newCol) {
          if (callback(n) === callback(i)) {
            counter++;
          }
        }
        if (counter < 1) {
          newCol.push(i)
        }
      }
      return newCol;
    },

    keys: function (object) {
      return Object.keys(object);
    },

    values: function (object) {
      return Object.values(object);
    },

    functions: function (fi) {
      let allFunc = [];
      for (let i in fi) {
        if (typeof fi[i] === "function") {
          allFunc.push(i);
        }
      }
      return allFunc;
    }

  }
})()
fi.libraryMethod()
