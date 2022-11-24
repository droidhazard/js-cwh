let first = document.getElementById('first')
first.className = 'text-dark red'
first.classList.remove('red')
console.log(first.classList)
first.classList.add('gray')

document.getElementById('tgl').onclick = () => {
  first.classList.remove('gray')
  first.classList.toggle('red')
  console.log(first.classList.contains('red'))
}

first.classList.contains('gray')

