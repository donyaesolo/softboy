var song = document.getElementById('songTitle')
var artist = document.getElementById('artist')
var holder = document.getElementsByClassName('popup')
var songPlayer = document.getElementById('audio')
var leftImgHolder = document.getElementsByClassName('img')[0]
var rightImgHolder = document.getElementsByClassName('img')[1]
var leftCol = document.getElementsByClassName('large-col')[0]
var rightCol = document.getElementsByClassName('large-col')[1]
var leftLine = document.getElementsByClassName('right-line')[0]
var rightLine = document.getElementsByClassName('left-line')[0]
var leftImg = document.getElementsByClassName('contain-img')[0]
var rightImg = document.getElementsByClassName('contain-img')[1]
var soft = document.getElementsByClassName('left')[0]
var boy = document.getElementsByClassName('right')[0]
var cli = document.getElementsByClassName('click')[0]
var ck = document.getElementsByClassName('ck')[0]
var menu = document.getElementsByClassName('menu')[0]

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
    cli.style.transition = ' ease 1s'
    ck.style.transition = 'ease 1s'
    cli.style.opacity = '1'
    ck.style.opacity = '1'
    menu.style.transition = 'ease 1s'
    menu.style.opacity = '1'
    document.addEventListener('click', playMusic)
  }, 4000)
}
function playMusic () {
  var windowSize = window.matchMedia('(max-width: 490px)')
  console.log(windowSize)
  audio()
  document.removeEventListener('click', playMusic)
  cli.style.opacity = '0'
  ck.style.opacity = '0'
  setInterval(function () {
    if (windowSize.matches) {
      boy.style.transition = 'ease 1s'
      boy.style.marginTop = '-15%'
      leftImgHolder.style.transition = 'ease 1s'
      leftImgHolder.style.height = '50%'
      rightImgHolder.style.marginTop = '-20%'
      rightImgHolder.style.transition = 'ease 1s'
      rightImgHolder.style.height = '50%'
    } else {
      leftImgHolder.style.transition = 'ease 1s'
      leftImgHolder.style.height = '50%'
      rightImgHolder.style.marginTop = '-20%'
      rightImgHolder.style.transition = 'ease 1s'
      rightImgHolder.style.height = '50%'
      boy.style.marginTop = '0%'
      rightImgHolder.style.marginTop = '0%'
    }
  }, 100)
  holder[0].style.left = '80%'
  setTimeout(function () {
    holder[0].style.left = '100%'
  }, 2000)
  song.innerHTML = 'Song Title: Bossa No Se'
  artist.innerHTML = 'By: Cuco'
}
var currentSong = 0
function audio () {
  $('#audio')[0].src = $('#playlist li a')[0]
  $('#audio')[0].play()
  $('#playlist li a').click(function (e) {
     check()
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
      if (currentSong === $('#playlist li a').length)
          currentSong = 0
      $('#playlist li').removeClass('current-song')
      $('#playlist li:eq(' + currentSong + ')').addClass('current-song')
      $('#audio')[0].src = $('#playlist li a')[currentSong].href
      $('#audio')[0].play()
  })
  if (currentSong === 0) {
    bossa = setInterval(function () {
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
  } else {
  }
}
var bossa
function cliche () {
  currentSong = 0
}
function boys () {
  currentSong = 1
}
function chinese () {
  currentSong = 2
}
function bubble () {
  currentSong = 3
}
function falling () {
  currentSong = 4
}
function dontKnow () {
  currentSong = 5
}
function october () {
  currentSong = 6
}
function ultimently () {
  currentSong = 7
}
function garden () {
  currentSong = 8
}
function fountain () {
  currentSong = 9
}
function bossaNo () {
  currentSong = 10
}
function check () {
  console.log(songPlayer.src)
  if (currentSong === 0) {
    clearInterval(bossa)
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
      } if (songPlayer.currentTime >= 32) {
        boy.classList.add('clicheText')
        leftCol.classList.add('cliche')
        rightLine.classList.add('clicheLine')
      }
    }, 50)
  } else if (currentSong === 1) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Boys Will Be Bugs'
    artist.innerHTML = 'By: cavetown'
    holder[0].style.left = '75%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 2) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Chinese New Year'
    artist.innerHTML = 'By: SALES'
    holder[0].style.left = '75%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 3) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Bubble Gum'
    artist.innerHTML = 'By: Chairo'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 4) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Falling For U'
    artist.innerHTML = 'By: Peachy!'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 5) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: I Don' + "'" + 't Know My Name'
    artist.innerHTML = 'By: Grace VanderWaal'
    holder[0].style.left = '75%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 6) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: We Fell In Love In October'
    artist.style.marginTop = '-2%'
    artist.innerHTML = 'By: girl in red'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 7) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Ultimently'
    artist.innerHTML = 'By: Khai Dreams'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 8) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Walk But In A Garden'
    artist.innerHTML = 'By: Llusion'
    holder[0].style.left = '75%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 9) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Water Fountain'
    artist.innerHTML = 'By: Alec Benjamin'
    holder[0].style.left = '78%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
  } else if (currentSong === 10) {
    clearInterval(bossa)
    song.innerHTML = 'Song Title: Bossa No Se'
    artist.innerHTML = 'By: Cuco'
    holder[0].style.left = '80%'
    setTimeout(function () {
      holder[0].style.left = '100%'
    }, 2000)
    if (songPlayer.currentTime >= 15.1) {
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
  }
}
function playlistMenu () {
  var windowSize = window.matchMedia('(max-width: 490px)')
  var iphone8 = window.matchMedia('(max-height: 740px)')
  var menu = document.getElementsByClassName('menu')[0]
  var popup = document.getElementsByClassName('playlist')[0]
  if (windowSize.matches) {
    if (iphone8.matches) {
      console.log('aa')
      menu.style.marginTop = '80%'
      popup.style.transition = 'ease 1s'
      popup.style.bottom = '55%'
      menu.removeEventListener('click', playlistMenu)
      menu.addEventListener('click', hidePlaylistMenu)
    } else {
      menu.style.marginTop = '85%'
      popup.style.transition = 'ease 1s'
      popup.style.bottom = '60%'
      menu.removeEventListener('click', playlistMenu)
      menu.addEventListener('click', hidePlaylistMenu)
    }
  } else {
    menu.style.marginLeft = '25%'
    popup.style.transition = 'ease 1s'
    popup.style.right = '75%'
    menu.removeEventListener('click', playlistMenu)
    menu.addEventListener('click', hidePlaylistMenu)
  }
}
function hidePlaylistMenu () {
  var windowSize = window.matchMedia('(max-width: 490px)')
  var menu = document.getElementsByClassName('menu')[0]
  var popup = document.getElementsByClassName('playlist')[0]
  if (windowSize.matches) {
    menu.style.marginTop = '0%'
    popup.style.transition = 'ease 1s'
    popup.style.bottom = '100%'
    menu.addEventListener('click', playlistMenu)
    menu.removeEventListener('click', hidePlaylistMenu)
  } else {
    menu.style.marginLeft = '0%'
    popup.style.transition = 'ease 1s'
    popup.style.right = '100%'
    menu.addEventListener('click', playlistMenu)
    menu.removeEventListener('click', hidePlaylistMenu)
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
