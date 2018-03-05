function r() {
  return new Promise((resolve, reject) => {
    console.log(0)
    resolve(1)
  })
}

b = function () {
  return r().then(a=>{
    console.log(1)
    return new Promise((resolve, reject) => {
      resolve(2)
    })
  })
  // .then(a=>{
  //   console.log(a)
  // })
}

Promise.all([b()]).then(() => {
  console.log(3)
}).catch(err => {
  console.log(err)
})
