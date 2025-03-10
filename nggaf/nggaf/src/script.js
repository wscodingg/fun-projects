let button = document.getElementById('btn');
let video = document.getElementById('vdo');
let paragraph = document.querySelector('p')
let meme = document.getElementById('getSomeHelp')
let count = 0;

button.addEventListener('click', function(){
    console.log('inside fucntion')
    if(count == 0){
        video.style.display = "flex";
        video.setAttribute('autoplay', 'true');
        video.play();
    }
    count++;
    console.log(count);

    if(count == 6){
        meme.style.display = "block"
        paragraph.style.display = "block";
    }
});

video.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
