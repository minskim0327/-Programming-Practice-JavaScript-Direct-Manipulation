const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(arr){
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

const storyTemplate = 'It was 94 fahrenheit outside, so :name: went for a walk. When they got to :dest:, they stared in horror for a few moments, then :action:. Bob saw the whole thing, but was not surprised — :name: weighs 300 pounds, and it was a hot day.';
const names = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const dests = ['the soup kitchen', 'Disneyland', 'the White House'];
const actions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', generateRandomStory);

function generateRandomStory() {
  let newStory = storyTemplate

  const name = randomValueFromArray(names)
  const dest = randomValueFromArray(dests)
  const action = randomValueFromArray(actions)

  newStory = newStory.replaceAll(':name:', name)
  newStory = newStory.replaceAll(':dest:', dest)
  newStory = newStory.replaceAll(':action:', action)

  if (customName.value !== '') {
    const name = customName.value
    newStory = newStory.replaceAll('Bob', name)
  }

  if (document.getElementById("uk").checked) {
    const usWeight = 300
    const usTemp = 94
    const weight = `${Math.round(usWeight * 0.0714286)} stone`
    const temperature =  `${Math.round((usTemp - 32) * 5 / 9)} centigrade`
    newStory = newStory.replaceAll('94 fahrenheit', temperature)
    newStory = newStory.replaceAll('300 pounds', weight)
  }

  story.textContent = newStory
  story.style.visibility = 'visible'
}
