// Récupérer les éléments
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const timeDisplay = document.getElementById('time-display');

// Lecture/Pause
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = '⏸'; // Icône Pause
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = '▶'; // Icône Lecture
    }
});

// Mise à jour de la barre de progression
audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Mise à jour du temps écoulé
    const minutes = Math.floor(audioPlayer.currentTime / 60);
    const seconds = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
});

// Avancer manuellement dans le son
progressContainer.addEventListener('click', (e) => {
    const clickX = e.offsetX;
    const width = progressContainer.clientWidth;
    const duration = audioPlayer.duration;

    audioPlayer.currentTime = (clickX / width) * duration;
});
