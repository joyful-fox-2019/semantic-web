function changeTheme(){    
    let colour = document.querySelector('.theme')
    let value = colour.options[colour.selectedIndex].value
    if(value=='white'){
        document.body.style.backgroundColor = '#dddddd';
        document.querySelector('#nav-bar ul li a').style.color = 'black';
        document.querySelector('#header-videos .text-videos').style.color = 'black';
        document.querySelector('#header-videos #order-videos a').style.color = 'black';    
        document.querySelector('#header-videos .text-videos').style.backgroundColor = '#ffffff';
        document.querySelector('table.blueTable .head').style.borderRight = '1px solid black';
        document.querySelector('.columnEmpty span').style.color = 'black';
        document.querySelector('.blueTable tbody').style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = '#111111';
        document.getElementById('nav-bar').style.backgroundColor = '#000000';
        document.querySelector('#nav-bar ul li a').style.color = 'white';
        document.querySelector('#header-videos #order-videos a').style.color = 'white';    
        document.querySelector('#header-videos .text-videos').style.color = 'white';    
        document.querySelector('#header-videos .text-videos').style.backgroundColor = '#111111';
        document.querySelector('table.blueTable .head').style.borderRight = '1px solid #AAAAAA';
        document.querySelector('table.blueTable tbody td').style.color = 'white';
        document.querySelector('footer').style.backgroundColor = '#000000';
        document.querySelector('.columnEmpty span').style.color = 'white';
        document.querySelector('.blueTable tbody').style.backgroundColor = '#111111';
    }
}