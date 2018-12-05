# 跨域方案测试

1. jsonp
- 原理：同源策略规定embed资源不受同源限制
前端定义函数，script获取的后端脚本负责执行并传入参数
- 问题：
只适用于get请求，因此传参长度会受浏览器url长度限制
- 兼容性


2. cors  
官方介绍：https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS  
在支持cors的浏览器上会在发送实际请求之前，预先发送OPTIONS方法请求获取授权，服务端授权成功后在发送实际请求，服务端也可提醒客户端请求中携带"credentials"(cookies orAuthentication)  

为保证安全，CORS失败的具体原因不允许使用js code获取  
唯一可以确定具体原因的方式是通过浏览器console来看错误细节  

- CORS preflight：只有非简单请求才会存在该行为  
  preflight请求为OPTIONS方法(仅用于查询资源信息而不做修改)，带有部分头信息提示server实际请求中会带有哪些http头，server端通过这些信息判断是否允许发送实际请求  
3. 注意  
preflight与实际请求中的头信息需要严格区别