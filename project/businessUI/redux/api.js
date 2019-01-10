const Api = function*() {
  yield setTimeout(() => {
    console.log('1s-------------------1s')
  }, 1000);
}

export function fetchUser() {
  
}

export default Api