var song = document.getElementById('songTitle')
var artist = document.getElementById('artist')
var holder = document.getElementsByClassName('popup')
var songPlayer = document.getElementById('audio')
var leftCol = document.getElementsByClassName('large-col')[0]
var rightCol = document.getElementsByClassName('large-col')[1]
var leftLine = document.getElementsByClassName('right-line')[0]
var rightLine = document.getElementsByClassName('left-line')[0]
var leftImg = document.getElementsByClassName('contain-img')[0]
var rightImg = document.getElementsByClassName('contain-img')[1]
var soft = document.getElementsByClassName('left')[0]
var boy = document.getElementsByClassName('right')[0]

window.onload = function () {
  document.addEventListener('click', clickEffect)
  document.getElementsByClassName('line')[0].style.transition = 'ease 5s'
  document.getElementsByClassName('line')[0].style.marginLeft = '0%'
  soft.style.transition = 'ease 5s'
  soft.style.paddingRight = '1%'
  boy.style.transition = 'ease 5s'
  boy.style.left = '1%'
  document.getElementsByClassName('line-left')[0].style.transition = 'ease 5s'
  document.getElementsByClassName('line-left')[0].style.marginRight = '0%'
  leftImg.style.transition = 'ease 5s'
  rightImg.style.transition = 'ease 5s'
  leftImg.style.marginLeft = '0%'
  rightImg.style.marginRight = '200%'
  setTimeout(function () {
    document.getElementsByClassName('click')[0].style.transition = ' ease 1s'
    document.getElementsByClassName('ck')[0].style.transition = 'ease 1s'
    document.getElementsByClassName('click')[0].style.opacity = '1'
    document.getElementsByClassName('ck')[0].style.opacity = '1'
    document.addEventListener('click', playMusic)
  }, 4000)
}

function playMusic () {
  var windowSize = window.matchMedia('(max-width: 490px)')
  console.log(windowSize)
  audio()
  document.removeEventListener('click', playMusic)
  document.getElementsByClassName('click')[0].style.opacity = '0'
  document.getElementsByClassName('ck')[0].style.opacity = '0'
  setInterval(function () {
    if (windowSize.matches) {
      boy.style.transition = 'ease 1s'
      boy.style.marginTop = '-10%'
    } else {
      boy.style.marginTop = '0%'
    }
  }, 100)
  holder[0].style.left = '80%'
  setTimeout(function () {
    holder[0].style.left = '100%'
  }, 2000)
  song.innerHTML = 'Song Title: Bossa No Se'
  artist.innerHTML = 'By: Cuco'
  if (songPlayer.src === 'https://donyaesolo.github.io/softboy/audio/Bossa%20No%20Se.mp3') {
    setInterval(function () {
      if (songPlayer.currentTime >= 14.5) {
        leftCol.style.background = 'white'
        rightCol.style.background = '#EBFAFF'
        leftLine.style.borderColor = '#EBFAFF'
        rightLine.style.borderColor = 'white'
        soft.style.color = '#EBFAFF'
        soft.style.transition = '0s'
        boy.style.transition = '0s'
        boy.style.color = 'white'
        leftImg.src = 'images/soft3.png'
        rightImg.src = 'images/soft4.jpg'
      } if (songPlayer.currentTime >= 43) {
        soft.classList.add('bossaText')
        leftLine.classList.add('bossaLine')
        rightCol.classList.add('bossa')
      }
    }, 50)
  }
}

var currentSong = 0

function audio () {
  $('#audio')[0].src = $('#playlist li a')[0]
  $('#audio')[0].play()
  $('#playlist li a').click(function (e) {
     e.preventDefault()
     $('#audio')[0].src = this
     $('#audio')[0].play()
     $('#playlist li').removeClass('current-song')
      currentSong = $(this).parent().index()
      $(this).parent().addClass('current-song')
  })

  $('#audio')[0].addEventListener('ended', function () {
      check()
     currentSong++
      if (currentSong == $('#playlist li a').length)
          currentSong = 0
      $('#playlist li').removeClass('current-song')
      $("#playlist li:eq("+currentSong+")").addClass('current-song')
      $('#audio')[0].src = $('#playlist li a')[currentSong].href
      $('#audio')[0].play()
  })
  console.log(songPlayer.src)
}
function check () {
  if (currentSong === 0) {
    soft.classList.remove('bossaText')
    leftLine.classList.remove('bossaLine')
    rightCol.classList.remove('bossa')
    song.innerHTML = 'Song Title: Cliche'
    artist.innerHTML = 'By: mxmtoon'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
    setInterval(function () {
      if (songPlayer.currentTime >= 10) {
        console.log(songPlayer.currentTime)
        leftCol.style.background = '#EBF0FF'
        rightCol.style.background = 'white'
        leftLine.style.borderColor = 'white'
        rightLine.style.borderColor = '#EBF0FF'
        soft.style.color = 'white'
        soft.style.transition = '0s'
        boy.style.transition = '0s'
        boy.style.color = '#EBF0FF'
        leftImg.src = 'images/soft5.jpg'
        rightImg.src = 'images/soft6.jpg'
      }
    }, 50)
  } else if (currentSong === 1) {
    song.innerHTML = 'Song Title: Boys Will Be Bugs'
    artist.innerHTML = 'By: cavetown'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 2) {
    song.innerHTML = 'Song Title: Chinese New Year'
    artist.innerHTML = 'By: SALES'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 3) {
    song.innerHTML = 'Song Title: Bubble Gum'
    artist.innerHTML = 'By: Chairo'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 4) {
    song.innerHTML = 'Song Title: Falling For U'
    artist.innerHTML = 'By: Peachy!'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 5) {
    song.innerHTML = 'Song Title: I Don' + "'" + 't Know My Name'
    artist.innerHTML = 'By: Grace VanderWaal'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 6) {
    song.innerHTML = 'Song Title: We Fell In Love In October'
    artist.innerHTML = 'By: girl in red'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 7) {
    song.innerHTML = 'Song Title: Ultimently'
    artist.innerHTML = 'By: Khai Dreams'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 8) {
    song.innerHTML = 'Song Title: Walk But In A Garden'
    artist.innerHTML = 'By: Llusion'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 9) {
    song.innerHTML = 'Song Title: Water Fountain'
    artist.innerHTML = 'By: Alec Benjamin'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 10) {
    song.innerHTML = 'Song Title: Bossa No Se'
    artist.innerHTML = 'By: Cuco'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
    setTimeout(function () {
      leftCol.style.background = 'white'
      rightCol.style.background = '#EBFAFF'
      leftLine.style.borderColor = '#EBFAFF'
      rightLine.style.borderColor = 'white'
      soft.style.color = '#EBFAFF'
      soft.style.transition = '0s'
      boy.style.transition = '0s'
      boy.style.color = 'white'
      leftImg.src = 'images/soft3.png'
      rightImg.src = 'images/soft4.jpg'
    }, 15100)
    setTimeout(function () {
      soft.classList.add('bossaText')
      leftLine.classList.add('bossaLine')
      rightCol.classList.add('bossa')
    }, 43000)
  }
}

function clickEffect (e) {
  var d = document.createElement('div')
  d.className = 'clickEffect'
  d.style.top = e.clientY + 'px'
  d.style.left = e.clientX + 'px'
  document.body.appendChild(d)
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d) })
}
