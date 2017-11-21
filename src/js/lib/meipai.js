function getHex(param1) {
  return {
    'str': param1.substring(4),
    'hex': param1.substring(0, 4).split('').reverse().join('')
  }
}

function getDec(param1) {
  var loc2 = parseInt(param1, 16) + ''
  return {
    'head': loc2.substring(0, 2).split(''),
    'tail': loc2.substring(2).split('')
  }
}

function substr(param1, param2) {
  var loc3 = param1.substring(0, parseInt(param2[0]))
  var loc4 = param1.substring(parseInt(param2[0]), parseInt(param2[0]) + parseInt(param2[1]))
  return loc3 + param1.substring(parseInt(param2[0])).replace(loc4, '')
}

function getPos(param1, param2) {
  param2[0] = param1.length - parseInt(param2[0]) - parseInt(param2[1])
  return param2
}

export default function() {
  const videoDom = document.querySelector('meta[property="og:video:secure_url"]') || document.querySelector('meta[property="og:video:url"]')
  const tmp = videoDom.getAttribute('content')
  const dict2 = getHex(tmp)
  const dict3 = getDec(dict2['hex'])
  const str4 = substr(dict2['str'], dict3['head'])
  const url = atob(substr(str4, getPos(str4, dict3['tail'])))
  const html = `<a href="${url}" class="vdownloader-btn meipai-btn" download>下载视频</a>`
  document.querySelector('.detail-description').insertAdjacentHTML('beforebegin', html)
}
