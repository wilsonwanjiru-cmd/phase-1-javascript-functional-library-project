// index.js

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === "object" && collection !== null) {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item, index, arr) => {
      result.push(callback(item, index, arr));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex;
    const isArray = Array.isArray(collection);
  
    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = isArray ? collection[0] : collection[myKeys(collection)[0]];
      startIndex = 1;
    }
  
    if (isArray) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else {
      const keys = myKeys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], key, collection);
      }
    }
  
    return accumulator;
  }
  
  
  
  
  
  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
  }
  
  function myFilter(collection, callback) {
    const result = [];
    myEach(collection, (item, index, arr) => {
      if (callback(item, index, arr)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === "string") {
      return collection.length;
    } else if (typeof collection === "object" && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  
  
  
  
  
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  