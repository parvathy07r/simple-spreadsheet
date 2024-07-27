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
    
    /*
    description: function to generate array of numbers from start to end
    parameters:
    1.start
    2.end
    */
    const range = (start, end) => Array(end - start + 1);

}