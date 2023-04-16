// function isPalindrome(str) {
  
//   //'isPalindrome' function takes a string as an arguement 
//   // Write your algorithm here
  
//    if (""=== isPalindrome) {
//     return false;
//   }
//   //return true if the string is a palindrome
//       else {
//        return true;
//   }
// }

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));

  
// }

// module.exports = isPalindrome;


function isPalindrome(str) {
  str = str.toLowerCase()
   //'isPalindrome' function takes a string as an arguement 
  const reversedStr = str.split("").reverse().join("");
  //split the string into an array 
  //reverse the array and joins it back to string
  return str === reversedStr;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log(isPalindrome('a'));
console.log(isPalindrome('abba')); 
console.log(isPalindrome('ab')); 

}

module.exports = isPalindrome;




