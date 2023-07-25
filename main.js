// let value = document.getElementById('value');

// let count = 1;

// function upd() {
//     value.textContent = count++;
// }

// function changeColor() {
//     document.body.style.backgroundColor = 'blue';
// }



// Homework getselector

// 1

// document.querySelector('item1');

// 2

// document.querySelector('item2')

// 3

// document.querySelector('item3')

// 4

// document.querySelector('item4')

// 5

// document.querySelector('item5')

// getid

// 1

// document.getElementById('li1');

// 2

// document.getElementById('li2')

// 3

// document.getElementById('li3')

// 4

// document.getElementById('li4')

// 5

// document.getElementById('li5')

// 6

// document.getElementById('li6')

// 7

// document.getElementById('li7')


// 8

// document.getElementById('li8')

// 9

// document.getElementById('li9')

// 10

// document.getElementById('li10')


// gettag

// 1

// document.getElementsByTagName('li')

// 2

// document.getElementsByTagName('button')

// 3

// document.getElementsByTagName('p')

// 4

// document.getElementsByTagName('body')

// 5

// document.getElementsByTagName('script')

// 6

// document.getElementsByTagName('head')

// 7

// document.getElementsByTagName('title')

// 8

// document.getElementsByTagName('meta')


// getclass

// 1

// document.getElementsByClassName('item1')

// 2

// document.getElementsByClassName('item2')

// 3

// document.getElementsByClassName('item3')

// 4

// document.getElementsByClassName('item4')

// 5

// document.getElementsByClassName('item5')


const modal = document.getElementById('modal');
const open = document.getElementById('open');
const close = document.getElementById('close');
const count = document.getElementById('count')


function Open() {
    modal.style.display = 'block'
}
function Close() {
    modal.style.display = 'none'
}




function Reklama() {
    count = 0;
    setInterval(() => {
        count--
    },5000)
}