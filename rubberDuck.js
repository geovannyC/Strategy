const Duck = require('./Duck');
class RubberDuck extends Duck {
    constructor(display){
        super(display);
    }
    quack(){
        console.log('Yo digo Cuack');
    }

}

module.exports = RubberDuck;