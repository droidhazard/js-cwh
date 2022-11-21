let jokes = [
  "Why did an old man fall in a well? Because he couldn’t see that well!",
  "Why did the actor fall through the floorboards? They were going through a stage!",
  "Why did a scarecrow win a Nobel prize? He was outstanding in his field!",
  "Why are peppers the best at archery? Because they habanero!",
  "What did the duck say after she bought chapstick? Put it on my bill!",
  "What do you call a fake noodle An impasta!",
  "What did the three-legged dog say when he walked into a saloon? “I’m looking for the man who shot my paw!”",
  "What did the three-legged dog say when he walked into a saloon? “I’m looking for the man who shot my paw!”",
  "What’s red and smells like blue paint? Red paint!",
  "What’s the difference between a hippo and a Zippo? One is very heavy, the other is a little lighter!"]

document.getElementById('generate').onclick = () => {
  jokeIndex = Math.floor(Math.random() * (jokes.length-1))
  console.log(jokeIndex)
  document.getElementById('joke-text').innerText = jokes[jokeIndex]
}