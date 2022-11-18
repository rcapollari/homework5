// Add js here.
var video = document.getElementById("videoplayer")
video.load();
video.autoplay = false;
video.loop = false;

document.getElementById("play").addEventListener("click", playVid)
document.getElementById("pause").addEventListener("click", pauseVid)
document.getElementById("slower").addEventListener("click", slowDown)
document.getElementById("faster").addEventListener("click", speedUp)
document.getElementById("skip").addEventListener("click", skipForward)
document.getElementById("mute").addEventListener("click", muteVid)
document.getElementById("slider").addEventListener("change", volume)
document.getElementById("volume").innerText = document.getElementById("slider").value

function playVid() {
    video.play();
}
function pauseVid() {
    video.pause();
}
function slowDown() {
    video.playbackRate -= 0.5;
    if (video.playbackRate == 0.5) {
        alert("Video is at slowest speed!")
    }
}
function speedUp() {
    video.playbackRate += 0.5
    if (video.playbackRate == 2) {
        alert("Video is at fastest speed!")
    }
}
function skipForward() {
    video.currentTime += 15
    if (video.ended == true) {
        video.currentTime = 0
    }
}
function muteVid() {
    if (video.muted == false) {
        video.muted = true; 
        document.getElementById("volume").innerText = 0
        document.getElementById("mute").innerText = "Unmute"
    }
    else {
        video.muted = false;
        document.getElementById("mute").innerText = "Mute"
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
}
function volume() {
    if (document.getElementById("slider").value == 100) {
        video.volume = 1
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 90) {
        video.volume = 0.9
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 80) {
        video.volume = 0.8
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 70) {
        video.volume = 0.7
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 60) {
        video.volume = 0.6
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 50) {
        video.volume = 0.5
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 40) {
        video.volume = 0.4
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 30) {
        video.volume = 0.3
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 20) {
        video.volume = 0.2
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 10) {
        video.volume = 0.1
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
    else if (document.getElementById("slider").value == 0) {
        video.volume = 0
        document.getElementById("volume").innerText = document.getElementById("slider").value
    }
}