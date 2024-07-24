const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height : ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight : ${weight}`
    } else {
        const bmi = (weight / ((height*height/10000))).toFixed(2)
        let bmi_category;
        if(bmi < 18.6){
            bmi_category = 'Under weight'
        }else if( 18.6 <= bmi && bmi <= 24.9){
            bmi_category = 'Normal Range'
        }else if(bmi > 24.9){
            bmi_category = 'Overweight'
        }
        results.innerHTML = `${bmi} : ${bmi_category}`
    }
})