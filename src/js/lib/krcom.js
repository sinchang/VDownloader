import qs from 'qs'

export default function () {
  const sources = qs.parse(document.querySelector('#pl_show_playbox .V_video_box').getAttribute('video-sources'))
  const newNode = document.createElement('div')
  const referenceNode = document.querySelector('#pl_show_videoinfo .info')
  let str = ''

  for (let i in (sources)) {
    if (i === 'select') { continue }
    str += `<a href="${sources[i]}" class="krcom-btn vdownloader-btn" download>${i}</a>`
  }

  newNode.innerHTML = str

  referenceNode.parentNode.insertBefore(newNode, referenceNode)
}
