// palindrome 
const palindrome = string => {
    // turn string lowercase 
    string = string.toLowerCase()
    // iterate through letters of word and see if the current letter is the same as its mirror 
    string.split('').forEach((letter, i)=>{
        if (i < Math.floor(string.length/2)){
            if (letter === string[string.length - (i + 1)]){
                console.log(letter + ' ' + string[string.length - (i +1)] + ' ' + true)
            }else{
                console.log(letter + ' ' + string[string.length - (i +1)] + ' ' + false)
                return false
            }
        }
    })
}
// console.log('aNne');
// palindrome('anne')
// console.log('apple');
// palindrome('apple')
// console.log('abbe');
// palindrome('abbe')

const fizzBuzz = n => {
    for (let i = 0; i <= n; i++){
        i % 3 === 0
        ?
            i % 5 === 0
            ?
            console.log('fizzbuzz')
            :
            console.log('fizz')
        :
        i % 5 === 0 
        ?
        console.log('buzz')
        :
        console.log(i)
    }
}

// fizzBuzz(15)

const anagram = (word1, word2) => {
    let returnValue; 
    //  first check their lengths 
    if (word1.length === word2.length){ 
        let object1 = wordObject(word1); 
        let object2 = wordObject(word2); 
        for (let letter in object1){
            if (returnValue !== false){
                if (object1[letter] === object2[letter]){
                    returnValue = true; 
                }else {
                    returnValue = false;
                }
            }
        }
    }else{
        returnValue = false 
    }
    console.log(returnValue);
    return returnValue; 
}

// function to count the letters in a word and make objects out of their quantities 
const wordObject = word => {
    word.toLowerCase()
    let returnObject = {}; 
    for (let i = 0; i < word.length; i++){
        // check if letter is in returnObject yet, and if not add it 
        if (returnObject[word[i]]){
            returnObject[word[i]] += 1;
        }else {
            returnObject[word[i]] = 1; 
        }
    }
    return returnObject;
}

const fibonacci = n => {
    let sequence = [0,1]; 
    let i = 0; 
    while (i < n){
        sequence.push(sequence[i] + sequence[i+1])
        i++; 
    }
    console.log(sequence);
    console.log(sequence[n]);
}

// fibonacci(10); 

const mergeSort = array => {
    if (array.length <= 1){
        return array 
    }else{
        const middle = Math.floor(array.length/2); 
        const left = array.slice(0,middle); 
        const right = array.slice(middle); 
        return merge(mergeSort(left),mergeSort(right)); 
    }
}

const merge = (left, right) => {
    let leftIndex = 0; 
    let rightIndex = 0; 
    let returnArray = []; 
    // use while loop to make sure we don't stop until one of the array indexes has been reached 
    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            returnArray.push(left[leftIndex]);
            leftIndex++;
        }else{
            returnArray.push(right[rightIndex]);
            rightIndex++; 
        }
    }
    // concat once one limit has been reached 
    console.log(returnArray.concat(left).concat(right));
    return returnArray.concat(left).concat(right)
}

let exampleArray = []; 
for (let i = 0; i < 10; i++){
    exampleArray.push(Math.floor(Math.random()*10))
}

// mergeSort(exampleArray)

const binarySearch = (array, item) => {
    // check to see if the array is too short 
    if (array.length <=1 ){
        if (array[0] === item){
            console.log(true);
            return true
        }else{
            console.log(false);
            return false 
        }
    }else{

        // split array in half and see if its middle value is what we're looking for 
        const middle = Math.floor(array.length/2); 
        if (array[middle] === item){
            console.log(array[middle]);
            console.log(true);
            return true 
        }else if(array[middle] < item){
            return binarySearch(array.slice(middle),item)
        }else {
            return binarySearch(array.slice(0,middle), item)
        }
    }
}


binarySearch([11,1,1,1,2,1], 1)