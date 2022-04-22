const count = document.getElementById('count')

incrementVisitsCount()

function incrementVisitsCount () {
  let visits

  if (!window.localStorage.getItem('visits')) window.localStorage.setItem('visits', 1)
  else {
    visits = +window.localStorage.getItem('visits')
    const incrementedCount = visits + 1

    window.localStorage.setItem('visits', incrementedCount)
  }

  count.innerText = window.localStorage.getItem('visits')
}
