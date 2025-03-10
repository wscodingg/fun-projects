const yesDiv = document.querySelector('.yes')
const noDiv = document.querySelector('.no')
const questionDiv = document.querySelector('.question')
const yesBtn = document.getElementById('yesBtn')
const yesVdo = document.getElementById('yesVdo')
const noBtn = document.getElementById('noBtn') 
const noVdo = document.getElementById('noVdo')


yesBtn.addEventListener('click', function() {
    questionDiv.classList.toggle('hidden')
    console.log("niggger")
    yesDiv.classList.remove('hidden')
    yesVdo.autoplay = true;
    yesVdo.loop = true;
    yesVdo.load()
    yesVdo.play()
})

noBtn.addEventListener('click', function() {
    questionDiv.classList.toggle('hidden')
    console.log("niggger")
    noDiv.classList.remove('hidden')
    noVdo.autoplay = true;
    noVdo.loop = true;
    noVdo.load()
    noVdo.play()
})
