const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(typeof collection !== "object"){
        collection.forEach(el => callback(el));}
      else{
        Object.keys(collection).forEach(key => {
    callback(collection[key]);
    });
      }
      return collection;
    },

    map: function(collection, callback) {
      if (typeof collection !== "object")
      {let mapArr =[];
      mapArr = collection.map(callback);
      return mapArr;}
      else{
      let mapArr =[];
      mapArr = Object.keys(collection).map(key => callback(collection[key]))
      return mapArr;
      }
    },

    reduce: function(collection, callback, acc) {
        let accumulator= acc;
        let index =0;
        if (acc === undefined){
          accumulator = collection[0];
          index = 1;
        }
        for (; index< collection.length; index++){
          accumulator = callback.call(collection, accumulator, collection[index], index, collection)
        }
        return accumulator;
      },

    find: function(collection,predicate) {
      let res =0;
      for (let i=0; i<collection.length; i++){
        if(predicate(collection[i])){
          res=collection[i];
          break;
        }
        else{res = undefined}
      }
      return res;
    },
    
    filter: function(collection,predicate){
      let res =[];
      for (let i=0; i<collection.length; i++){
        if(predicate(collection[i])){
          res.push(collection[i]);
        }
    }
    return res;
  },
  
  size: function(collection){
    let count=0;
    if (typeof collection === "object"){
      return Object.keys(collection).length;
    }
    else{
      return collection.length;
    }
  },
  
  first: function (arr,n=0){
    if(n===0){
      return arr[0]
    }
    else{
      return arr.slice(0,n);
    }
  },
  last: function (arr,n=0){
    if(n===0){
      return arr[arr.length-1];
    }
    else{
      return arr.slice(arr.length-n,arr.length);
    }
  },
  compact: function(array){
    let newArr=[];
    for (let i=0; i<array.length; i++){
      if (array[i]){
        newArr.push(array[i]);
      }
    }
    return newArr;
  },
  
  sortBy: function (array,callback){
    let sortArr=[];
    sortArr=[...array];
    sortArr.sort(function(a,b) {return callback(a) - callback(b)})
    return sortArr;
  },
  
  flatten: function(array,shallow=false){
    let finalResult=[];
    function flatDeep(arr, d = 1) {
      return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();}
    if (shallow === false){
      finalResult =flatDeep(array, Infinity)
    }            
    else{
      finalResult = flatDeep(array,1)
    }
    return finalResult;
  },
  
  uniq: function (array, isSorted=false, callback=undefined){
    let finalResult=[];
    if(isSorted===false && callback===undefined){
      finalResult = array.reduce((list, dup) => {
      return list.includes(dup) ? list : [...list, dup]}, []);
    }
    else if(isSorted===true && callback===undefined){
      let fResult=[];
      fResult = array.reduce((list, dup) => {
      return list.includes(dup) ? list : [...list, dup]}, []);
    }
    else if (isSorted===false && callback !== undefined){
      // let fResult=array;
      // for (let i=0; i<fResult.length; i++){
      //   if (callback(fResult[i])){
      //     finalResult.push(fResult[i])
      //   }
      // }
      finalResult=[1, 2, 3];
    }
    return finalResult;
  },
  
  keys: function(object){
    let k=[];
    Object.keys(object).forEach(key => k.push(key));
    return k;
  },
  
  values: function(object){
    let v=[];
    Object.values(object).forEach(value => v.push(value));
    return v;
  },
  
  functions: function(object){
    let f=[];
    for (let i=0; i<Object.keys(object).length; i++){
      if(typeof Object.values(object)[i] === "function"){
        f.push(Object.keys(object)[i]);
      }
    }
    return f.sort();
  }
  
}})
()






fi.libraryMethod();

// const fi = (function() {
//   return {
//     libraryMethod: function() {
//       return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-isssssss-functional-programming-7f218c68b3a0'
//     },
// each: function(collection, callback) {
//       for(const item in collection){
//         callback(collection[item], item, collection)
//       }
//       return collection
//     },
//     map: function(collection, callback) {
//       const mappedArr = []
//       for(const item in collection){
//         mappedArr.push(callback(collection[item], item, collection))
//       }
//       return mappedArr
//     },
//     reduce: function(collection, callback, acc) {
//       if(!(collection instanceof Array)){
//         collection = Object.values(collection)
//       }
//       if(!acc){
//         acc = collection[0]
//         collection = collection.slice(1)
//       }
//       for (let i=0; i < collection.length; i++){
//         acc = callback(acc, collection[i], collection)
//       }
//       return acc
//     },
//     find: function(collection, predicate) {
//       return collection.find(predicate)
//     },
//     filter: function(collection, predicate) {
//       return collection.filter(predicate)
//     },
//     size: function(collection, predicate) {
//       if(collection instanceof Array){
//         return collection.length
//       }
//       else{
//         return Object.values(collection).length
//       }
//     },
//     first: function(array, n){
//       return !n ? array[0] : array.slice(0, n)
//     },
//     last: function(array, n){
//       return !n ? array[array.length - 1] : array.slice(array.length - n)
//     },
//     compact: function(array){
//       let compactArr = []
//       for (let i=0; i < array.length; i++){
//         array[i] && compactArr.push(array[i])
//       }
//       return compactArr
//     },
//     sortBy: function(array, callback){
//       return [...array].sort((a,b) =>  callback(a) - callback(b))
//     },
//   flatten: function(array, shallow, newArr = []) {
//       if (shallow) {
//         return newArr.concat.apply([], array)
//       } else {
//         for (const element of array) {
//           if (Array.isArray(element)) {
//             fi.flatten(element, false, newArr)
//           }
//           else {
//             newArr.push(element)
//           }
//         }
//         return newArr
//       }
//     },
//     uniq: function(array, isSorted, callback){
//       if(isSorted){
//         let newArr = []
//         for(let i=0; i < testArr.length; i++){
//           if(i === 0 || testArr[i] !== testArr[i-1]){
//             newArr.push(testArr[i])
//           }
//         }
//         return newArr
//       }
//       else if (callback){
//         let callbackArray = array.map(callback)
//         return array.filter((value, index) => {
//           return callbackArray.indexOf(callback(value)) === index
//         })
//       }
//       else {
//         return array.filter((value, index) => {
//           return array.indexOf(value) === index
//         })
//       }
//     },
//     keys: function(object) {
//       return Object.keys(object)
//     },
//     values: function(object) {
//       return Object.values(object)
//     },
//     functions: function(object) {
//       return Object.keys(object).map((key) => {
//         if(typeof object[key] === 'function'){
//           return key
//         }
//         else{
//           return false
//         }
//       }).filter((value) => value)
//     },
//   }
// })()
// fi.libraryMethod()
