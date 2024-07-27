window.onload = () => {

    //select html element with id container
    const container = document.getElementById("container");

    /*
    description: function to create a new div with class name label and append it as a child to container div
    parameter:
    1. name
    */
    const createLabel = (name) => {

        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);

    }

    // Generate the array of characters
    const letters = charRange('A', 'J');

    // Apply createLabel to each character
    letters.forEach(createLabel);

    //For each number from 1 to 99, and for each letter from 'A' to 'J', creates an input field, sets its aria-label with the letter and number, and then adds the input field to the page.
    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            const input = document.createElement("input");
            input.type = "text";
            input.ariaLabel = letter + number;
            input.onchange = update;
            container.appendChild(input);
        });
    });

}

/*
description: function to generate array of numbers from start to end
parameters:
1.start
2.end
*/
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

/*
description: function to generate array of characters from start to end
parameters:
1.start
2.end
*/
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map((code) => String.fromCharCode(code));

const sum = (nums) => {
    nums.reduce((sum, currentElement) => {
        return sum + currentElement;
    }, 0);
}

const isEven = (num) => {
    if(num % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

const average = (nums) => sum(nums) / nums.length;

const median = (nums => {
    const sorted = nums.slice().sort((a,b) => a-b);
    const length = sorted.length;
    const middle = length / 2 - 1;
    return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
});


const spreadsheetFunctions = {
    sum,
    average,
    median,
};

const update = (event) => {
    const element = event.target;
}