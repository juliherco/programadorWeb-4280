function Car (brand, model, year){
    this.model = model
    this.brand=brand 
    this.year=year 

    var id=Math.random()

    this.getCarName = function(){
        console.log('Your car is a '+brand+' ' +model+' del año '+year)
    }
}

var model1=new Car ('Peugeot', 206, 2015)
console.log(model1.getCarName())

var model2=new Car ('Volkswagen', 'Amarok', 2018)
console.log(model2.getCarName())

var model3=new Car ('Ford', 'Fiesta', 2019)
console.log(model3.getCarName())
