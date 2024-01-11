// Homework1
function NotANumber(value) {
    if ((value * 1) <= Number.POSITIVE_INFINITY && (value * 1) >= Number.NEGATIVE_INFINITY) {
        return false;
    }
    return true;
}

console.log(NotANumber(undefined));

// Homework2
function fakePad(text, symbol, counter, before) {
    if (before) {
        while (counter > text.length) {
            text = symbol + text;
        }
        console.log(text)
    } else {
        while (counter > text.length) {
            text = text + symbol;
        }
        console.log(text)
    }
}
fakePad("hkjh", "=", 66, false)

//Homework3
// function fakeRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

function checkProbabilityTheory(amount) {
    let even = 0;
    let odd = 0;
    for (let counter = 0; counter < amount; counter++) {
        let fakeRandomNumber = Math.round(Math.random() * (1000 - 100) + 100);
        if (fakeRandomNumber % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log("Кількість згенерованих чисел: ", amount);
    console.log("Парних чисел: ", even);
    console.log("Не парних чисел: ", odd);
    console.log("Відсоток парних до не парних: ", even / amount * 100, " / ", odd / amount * 100);
}
checkProbabilityTheory(50);