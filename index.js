"use strict";

//!!A script for birds and switching stuff 

//! Switch background image

const imageForest = document.querySelector('.main-container');
console.log ("variable logging!");
console.log ( imageForest );

//?0
const buttonBird = document.querySelector('.logo-link');
console.log ( buttonBird );
buttonBird.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/forest.jpg')";
});

//?1
const buttonNightingale = document.querySelector('.nightingale-link');
console.log ( buttonNightingale );
buttonNightingale.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/solovey.jpg')";
});

//?2
const buttonThrush = document.querySelector('.thrush-link');
console.log ( buttonThrush );
buttonThrush.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/drozd.jpg')";
});

//?3 (robin)
const buttonCrimson = document.querySelector('.crimson-link');
console.log ( buttonCrimson );
buttonCrimson.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/zarynka.jpg')";
});

//?4 (lark)
const buttonLark = document.querySelector('.lark-link');
console.log ( buttonLark );
buttonLark.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/javoronok.jpg')";
});

//?5 (warbler)
const buttonSlavka = document.querySelector('.slavka-link');
console.log ( buttonSlavka );
buttonSlavka.addEventListener('click', () => {
	imageForest.style.backgroundImage = "url('assets/img/slavka.jpg')";
});

//! Add sound birds

const buttonPlay = document.querySelector('.player-button');
console.log ( buttonPlay );
const Birds = document.querySelector('.button-list').querySelectorAll('a');
console.log ( Birds );
const audio = new Audio();

buttonPlay.addEventListener('click', () => {
	buttonPlay.classList.toggle('pause-button')
    if(buttonPlay.classList.contains('pause-button')) {
        let isPlay = false

        Birds.forEach((bird) => {
            if(bird.classList.contains('active')) {
                audio.play();
                    isPlay = true;
            }
        })

        if(!isPlay) {
					audio.src = 'assets/audio/forest.mp3';
                audio.play();
		}

    } else {
        audio.pause();
    }
});

Birds.forEach((bird) => {
    bird.addEventListener('click', () => {
    if(!bird.classList.contains('active')) {

        Birds.forEach((b1) => {
            b1.classList.remove('active');
        })

        buttonBird.classList.remove('active');
    }
    })
});

//! Switch sound
//!0
buttonBird.addEventListener('click', () => {
	buttonBird.classList.add('active');
	audio.src = 'assets/audio/forest.mp3';

	audio.currentTime = 0;
	audio.play();
	buttonPlay.classList.add('pause-button');
});

//!1
buttonNightingale.addEventListener('click', () => {
	buttonNightingale.classList.add('active');
    audio.src = 'assets/audio/assets_audio_solovey.mp3';

    audio.currentTime = 0;
    audio.play();
    buttonPlay.classList.add('pause-button');
});

//!2
buttonThrush.addEventListener('click', () => {
	buttonThrush.classList.add('active');
    audio.src = 'assets/audio/drozd.mp3';

    audio.currentTime = 0;
    audio.play();
    buttonPlay.classList.add('pause-button');
});

//!3
buttonCrimson.addEventListener('click', () => {
	buttonCrimson.classList.add('active');
    audio.src = 'assets/audio/assets_audio_zarynka.mp3';

    audio.currentTime = 0;
    audio.play();
    buttonPlay.classList.add('pause-button');
});

//!4
buttonLark.addEventListener('click', () => {
	buttonLark.classList.add('active');
    audio.src = 'assets/audio/javoronok.mp3';

    audio.currentTime = 0;
    audio.play();
    buttonPlay.classList.add('pause-button');
});

//!5
buttonSlavka.addEventListener('click', () => {
	buttonSlavka.classList.add('active');
    audio.src = 'assets/audio/slavka.mp3';

    audio.currentTime = 0;
    audio.play();
    buttonPlay.classList.add('pause-button');
}); 

//!Text output to the console with self-check and scores

let scoreOfTaskPoints;

scoreOfTaskPoints = `????????????????????????!
???????????????? ?????????????????? ????????????????????????:
60 ????????????

	1:?????????????? 10/10
	
	???????? ???? ???????????? ???????? ?????????????????????????? ??????????????????, ?? ???????????????? ???????????????????????? ?????????? ??????????????????????????????????. ?????????????????? ???????????????? ???????? ???????????? ???????????????? ?? ?????????????????? ?????????????? ?????? ??????????????????, ?????????????? ???????????????? 5/5
	
	?? ???????????? ???????????????????? ???????? ???????????? ???? ???????????? ???????????? ????????????????????, ?????? ???????????????? ????????????????????, ?????????????? ?????????? ???? ?????????????? ???? ???????? 5/5
	
	2:?????? ???????????? ???? ?????????????????????????? ?????????????????? ???????????????? ?????????????????????? 10/10
	
	3:?????? ???????????? ???? ?????????????????????????? ?????????????????? ???????????????? ???????? 10/10
	
	4:???????????????? ?? ???????????? ???????????? ?????????????????????????? ?????????????? ???????????????????? ???????????? 10/10
	
	5:???????????? Play/Pause 20/20
	
	???????? ???????????? Play/Pause, ?????? ?????????? ???? ?????????????? ?????????? ?????????????????? ?????? ???????????????????? ???????????????????????? ?????????? 10/10
	
	?????????????? ?????? ?? ???????????????????? ???????????? Play/Pause ???????????????????? ?? ?????????????????????? ???? ????????, ?????????????????????????? ???? ?? ???????????? ???????????? ???????? 10/10
	
	6:?????????? ?????????????? ???????????????? ???????????????????? ???????????????????? ??/?????? ???????????????????????????? ???? ?????????????????????????????? ?? ?????????????? ????????????????????, ???????????????????? ???????????????? ???????????????????? 0/10
	\(?????????????? ???????????????? ???????????????????? ???????????????????? ???????????????????????? ?????????????????????? ???????????????????????? ???????????????????? ???????????? ?????? ???????????????????????? ?? ???????????? ?????????????? ???? ?????????????????? ?? ????????\)

?? ??????????: 10 + 10 +10 + 10 + 20 + 0 = 60 ????????????
???????????????????????? ???????????? ???? ?????????????? 60 ????????????

?????????????????? ?????? ???? ????????????! ?????????????? ?????? :\)!
`;

console.log ( scoreOfTaskPoints );
