const audioInfo = {
  audioItem:{
    id: 1,
    stream: [
      {
        url: "https://www.jonmpan.com/ambience/pokemon-route-228.mp3",
        format: "mp3"
      }
    ],
    title: "Pokemon Route 228 LoFi Remix",
    subtitle: "Relax and Enjoy",
    artist: "LoPoBunny",
    albumName: "Pokemon DPPT Remixes",
    albumArtUrl: "/images/quizit-logo-white-min.jpg"
  },
  category: 'SINGLE',
  repeatMode: 'ONE',
  displayName: 'Pokemon Route 228 LoFi Remix',
  doNotWaitForTTS: true
}

module.exports.function = function buildAudioInfo () {
  return audioInfo
}
