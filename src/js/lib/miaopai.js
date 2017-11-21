export default function() {
  const url = document.querySelector('.video-player .video').getAttribute('src')
  const newNode = document.createElement('div')
  newNode.innerHTML = `<a href="${url}" class="vdownloader-btn miaopai-btn" download>下载视频</a>`
  document.querySelector('.MIAOPAI_player').appendChild(newNode)
}
