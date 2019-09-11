// 1. Write a function that combines two arrays by
// alternatingly taking elements,
// e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function alternateArrayElements(arr1, arr2) {
    var result = [];
    // While both arrays still have elements, alternately grab them
    // and stuff them into the result, until at least one of the
    // arrays is empty
    while (arr1.length && arr2.length) {
        result.push(arr1.shift());
        result.push(arr2.shift());
    }
    // If there are any leftover elements from arrays that had
    // different lengths, simply add them to the end of the result
    // (If an array is empty, nothing is added)
    result = result.concat(arr1);
    result = result.concat(arr2);
    return result;
}
console.log(alternateArrayElements(['a', 'b', 'c', 'd', 'e'], [1, 2, 3]));
// 2. Write a function that returns the elements on odd positions in an array.
function oddElements(arr) {
    var result = [];
    // Index 0 is the first element, so that is where we will start
    // Grab the element at the index and remove it, which will shift the rest
    // of the elements forward, putting the 'even' element into the odd one's
    // place. Then I increment the index by one, placing it at the next 'odd'
    // element. Repeat while the index grows and the array shrinks until the
    // index is off the end of the array.
    var x = 0;
    while (x < arr.length) {
        result.push(arr.splice(x++, 1)[0]);
    }
    return result;
}
console.log(oddElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 3. Write a function that tests whether a string is a palindrome.
function isPalindrome(str) {
    var x = 0;
    var y = str.length - 1;
    // (This could be done with one index variable, but it's more
    // readable with two.)
    // Starting at each end of the string, compare inwards
    // until the midpoint is reached, where the two indexes are equal
    while (y - x >= 0) {
        if (str[x++] !== str[y--]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('ohio')); // false
console.log(isPalindrome('ohiho')); // true
console.log(isPalindrome('ohiiho')); // true
