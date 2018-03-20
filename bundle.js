(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var checkWord = require('check-word'),
    words     = checkWord('en');

// function swap(chars, i, j) {
//     var tmp = chars[i];
//     chars[i] = chars[j];
//     chars[j] = tmp;
// }
// function getAnagrams(input) {
//     var counter = [],
//         anagrams = [],
//         chars = input.split(''),
//         length = chars.length,
//         i;
//     for (i = 0; i < length; i++) {
//         counter[i] = 0;
//     }
//     anagrams.push(input);
//     i = 0;
//     while (i < length) {
//         if (counter[i] < i) {
//             swap(chars, i % 2 === 1 ? counter[i] : 0, i);
//             counter[i]++;
//             i = 0;
//             anagrams.push(chars.join(''));
//         } else {
//             counter[i] = 0;
//             i++;
//         }
//     }
//     return anagrams;
// }
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


function wordMaker(params) {

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
    var comb = combinations("oyreli");
    comb.forEach(function(element) {
        if(words.check(element)){
            array.push(element);
        }
    });

    return array;
}
},{"check-word":2}],2:[function(require,module,exports){
(function (__dirname){
var fs = require('fs');

var words = function(language){
    var possibleLanguages = ['de', 'en', 'es', 'fr'];

    language = language && language.toLowerCase() || 'en';

    if(possibleLanguages.indexOf(language) == -1) throw new Error(language + " is not valid language");
    return {
        check : function(word){
            var content = fs.readFileSync(__dirname + '/words/'+language+'.txt');
            var regex = new RegExp('\n' + word +'\n');
            if ( content.toString('utf-8').match(regex)) {
                return true;
            }
            return false;
        }
    };
};


module.exports = words;
}).call(this,"/node_modules/check-word")
},{"fs":3}],3:[function(require,module,exports){

},{}]},{},[1]);
