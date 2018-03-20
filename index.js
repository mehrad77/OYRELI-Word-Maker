var exports = module.exports = {};

var checkWord = require('check-word'),
    words     = checkWord('en');
    
function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}
function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;
    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }
    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }
    return anagrams;
}
//var comb = getAnagrams("oyreli");


// function allPossibleCombinations(input, fixedLength, currentCombination) {
//     if (currentCombination.length == fixedLength) {
//       return [currentCombination];
//     }  
//     const combinations = [];  
//     for (let i = 0; i < input.length; i++) {
//       combinations.push(...allPossibleCombinations(input, fixedLength, currentCombination + input[i]));
//     }
//     return combinations;
//   }
// var comb = allPossibleCombinations(['o', 'y','r','e','l','i'], 4, '')


exports.wordMaker = function(params) {
    console.log("func runned");
    function combinations(str) {
        var fn = function(active, rest, a) {
            if (!active && !rest)
                return;
            if (!rest) {
                a.push(active);
            } else {
                fn(active + rest[0], rest.slice(1), a);
                fn(active, rest.slice(1), a);
            }
            return a;
        }
        return fn("", str, []);
    }


    var array = [];
    // var comb = combinations(params);
    var comb = getAnagrams(params);
    console.log(comb);
    comb.forEach(function(element) {
        if(words.check(element)){
            array.push(element);
        }
        // else{
        //     console.log(element);
        // }
    });

    return array;
}

console.log("this is very ok");
