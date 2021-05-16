const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-isssssss-functional-programming-7f218c68b3a0'
    },
 each: function(collection, callback) {
      for(const item in collection){
        callback(collection[item], item, collection)
      }
      return collection
    },
    map: function(collection, callback) {
      const mappedArr = []
      for(const item in collection){
        mappedArr.push(callback(collection[item], item, collection))
      }
      return mappedArr
    },
    reduce: function(collection, callback, acc) {
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      }
      if(!acc){
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i=0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },
    find: function(collection, predicate) {
      return collection.find(predicate)
    },
    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },
    size: function(collection, predicate) {
      if(collection instanceof Array){
        return collection.length
      }
      else{
        return Object.values(collection).length
      }
    },
    first: function(array, n){
      return !n ? array[0] : array.slice(0, n)
    },
    last: function(array, n){
      return !n ? array[array.length - 1] : array.slice(array.length - n)
    },
    compact: function(array){
      let compactArr = []
      for (let i=0; i < array.length; i++){
        array[i] && compactArr.push(array[i])
      }
      return compactArr
    },
    sortBy: function(array, callback){
      return [...array].sort((a,b) =>  callback(a) - callback(b))
    },
   flatten: function(array, shallow, newArr = []) {
      if (shallow) {
        return newArr.concat.apply([], array)
      } else {
        for (const element of array) {
          if (Array.isArray(element)) {
            fi.flatten(element, false, newArr)
          }
          else {
            newArr.push(element)
          }
        }
        return newArr
      }
    },
    uniq: function(array, isSorted, callback){
      if(isSorted){
        let newArr = []
        for(let i=0; i < testArr.length; i++){
          if(i === 0 || testArr[i] !== testArr[i-1]){
            newArr.push(testArr[i])
          }
        }
        return newArr
      }
      else if (callback){
        let callbackArray = array.map(callback)
        return array.filter((value, index) => {
          return callbackArray.indexOf(callback(value)) === index
        })
      }
      else {
        return array.filter((value, index) => {
          return array.indexOf(value) === index
        })
      }
    },
    keys: function(object) {
      return Object.keys(object)
    },
    values: function(object) {
      return Object.values(object)
    },
    functions: function(object) {
      return Object.keys(object).map((key) => {
        if(typeof object[key] === 'function'){
          return key
        }
        else{
          return false
        }
      }).filter((value) => value)
    },
  }
})()
fi.libraryMethod()
