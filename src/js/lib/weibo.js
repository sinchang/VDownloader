import qs from 'qs'

export default function() {
  const data = document.getElementById('playerRoom').firstElementChild.getAttribute('action-data')
  const url = qs.parse(data).video_src
  const str = `<a href="${url}" class="vdownloader-btn weibo-btn" download>下载视频</a>`
  document.querySelector('.player_info').insertAdjacentHTML('beforebegin', str)
}
