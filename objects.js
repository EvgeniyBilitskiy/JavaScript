//Homework1
const human = {
    name: "Valik",
    age: 99,
    sex: "male",
    occupation: "crime"
};
human.getInfo = function () {
    for (let key in this) {
        console.log (key, ":", this[key]) 
  }
};
human.education = false;
human.getInfo();

//Homework2
var services = {
    "hdfj": 90,
	"стрижка (грн)": 60,
	"гоління (грн)": 80,
	"Миття голови (грн)": 100
};
services['Розбити скло (грн)'] = 200;


