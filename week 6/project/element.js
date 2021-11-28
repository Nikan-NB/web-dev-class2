const root = document.getElementById('root')

const div1 = document.createElement('div')

const blockquote = document.createElement('blockquote')

blockquote.innerHTML = 'Wisely, and slow. They stumble that run fast'

blockquote.id = 'quote'

const h2 = document.createElement('h2')

h2.innerHTML = 'William Shakespeare'

h2.id = 'author'

div1.appendChild(blockquote)
div1.appendChild(h2)
root.appendChild(div1)

const div2 = document.createElement('div')

div2.classList = 'buttons'

const button = document.createElement('button')

button.innerHTML = 'New Quote'

button.id = 'button'

div2.appendChild(button)

root.appendChild(div2)