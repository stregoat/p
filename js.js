// 1
// function def() {
//     let num1 = prompt('введите число 1')
//     let num2 = prompt('введите число 2')
//     alert(num1*num2)
// }
// def();

// 2
// function urname() {
//     let name = prompt('ваше имя')
//     let surname = prompt('ваша фамилия')
//     let age = prompt('ваш возраст')
//     alert('Привет ' + name + ' ' + surname + ' с возрастом ' + age + ' лет')
// }
// urname();

// 3
// function urgender() {
//     let gender = prompt('ваш пол')
//     switch (gender) {
//         case 'm': {
//             alert('ваш пол мужской')
//             break
//         }
//         case 'f': {
//             alert('ваш пол женский')
//             break
//         }
//         default: alert('ваш пол не определен')
//     }
// }
// urgender();

// 4
// function week() {
//     let day = prompt('введите число от 1 до 7')
//     switch (day) {
//         case '1': {
//             alert('пн')
//             break
//         }
//         case '2': {
//             alert('вт')
//             break
//         }
//         case '3': {
//             alert('ср')
//             break
//         }
//         case '4': {
//             alert('чт')
//             break
//         }
//         case '5': {
//             alert('пт')
//             break
//         }
//         case '6': {
//             alert('сб')
//             break
//         }
//         case '7': {
//             alert('вс')
//             break
//         }
//         default: alert('такого дня недели нет')
//     }
// }
// week();

// 5
function age() {
    for (let i = 0; i<101; i++) {
       let age
       if (i < 18) age =' - ребенок'
       else if (18 <= i && i < 30 ) age =' - молодой'
       else if (30 <= i && i < 55 ) age =' - зрелый'
       else  age =' - старый'
       document.write(i + age + '<br>')
    }
}
age();

// 6
// function age2(i) {
//     let age
//     if (i < 18) age =' ребенок'
//     else if (18 <= i && i < 30 ) age =' молодой'
//     else if (30 <= i && i < 55 ) age =' зрелый'
//     else  age =' старый'    
//     return age
// }
// function urname() {
//     let name = prompt('ваше имя')
//     let age = prompt('ваш возраст')
//     let urage = age2(age)
//     if (isNaN(age)) alert('введите возраст корректно') 
//     else alert(name + ' имеет возраст ' + age + ' лет и он' + urage)
// }
// urname();

// 7
let btn = document.getElementById('btn1')
function press() {
    alert('hello')
}

// 8
let btn1 = document.getElementById('btn2')
let inp = document.getElementById('inp')
function press2() {
    inp.value='test@mail.com'
}

// 9
let btn3 = document.getElementById('btn3')
let inp1 = document.getElementById('inp2')
function press3() {
    if (inp1.value === '') alert('вы ничего не ввели') 
    else alert('вы ввели текст ' + inp1.value)
}

// 10
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let inp2 = document.getElementById('inp3')
function press4() {
    inp2.disabled= true
}
function press5() {
    inp2.disabled= false
}

// 11
let block = document.getElementById('block')
function show() {
    block.style.cssText = 'background-color: black; height: 100px; width: 100px'
}
function hide() {
    block.style.cssText = ''
}

// 12
let block2 = document.getElementById('block2')
block2.addEventListener('mouseover', () => {
    block2.style.backgroundColor='green'
})
block2.addEventListener('mouseout', () => {
    block2.style.backgroundColor='red'
})







