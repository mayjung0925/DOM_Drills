


document.addEventListener('DOMContentLoaded', function () {

    const header = document.createElement("div");
    header.className = 'header-container';

    const title1 = document.createElement('h1');
    const title1Text = document.createTextNode('This is an h1')
    title1.className = 'h1';

    const title2 = document.createElement('h2');
    const title2Text = document.createTextNode('This is an h2')
    title2.classList.add('h2')


    const title3 = document.createElement('h3');
    const title3Text = document.createTextNode('This is an h3')
    title3.className = 'h3';

    const title4 = document.createElement('h4');
    const title4Text = document.createTextNode('This is an h4');
    title4.className = 'h4';

    const title5 = document.createElement('h5');
    const title5Text = document.createTextNode("This is an h5");
    title5.className = 'h5';

    const title6 = document.createElement('h6');
    const title6Text = document.createTextNode('This is an h6');
    title6.className = 'h6';

    title1.appendChild(title1Text);
    header.appendChild(title1);
    document.body.appendChild(header);

    title2.appendChild(title2Text);
    header.appendChild(title2);

    title3.appendChild(title3Text);
    header.appendChild(title3);

    title4.appendChild(title4Text);
    header.appendChild(title4);

    title5.appendChild(title5Text);
    header.appendChild(title5);

    title6.appendChild(title6Text);
    header.appendChild(title6);

    title1.addEventListener('click', setRandomColor);
    title2.addEventListener('click', setRandomColor);
    title3.addEventListener('click', setRandomColor);
    title4.addEventListener('click', setRandomColor);
    title5.addEventListener('click', setRandomColor);
    title6.addEventListener('click', setRandomColor);

    // Naming arrary cleary by adding 'Arr'

    const colorArr = [
        'black',
        'blue',
        'red',
        'green',
        'yellow',
        'gray',
        'coral',
        'pink'
    ]

    // getting a random number by using Math.floor(Math.random()* )
    // event.target indicates the current element
    function setRandomColor(event) {
        const randomNum = Math.floor(Math.random() * colorArr.length);
        event.target.style.color = colorArr[randomNum];
    }


    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.className = 'button-list'
    button.appendChild(btnText);
    document.body.appendChild(button);

    let countClicks = 0;
    // increment a number manually by setting a variable countClicks/ countClickts++ 
    //Arranging the work flow is important
    function listItem(event) {

        countClicks++
        let list = document.createElement('li');

        let listText = document.createTextNode('This is list item ' + countClicks)

        list.appendChild(listText);
        document.body.appendChild(list);

        list.addEventListener('click', setRandomColor)

        list.addEventListener('dblclick', function () {
            list.remove();

        })

    }

    button.addEventListener('click', listItem);


});
