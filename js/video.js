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
    video.muted = true;
}