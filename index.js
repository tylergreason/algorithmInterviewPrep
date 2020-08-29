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
console.log('aNne');
palindrome('anne')
console.log('apple');
palindrome('apple')
console.log('abbe');
palindrome('abbe')

const fizzBuzz = n => {
    
}