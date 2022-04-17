const animalInput = document.getElementById('animal')
const adjectiveInput = document.getElementById('adjective')
const verbInput = document.getElementById('verb')
const madlibParagraph = document.getElementById('madlib')

const updateMadlib = function () {
  const animal = animalInput.value
  const adjective = adjectiveInput.value
  const verb = verbInput.value

  madlibParagraph.innerHTML =
    'There once were three ' +
    '<strong>' + animal + '</strong> ' +
    'that were very ' +
    '<strong>' + adjective + '</strong> ' +
    'because they couldn\'t stop ' +
    '<strong>' + verb + '</strong> ' +
    'all day.'
}

animalInput.addEventListener('input', updateMadlib)
adjectiveInput.addEventListener('input', updateMadlib)
verbInput.addEventListener('input', updateMadlib)
