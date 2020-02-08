class Duck {
    constructor(display){
        this._display=display;
        
    }
    get display(){
        
       return this._display
    }

    swin(){
        return console.log('Yo Nado');
    }

}

module.exports = Duck;