export default function() {
  const url = document.getElementById('vjs_video_3_html5_api').getAttribute('src')
  const str = `<a href="${url}" class="vdownloader-btn ixigua-btn" download>下载视频</a>`
  document.querySelector('.abstract .title').insertAdjacentHTML('beforebegin', str)
}
