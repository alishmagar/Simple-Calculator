let string = '';
let input = document.querySelector('input')
Array.from(document.getElementsByClassName('button')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            try {
                string = eval(string)  // The eval function will convert the string to a number and perform the calculation
                input.value = string
            } catch (error) {
                input.value = 'Unexpected input!'
            }
        }
        else if(e.target.innerText == 'AC'){
            input.value = ""
            string = ""
        }
        else if(e.target.id == 'name'){
            string = string.slice(0,-1)
            input.value = string
        }
        else{
            string = string + e.target.innerText
            input.value = string
        }
    })
})
