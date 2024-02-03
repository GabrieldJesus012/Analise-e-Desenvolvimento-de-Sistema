var carro = [{modelo: 'Audio A3', marca: 'Audi', ano: 2020},{modelo: 'Compass', marca: 'Jeep', ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica].ano);
}

for (let car of carro){
    console.log(car.ano);
}


