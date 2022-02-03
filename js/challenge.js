let h1 = document.querySelector('#counter')
let pause = document.querySelector('#pause')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let like = document.querySelector('#heart')
let submit = document.querySelector('#comment-form')
let comments = document.querySelector('#list')
let likes = document.querySelector('.likes')
let counter = 0
let numbers = []

function increment(){
  counter++
  h1.innerHTML = counter
  
}

let timer = setInterval(increment, 1000);

like.addEventListener('click', () => {

  let findingNumber = numbers.find( elem => elem.number === counter)
  if (findingNumber === undefined){
    let obj = {
      instances: 1,
      number: counter
    }
    let li = document.createElement('li')
    li.setAttribute('id',`${obj.number}`)
    li.innerHTML = `${obj.number} has been liked ${obj.instances} time`
    likes.appendChild(li)
    numbers.unshift(obj)

  }else{
    findingNumber.instances++
    let aux = findingNumber.number
    let li = document.getElementById(aux)
    li.innerHTML = `${findingNumber.number} has been liked ${findingNumber.instances} times`
  }
  
})

pause.addEventListener('click', handlePause)

minus.addEventListener('click', () => {
  counter--
  h1.innerHTML = counter
})

plus.addEventListener('click', () => {
  counter++
  h1.innerHTML = counter
})

submit.addEventListener('submit', event => {
  event.preventDefault()
  let p = document.createElement('p')
  p.innerHTML = event.target.comment_input.value
  comments.appendChild(p)
  submit.reset()

})

function handlePause(event){
  let button = event.target

  if ( button.innerHTML === ' pause '){
    clearInterval(timer)
    button.innerHTML = ' resume '
    minus.disabled = true
    plus.disabled = true
    like.disabled = true
    submit.submit.disabled = true
  }else{
    timer = setInterval(increment, 1000)
    button.innerHTML = ' pause '
    minus.disabled = false
    plus.disabled = false
    like.disabled = false
    submit.submit.disabled = false
  }
  
}