//Homework1
const human = {
    name: "Valik",
    age: 99,
    sex: "male",
    occupation: "crime"
};
human.getInfo = function () {
    for (let key in this) {
        if (typeof this[key] !== 'function') {
            console.log(key, ":", this[key])
        }
    }
};
human.education = false;
human.getInfo();

//Homework2
const services = {
    "Cтрижка (грн)": 90,
    "Гоління (грн)": 13,
    "Миття голови (грн)": 100
};
services['Розбити скло (грн)'] = 200;
// Рассчет общей стоимости 
services.price = function () {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === "number") {
            sum += this[key];
        }
    }
    return sum;
}
// Нахождение минимального значения 
services.minPrice = function () {
    let min = Infinity;
    for (let key in this) {
        if (min > this[key]) {
            min = this[key];
        };
    }
    return min;
}
// Нахождение максимального значения 
services.maxPrice = function () {
    let min = 0;
    for (let key in this) {
        if (min < this[key]) {
            min = this[key];
        }
    }
    return min;
}

console.log("Вартість \"наданих послуг\"(грн):", services.price());
console.log("Мінімальний price(грн):", services.minPrice());
console.log("Максимальний price(грн):", services.maxPrice());

