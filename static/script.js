//alert('Hello world!');

window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        // Everything you want to do when button is clicked below
        const userText = document.getElementById('name').value;
        const url = '/search/' + userText; // This should remind you of APIs in Python!
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
        .then(data => { // .then will only run the function *once* the data is fetched from the internet
            //Array with all the headlines
            console.log(data['headlines']); // See what this logs!\
            
            //create a new div element
            const newDiv = document.createElement('div');
            newDiv.id = "newDiv";
            newDiv.className = "item";
            
            var pTag = document.createElement("p");
            var textTag = document.createTextNode(data['headlines']);
            pTag.appendChild(textTag);
            newDiv.appendChild(pTag);
            var element = document.getElementById("headlinesDiv");
            element.appendChild(newDiv);
        });
        
    });
};

//Output to Develop -> Show javascript console
//console.log(['headlines']);