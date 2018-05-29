let letters = require('./letters');

function word(word){
    this.word = word;
    this.arr = [];
    for(let x in word){
        this.arr.push(new letters(word[x]));
    }

    this.callGuess = function(x){
        for(let i in this.arr){
            this.arr[i].check(x);
        }
    };
    this.string = function(){
        let str = '';
        let str2 = '';
        for(let i in this.arr){
            str += `${this.arr[i].char()} `;
            str2 += `${this.arr[i].char()}`;
        };
        return [str.trim(), str2.trim()];
    }
};

module.exports = word;

