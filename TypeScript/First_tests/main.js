var bike = {
    color: 'red',
    model: 'MTB',
    brakes: 'disc',
    maxSpeed: '60',
    changeColor: function(new_color){
        this.color = new_color;
        console.log('New color: ',this.color);
    }
}

bike.changeColor('blue');