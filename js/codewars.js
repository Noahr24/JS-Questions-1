// Convert boolean values to strings 'Yes' or 'No'.

https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord(bool){
    if (bool){
        return 'Yes'
    } else {
        return 'No'
    }
}

console.log(boolToWord)



// Code Wars Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python
function even_or_odd(number){
    if (number % 2 == 0){
        return 'Even'
    }else {
        return 'Odd'
    }
};
console.log(even_or_odd())