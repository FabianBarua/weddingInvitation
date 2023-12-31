export function play(audioSrc, volumeLevel) {
  const newAudio = document.createElement('audio');
  newAudio.src = audioSrc;
  newAudio.preload = 'auto';

  // Ajustar el volumen (de 0 a 1)
  if (volumeLevel >= 0 && volumeLevel <= 1) {
    newAudio.volume = volumeLevel;
  } else {
    console.error('El nivel de volumen debe estar entre 0 y 1');
    return;
  }

  document.addEventListener('click', () => {
    newAudio.play();
  }, { once: true });
}