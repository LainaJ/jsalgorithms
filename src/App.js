import React, {Component} from 'react';
import './App.css';


class App extends Component {

  countUniqueValues = (arr) => {
  let left = 0
  let movingPointer = left + 1
  let countUniq = 0
  
  while(movingPointer < arr.length){
      if(arr[left] === arr[movingPointer]){
          movingPointer++ 
          }
      else {
          countUniq++
      }
  }
  console.log( countUniq)
}

 smallerNumbersThanCurrent = (nums) => {
  //make object
  let obj = {}
  let countNumsSmaller = 0
  //loop though nums array
      //for nums[i] put into object as keys
  for(let i = 0; i < nums.length; i++){
      //if the object doesn't have the value of nums[i] as key, 
      //add it and set equal to 0
      //if it does, set equal to 0
      if(!(obj[nums[i]])){
          obj[nums[i]] = 0
          }
      }
//obj {8: 0, 1: 0, 2: 0, 3: 0}

  //loop through nums
      for(let i = 0; i < nums.length; i++){
          if(nums[i] > nums[i++]){
          //add a countNumsSmaller
              obj[nums[i]]++
          }
      }
return obj
  
  
  //return an array of countNumsSmaller
};



render() {
  return (
    <div>
      {this.countUniqueValues([1, 1, 1, 1, 2])}
    </div>
  )
  }
}

export default App;
