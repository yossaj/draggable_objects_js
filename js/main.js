const fill = document.querySelector('.fill');
const fillfive = document.querySelector('.fillfive');
const empties = document.querySelectorAll('.empty');
const counter = document.querySelector('.counter')
const vendingMachine = document.querySelector('.vending-machine')


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// fillfive.addEventListener('dragstart', dragStart);
// fillfive.addEventListener('dragend', dragEndFive);

// Loop through empty boxes and add listeners


vendingMachine.addEventListener('dragover', dragOver)
vendingMachine.addEventListener('dragenter', dragEnter)
vendingMachine.addEventListener('dragleave', dragLeave)
vendingMachine.addEventListener('drop', dragDrop)
// Drag Functions

function dragStart() {
    console.log(this)
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 1);
}

function dragEnd() {
    this.className = 'fill';
}

// function dragEndFive() {
//     this.className = 'fillFive';
// }

function dragOver(nothing){
    nothing.preventDefault()
    console.log('over');
    
}

function dragEnter(nothing){
    nothing.preventDefault()
    this.className += ' hovered';
    console.log('enter');
    
}

function dragLeave(){
    console.log('leave');
    this.className = 'empty';
    
}

function dragDrop(){
    console.log(this)
    this.append(fill)
}

// function dragDropFive(){
//     console.log(this)
//     this.append(fillfive)
// }



