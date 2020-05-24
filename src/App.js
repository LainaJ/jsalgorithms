import React, {Component} from 'react';
import './App.css';


class App extends Component {

//   countUniqueValues = (arr) => {
//   let left = 0
//   let movingPointer = left + 1
//   let countUniq = 0
  
//   while(movingPointer < arr.length){
//       if(arr[left] === arr[movingPointer]){
//           movingPointer++ 
//           }
//       else {
//           countUniq++
//       }
//   }
// }

//  smallerNumbersThanCurrent = (nums) => {
//   //make object
//   let obj = {}
//   let countNumsSmaller = 0
//   //loop though nums array
//       //for nums[i] put into object as keys
//   for(let i = 0; i < nums.length; i++){
//       //if the object doesn't have the value of nums[i] as key, 
//       //add it and set equal to 0
//       //if it does, set equal to 0
//       if(!(obj[nums[i]])){
//           obj[nums[i]] = 0
//           }
//       }
// //obj {8: 0, 1: 0, 2: 0, 3: 0}

//   //loop through nums
//       for(let i = 0; i < nums.length; i++){
//           if(nums[i] > nums[i++]){
//           //add a countNumsSmaller
//               obj[nums[i]]++
//           }
//       }
// return obj
//   //return an array of countNumsSmaller
// };

 canConstructRansom = (ransomNote, magazine) => {
  if(ransomNote === ""){
    return true
  }
  let ransObj = {}
  let magObj = {}
  //loop through ransomNote string
  //create obj from the ransomnote string
  for(let i = 0; i < ransomNote.length; i++){
      if(ransObj[ransomNote[i]]){
          ransObj[ransomNote[i]]++
       }
      else {
          ransObj[ransomNote[i]] = 1
      }
  }
  //loop through magazine  string
  //create obj from magazing string
  for(let i = 0; i < magazine.length; i++){
      if(magObj[magazine[i]]){
          magObj[magazine[i]]++
      }
      else {
          magObj[magazine[i]] = 1
      }
    }
    console.log(ransObj)
    console.log(magObj)
//then compare two obj
   //if key in ransomNote obj does not exist in mag obj, return false 
 for(let letter in ransObj){
    if(!(magObj[letter])){
      return false
    }
//if frequency of a letter in ransomNote Obj is = or less than freq of letter in magaz obj, return true
// if not (if ransomnote letter freq is HIGHER than magazine letter freq, return false) 
   if(ransObj[letter] > magObj[letter]){
    
      return false
    }
  return true
 }
};


validAnagram2 = (string1, string2) => {
  if (string1.length !== string2.length) {
      return false 
     }
  //put each string into object form
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < string1.length; i++){
     if (obj1[string1[i]]){
         obj1[string1[i]]++
      } 
      else {
         obj1[string1[i]] = 1   
      }
  }
   for (let i = 0; i < string2.length; i++){
     if (obj2[string2[i]]){
         obj2[string2[i]]++
      } 
      else {
         obj2[string2[i]] = 1   
      }
  }
      console.log(obj1)
      console.log(obj2)
  //are there even the same letters present
  for(let key in obj1){
     if (!(key in obj2)){
         return false
      }
   //check frequency
      if(obj1[key] !== obj2[key]){
          return false
      }
  }
 return true
}


singleNumber = (nums) => {
  // X create an object
    let numsFreqObj = {}
  //iterate over the length of array
   for(let i = 0; i < nums.length; i++){
  //in that object, put the number as a key, and the frequency as a value
     if (numsFreqObj[nums[i]]){
          numsFreqObj[nums[i]]++
      } 
      else if(!(numsFreqObj[nums[i]])){
          numsFreqObj[nums[i]] = 1
      }
  }
  //look at that object
  //if a frequency is once, then return it
  for (let key in numsFreqObj){
      if(numsFreqObj[key] === 1){
          return key
      }
  }   
};


render() {
  return (
    <div>
      {/* {this.countUniqueValues([1, 1, 1, 1, 2])} */}
      {/* {this.canConstructRansom("the", "the cat is home")} */}
      {this.singleNumber([4,1,2,1,2])}
    </div>
  )
  }
}

export default App;
