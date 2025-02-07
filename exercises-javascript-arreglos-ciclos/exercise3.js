let arr = [1,2,3,4,5];

let infoArray = (arr) => {
    let info = []
    info.push(arr.reduce((acumulador, valorActual) => {
        return acumulador +valorActual;
    },0));
    info.push(arr.reduce((acumulador, valorActual) => {
        return acumulador * valorActual;
    },1));
    return info;
};
let info = infoArray(arr);
console.log(`Suma: ${info[0]} , Producto: ${info[1]}`);