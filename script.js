var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var prevButton = document.getElementById("prev-button");
var playlistContainer = document.getElementById("playlist");

var playlist = [];
for (var i = 1; i <= 12; i++) {
    playlist.push(`images/qureen-${i}.m4a`);
}

var currentTrackIndex = 0;

function togglePlayPause() {
    if (mySong.paused) {
        mySong.play();
        icon.src = "images/pause.png";
    } else {
        mySong.pause();
        icon.src = "images/play.png";
    }
}

function playPrevious() {
    currentTrackIndex = (currentTrackIndex + 1 + playlist.length) % playlist.length;
    mySong.src = playlist[currentTrackIndex];
    mySong.play();
}

icon.onclick = togglePlayPause;
prevButton.onclick = playPrevious;

mySong.src = playlist[currentTrackIndex];

playlist.forEach(function (song, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<span>${index + 1}.</span> ${song}`;
    playlistContainer.appendChild(listItem);
});