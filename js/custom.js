function scrollTopOnLoad() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollTopOnLoad();

setTimeout(function () {
  new WOW({
    mobile: false
  }).init();

  document.querySelector('#page-preloader').classList.add('hidden');
  document.querySelector('body').classList.add('show');
}, 4000);

function burgerMenu() {
  const burgerOpen = document.querySelector(".toggle-menu-button");
  const header = document.querySelector(".header");

  let isOpened = false;

  if (burgerOpen && header) {
    burgerOpen.addEventListener("click", (e) => {
      if (isOpened === false) {
        header.classList.add("active");
        burgerOpen.classList.add("active")
        document.body.style.overflow = "hidden";

        isOpened = true;
      } else {
        header.classList.remove("active");
        burgerOpen.classList.remove("active")
        document.body.style.overflow = "auto";

        isOpened = false;
      }
    });
  }

  const links = document.querySelectorAll(".main-nav__link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("active");
      burgerOpen.classList.remove("active")
      document.body.style.overflow = "auto";

      isOpened = false;
    });
  });
}
burgerMenu();

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

$('body').on('click touchstart', function () {
  const videoElement = document.getElementById('page-preloader-video');
  if (videoElement.playing) {
    // video is already playing so do nothing
  }
  else {
    // video is not playing
    // so play video now
    videoElement.play();
  }
});

$('body').on('click touchstart', function () {
  const videoElement = document.getElementById('bgVideo');
  if (videoElement.playing) {

  } else {
    videoElement.play();
  }
});

const navLinks = document.querySelectorAll(".main-nav__item a")
var clickSound = document.getElementById("clickSound")
clickSound.volume = 0.5;
seamless.polyfill();
navLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play()
    e.preventDefault()
    seamless.scrollIntoView(document.querySelector(el.getAttribute("href")), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  })
})

function change_vol() {
  player.volume = document.getElementById("change_vol").value;
}

var audio = document.getElementById("bgAudio");
var audioBtn = document.getElementById("bgAudioToggle");
var playing = false;
var bgChangeVol = document.getElementById("bgChangeVol");
audio.volume = 0;
bgChangeVol.value = 0;

audioBtn.addEventListener('click', () => {
  if (playing === false) {
    audio.play()
    playing = true;
    audioBtn.innerHTML = '<img src="media/audio/volume.svg" alt="">';
    audio.volume = 0.2;
    bgChangeVol.value = 0.2;
  } else {
    audio.pause()
    playing = false;
    audioBtn.innerHTML = '<img src="media/audio/mute.svg" alt="">';
    bgChangeVol.value = 0;
    audio.volume = 0;
  }
})

bgChangeVol.addEventListener('input', () => {
  audio.volume = bgChangeVol.value;

  if (bgChangeVol.value > 0.1) {
    audio.play()
    playing = true;
    audioBtn.innerHTML = '<img src="media/audio/volume.svg" alt="">';
  } else {
    audio.pause()
    playing = false;
    audioBtn.innerHTML = '<img src="media/audio/mute.svg" alt="">';
  }
})

var player = false;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('game-video', {
    height: '560',
    width: '400',
    videoId: '2d5bIs15U3k',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    audio.pause()
    playing = false;
    audioBtn.innerHTML = '<img src="media/audio/mute.svg" alt="">';
  }
}