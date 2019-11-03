let data = [
  { img: '1.jpg',name: 'Naruto Uzumaki', affiliation: 'Konohagakure', height: '181', blood: 'O', skills: 'Rikudou, Rasengan, Multi Odama Rasengan, Shadow Clone Jutsu, Tajuu Kagebunshin, EroKagebunshin, Sage' },
  { img: '2.png',name: 'Sasuke Uchiha', affiliation: 'Konohagakure', height: '171', blood: 'B', skills: 'Taijutsu, Elemen Tanah (Doton)' },
  { img: '3.png',name: 'Sakura Haruno', affiliation: 'Konohagakure', height: '170', blood: 'AB', skills: 'Medical Ninjutsu, Chanaro' },
  { img: '4.jpg',name: 'Itachi Uchiha', affiliation: 'Akatsuki', height: '173', blood: 'AB', skills: 'Sharingan, Mangekyou Sharingan, Mangekyou Sharingan, Rinnegan, Amaterasu,SusanooGenjutsu, Izanagi, Izanami' },
  { img: '5.jpg',name: 'Kakashi Hatake', affiliation: 'Konohagakure', height: '186', blood: 'A', skills: 'Sharingan, kamui, Elemen Petir, Elemen Air, Elemen Tanah' },
  { img: '6.jpg',name: 'Gaara', affiliation: 'Sunagakure', height: '179', blood: 'AB', skills: 'Jinchuuriki Ichibi, Fuin Saind Jutsu, Sand Jutsu' },
  { img: '7.jpg',name: 'Jiraiya', affiliation: 'Konohagakure', height: '192', blood: 'AB', skills: 'Sennin, Sage Mode, Rasengan, Genjutsu, Ninjutsu, Elemen Api, Elemen Angin, Shadow Clone' },
  { img: '8.jpg',name: 'Hinata Hyuga', affiliation: 'Konohagakure', height: '171', blood: 'AB', skills: 'Kekkei Genkai, Dojutsu Byakugan' },
  { img: '9.jpeg',name: 'Minato Namikaze', affiliation: 'Konohagakure', height: '181', blood: 'A', skills: 'Elemen Angin, Shunshin Jutsu, Hiraisin Jutsu, Rasengan, Fuin Jutsu' }
]

let row = document.getElementsByClassName('row')
data.forEach((el, i) => {
  row[0].innerHTML += `
  <div class="cards col-md-4">
          <div class="front">
            <img src="./img/${el.img}" alt="">
          </div>
          <div class="back shadow-lg bg-white rounded">
            <div class="back-content ">
              <h2 class="text-center">${el.name}</h2>
              <p><b>Affiliation :</b> ${el.affiliation}</p>
              <p><b>Height :</b> ${el.height} cm</p>
              <p><b>Blood Type :</b> ${el.blood}</p>
              <p><b>Skills :</b> ${el.skills}</p>
              <a href="#overlay${i}" class="btn btn-outline-primary">Click Me</a>
            </div>
          </div>
          <div class="overlay" id="overlay${i}">
            <a href="#" class="close btn btn-danger">Close</a>
            <img src="./img/${el.img}" alt="">
          </div>
        </div>
  `
})

