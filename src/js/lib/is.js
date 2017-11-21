export const isKrcom = url => {
  // http://krcom.cn/5884212886/episodes/2358773:dbb9b70d1e4ee12b86b7ffdd2936d783
  const regex = /^http\:\/\/krcom\.cn\/[\d]+\/episodes\/\d*\:[0-9a-z]+/g
  return regex.test(url)
}

export const isXigua = url => {
  // https://www.ixigua.com/a6485878982653772302
  const regex = /^https\:\/\/www\.ixigua\.com\/a\d+/g
  return regex.test(url)
}

export const isWeiboTv = url => {
  // https://weibo.com/tv/v/Fw5sQc9QE
  const regex = /^https\:\/\/weibo\.com\/tv\/v\/[A-Za-z0-9]+/g
  return regex.test(url)
}

export const isMiaoPai = url => {
  // http://www.miaopai.com/show/fEhYvm~vakOc22cw~n8rJg__.htm
  const regex = /^http\:\/\/www\.miaopai\.com\/show\//g
  return regex.test(url)
}

export const isMeipai = url => {
  // http://www.meipai.com/media/898370632
  const regex = /^http\:\/\/www\.meipai\.com\/media\/\d+/g
  return regex.test(url)
}
