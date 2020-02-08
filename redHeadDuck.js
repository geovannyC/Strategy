const Duck = require('./Duck');

class RedheadDuck extends Duck {
    constructor(display){
        super(display);
    }
    fly(){
        console.log('Yo vuelo');
    }

    quack(){
        console.log('Yo digo Cuack');
    }
}

module.exports = RedheadDuck;