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