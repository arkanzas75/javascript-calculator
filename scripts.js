// gui calc
let openCalcButton = document.querySelector('.open-calc-button-div');
let calcGui = document.querySelector('.calc');
let display = document.getElementById('input');
let sevenButton = document.querySelector('.seven');
let eightButton = document.querySelector('.eight');
let nineButton = document.querySelector('.nine');
let fourButton = document.querySelector('.four');
let fiveButton = document.querySelector('.five');
let sixButton = document.querySelector('.six');
let oneButton = document.querySelector('.one');
let twoButton = document.querySelector('.two');
let threeButton = document.querySelector('.three');
let zeroButton = document.querySelector('.zero');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let multiplyButton = document.querySelector('.multiply');
let separateButton = document.querySelector('.separate');
let clearButton = document.querySelector('.clear');
let resultButton = document.querySelector('.result');
let closeAppButton = document.querySelector('.close-app');


openCalcButton.addEventListener('click', () => {
	calcGui.style.display = 'block';
	openCalcButton.style.display = 'none';
});

closeAppButton.addEventListener('click', function() {
	calcGui.style.display = 'none';
	openCalcButton.style.display = 'block';
});

resultButton.addEventListener('click', function() {
	display.value = eval(display.value);
});

clearButton.addEventListener('click', function() {
	display.value = 0;
});

plusButton.addEventListener('click', function() {
	display.value += '+';
});

minusButton.addEventListener('click', function() {
	display.value += '-';
});

multiplyButton.addEventListener('click', function() {
	display.value += '*';
});

separateButton.addEventListener('click', function() {
	display.value += '/';
});

oneButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 1;
	} else {
		display.value += 1;
	}
});

twoButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 2;
	} else {
		display.value += 2;
	}
});

threeButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 3;
	} else {
		display.value += 3;
	}
});

fourButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 4;
	} else {
		display.value += 4;
	}
});

fiveButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 5;
	} else {
		display.value += 5;
	}
});

sixButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 6;
	} else {
		display.value += 6;
	}
});

sevenButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 7;
	} else {
		display.value += 7;
	}
});

eightButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 8;
	} else {
		display.value += 8;
	}
});

nineButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 9;
	} else {
		display.value += 9;
	}
});

zeroButton.addEventListener('click', function() {
	if (display.value == 0) {
		display.value = 0;
	} else {
		display.value += 0;
	}
});

// keyboard support for calcGui

document.addEventListener('keydown', (event) => {
	for(let i = 0; i < 10; i++) {
		if(event.key === String(i) && calcGui.style.display == 'block') {
			if (display.value == 0) {
				display.value = i;
			} else {
				display.value += i;
			}
		}
	}
});

let mathSymbols = ['*', '/', '+', '-'];

document.addEventListener('keydown', (event) => {
	for(let sym of mathSymbols) {
		if(event.key === sym && calcGui.style.display == 'block') {
			if (display.value == 0) {
				display.value = sym;
			} else {
				display.value += sym;
			}
		}
	}
});

document.addEventListener('keydown', (event) => {
	if(event.key === '=' || event.key === 'Enter' && calcGui.style.display == 'block') {
		display.value = eval(display.value);
	}
});

document.addEventListener('keydown', (event) => {
	if(event.key === 'Backspace' && calcGui.style.display == 'block') {
		display.value = 0;
	}
});