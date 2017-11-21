import '../css/content.css'
import krcom from './lib/krcom'
import miaopai from './lib/miaopai'
import weibo from './lib/weibo'
import ixigua from './lib/ixigua'
import meipai from './lib/meipai'
import {
  isKrcom, isWeiboTv, isXigua, isMiaoPai, isMeipai
} from './lib/is'

window.onload = function() {
  const url = window.location.href

  if (isKrcom(url)) {
    krcom()
  }

  if (isWeiboTv(url)) {
    weibo()
  }

  if (isXigua(url)) {
    ixigua()
  }

  if (isMiaoPai(url)) {
    miaopai()
  }

  if (isMeipai(url)) {
    meipai()
  }
}
