const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    url: 'insurance.aac',
  })
  
  wavesurfer.on('interaction', () => {
    wavesurfer.play()
  })