const xhr = new XMLHttpRequest()

function ajax({
  url, 
  data = null, 
  method = 'GET',
  header = {},
  cb
}) {

  // get请求参数拼接在url后
  if (method === 'GET' && data) {
    url = url + o2s(data)
  }

  xhr.open(method, url, true)
  xhr.withCredentials = true
  // 循环添加头部
  const keys = Object.keys(header)
  for (let i = 0; i < keys.length; i++) {
    xhr.setRequestHeader(keys[i], header[keys[i]])
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      cb(xhr)
    }
  }
  xhr.send(data)
}

function o2s(obj) {
  if (!obj || typeof obj !== 'object') return ''
  const keys = Object.keys(obj)
  let querystring = ''
  for (let i = 0; i < keys.length; i++) {
    querystring += `${keys[i]}=${encode(obj[keys[i]])}&&`
  }
  return querystring.slice(0, -2)
}