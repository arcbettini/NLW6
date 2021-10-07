const nav = document.querySelector('#header1 nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//NOTA: O toggle em "nav.classlist.toggle" (função do JS) é diferente do "const toggle" (variável);
