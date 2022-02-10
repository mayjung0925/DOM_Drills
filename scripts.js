


document.addEventListener('DOMContentLoaded', function () {

    let header = document.createElement("div");
    header.className = 'header-container';

    let title1 = document.createElement('h1');
    let title1Text = document.createTextNode('This is an h1')
    title1.className = 'h1';


    title1.appendChild(title1Text);
    header.appendChild(title1);
    document.body.appendChild(header);



    let title2 = document.createElement('h2');
    let title2Text = document.createTextNode('This is an h2')
    title2.className = 'h2'


    title2.appendChild(title2Text);
    header.appendChild(title2);


    let title3 = document.createElement('h3');
    let title3Text = document.createTextNode('This is an h3')
    title3.className = 'h3';

    title3.appendChild(title3Text);
    header.appendChild(title3);

    let title4 = document.createElement('h4');
    let title4Text = document.createTextNode('This is an h4');
    title4.className = 'h4';

    title4.appendChild(title4Text);
    header.appendChild(title4);

    let title5 = document.createElement('h5');
    let title5Text = document.createTextNode("This is an h5");
    title5.className = 'h5';

    title5.appendChild(title5Text);
    header.appendChild(title5);

    let title6 = document.createElement('h6');
    let title6Text = document.createTextNode('This is an h6');
    title6.className = 'h6';

    title6.appendChild(title6Text);
    header.appendChild(title6);

    const colors = ['black', 'blue', 'red', 'green', 'yellow', 'gray', 'coral', 'pink']

    title1.addEventListener('dblclick', function () {
        title1.style.color = colors[Math.floor(Math.random() * 8)]
    })

    title2.addEventListener('dblclick', function () {
        title2.style.color = colors[Math.floor(Math.random() * 8)]
    })

    title3.addEventListener('dblclick', function () {
        title3.style.color = colors[Math.floor(Math.random() * 8)]
    })

    title4.addEventListener('dblclick', function () {
        title4.style.color = colors[Math.floor(Math.random() * 8)]
    })

    title5.addEventListener('dblclick', function () {
        title5.style.color = colors[Math.floor(Math.random() * 8)]
    })

    title6.addEventListener('dblclick', function () {
        title6.style.color = colors[Math.floor(Math.random() * 8)]
    })

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.className = 'button-list'
    button.appendChild(btnText);
    document.body.appendChild(button);

    let countClicks = 0;

    function listItem() {

        countClicks++
        let list = document.createElement('li');

        let listText = document.createTextNode('This is list item ' + countClicks)

        list.appendChild(listText);
        document.body.appendChild(list);

        list.addEventListener('click', function () {

            list.style.color = colors[Math.floor(Math.random() * 8)]

        })

        list.addEventListener('dblclick', function () {
            list.remove();

        })



    }

    button.addEventListener('click', listItem);


});
