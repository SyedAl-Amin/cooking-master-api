document.getElementById("button").addEventListener("click",function(){
    const searchValue=document.getElementById("inputValue").value
    if (searchValue === ''){
        alert("Enter Meal!")
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
.then(response=> response.json())
.then(data=>{
    displayFoodItem(data.meals)
})
    }
})
const displayFoodItem=foods=>{
    const foodContainer= document.getElementById("food-container")
    foods.forEach(food => {
        const foodItems=document.createElement('div')
        foodItems.className='food-items'
        const foodInformation=`
        <div class="food-image"><img src="${food.strMealThumb}"></div>
        <p class="food-name">${food.strMeal}</p>
        <button onclick="foodDetails()">Show Details</button>
        `
        foodItems.innerHTML=foodInformation;
        foodContainer.appendChild(foodItems)
    });
}
function foodDetails(){
    const searchValue=document.getElementById("inputValue").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(res=>res.json())
    .then(data=>{
        foodIngredientInfo(data.meals)
    })
}
const foodIngredientInfo=foodIngredient=>{
    const foodIngedient=document.getElementById("food-ingredient-container")
    foodIngredient.forEach(foodIngredients => {
        console.log(foodIngredients.strMealThumb)
        const foodDiv=document.createElement('div')
        foodDiv.className='Ingredient'
        foodIngedient.innerHTML=`
        <div class="ingredient-image">
        <img src="${foodIngredients.strMealThumb}">
        </div>
        <h3 class="food-name">${foodIngredients.strMeal}</h3>
        <h3 style="color:white;">Ingredients</h3>
        <ul class="gredient-name">
        <li>${foodIngredients.strIngredient1}</li>
        <li>${foodIngredients.strIngredient2}</li>
        <li>${foodIngredients.strIngredient3}</li>
        <li>${foodIngredients.strIngredient4}</li>
        <li>${foodIngredients.strIngredient5}</li>
        <li>${foodIngredients.strMeasure1}</li>
        <li>${foodIngredients.strMeasure2}</li>
        <li>${foodIngredients.strMeasure3}</li>
        <li>${foodIngredients.strMeasure4}</li>
        <li>${foodIngredients.strMeasure5}</li>
        </ul>
        
        `
        foodIngedient.appendChild(foodDiv)
    });
}