function letters(x){
    this.letter = x;
    this.guessed = false;
    if(this.letter===' '){
        this.guessed = true;
    };
    this.check = function(param) {
        if(param === this.letter){
            this.guessed = true;
        }
    };
    this.char = function(){
        if(this.guessed){
            return this.letter;
        }else{
            return '_';
        }
    }
}

module.exports = letters;