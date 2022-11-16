// Add js here.
var video = document.getElementById("videoplayer")
video.load();
video.autoplay = false;
video.loop = false;

function playVid() {
    video.play();
}
function pauseVid() {
    video.pause();
}