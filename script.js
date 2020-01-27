window.addEventListener('load', function () {
    let qArr = [{ q: "Commonly used data types DO NOT include:", a: ['Strings', 'Booleans', 'Alerts', 'Numbers'], c: 'Alerts' },
    { q: "The condition in an if / else statement is enclosed within _______", a: ['Quotes', 'Curly Brackets', 'Parantheses', 'Square Brackets'], c: 'Parantheses' },
    { q: "Arrays in Javascript can be used to store________.", a: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'], c: 'All of the Above' },
    { q: "String values must be enclosed within _____________ when being assigned to variables.", a: ['Commas', 'Curly Brackets', 'Quotes', 'Parantheses'], c: 'Quotes' },
    { q: "A very useful tool used during development and debugging for printing content to the debugger is:", a: ['Javascript', 'Terminal/Bash', 'For Loops', 'console.log'], c: 'console.log' }]

    let counter = 0;
    let content = document.querySelector(".content");
    let submit = document.querySelector(".btn");
    let points = 0;

    submit.addEventListener('click', function () {
        displayQ()

    })

    function displayQ(q) {
        content.innerHTML = '';
        let point = document.querySelector('#points');
        point.textContent = points;
        let node = document.createElement("h1");
        let text = document.createTextNode(qArr[counter].q);
        node.appendChild(text);
        content.appendChild(node);
        let div = document.createElement('div');
        for (let i = 0; i < qArr[counter].a.length; i++) {
            let p = document.createElement('p');
            let btn = document.createElement('button')
            let pText = document.createTextNode(qArr[counter].a[i]);
            btn.appendChild(pText);
            btn.addEventListener('click', handleClick)
            p.appendChild(btn);
            div.appendChild(p);
        }
        content.appendChild(div);
    }

    function handleClick(e) {
        let answer = e.target.textContent
        if (answer === qArr[counter].c) {
            alert('Correct!');
            counter++;
            points+=5;
            displayQ()
        }
        else {
            alert('Wrong');
            counter++;
            points-=3;
            displayQ()
        }
    }


})