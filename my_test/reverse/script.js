let word = document.getElementById('word');

function show(){
    const word1 = word.value
    document.querySelector('#typed_word').innerHTML = word1.toUpperCase()
    document.getElementById('result').innerHTML = `<h3> ${word1.toString().split('').reverse().join('')} </h3>`
}

document.querySelector('#word').addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        show()
    }
})