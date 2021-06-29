

let coffee = {
  name: 'Dutch brother',
  type: 'cup',
  height: 3,
  hot: true,
  strawColor: 'red',
  sizes: ['small', 'medium', 'large'],
  ingredients: [
    {name: "beans", inCoffee: true, cal: 80},
    {name: "water", inCoffee: true, cal: 0},
    {name: 'cream', inCoffee: true, cal: 500},
    {name: 'sugar', inCoffee: true, cal: 800}
  ]
}

let i = 0 
let x = 'name'
// accessing a string on an object
console.log('[straw color]', coffee.strawColor)
// accessing a number on an object
console.log('[Coffee Size]', coffee.height)
// accessing a string in an array on an object
console.log('[Coffee ingredient Beans]', coffee.sizes[0])
// accessing a string in an object in an array in an object
console.log('[Coffee ingredient Beans]', coffee.ingredients[i][x])


// SECTION forEach method
function getTotalCals(food){
  let calories = 0
  // NOTE for loop
  // for (let i = 0; i < food.ingredients.length; i ++){
  //   // NOTE how to reference the ingredient object WITH alias
  //   let ingredient = food.ingredients[i]
  //   console.log('[ for loop ingredient]', ingredient)
  //   // NOTE how to reference the ingredient object WITHOUT alias
  //   // console.log('[ingredient]', food.ingredients[i].name)
  //   if(ingredient.inCoffee){
  //     calories += ingredient.cal
  //   }
  // }
  // NOTE forEach loop
  food.ingredients.forEach(ingredient => {
    console.log('[for each ingredient]', ingredient)
    if(ingredient.inCoffee){
      calories += ingredient.cal
    }
  })

  console.log('[calories]', calories)
  return calories
}

getTotalCals(coffee)

// SECTION find method
function findThatIngredient(food, ingName = 'sugar'){
  // NOTE
  // for( let i = 0; i < food.ingredients.length; i++){
  //   let ingredient = food.ingredients[i]
  //   if( ingredient.name == ingName){
  //     console.log('you will die... your food item has ' + ingredient.cal + ' calories in it!')
  //   }
  // }

  // NOTE find method
  let foundIng = food.ingredients.find(ingredient => ingredient.name == ingName)
  console.log('[found ingredient]',foundIng)
  // NOTE this foundIng retains reference to the object found, meaning when edited, the original is what is being modified.
  // delete foundIng.cal
  if(foundIng.name == 'sugar'){
    return 'you will die... your food item has ' + foundIng.name + ' in it!'
  } else {
    return '\n enjoy'
  }

}

// SECTION filter method
function filterSugar( food){
  // NOTE with for loop
  let newArr = []
  for(let i = 0; i < food.ingredients.length; i++){
    let element = food.ingredients[i]
    if(element.name != 'sugar'){
      newArr.push(element)
    }
  }
  return newArr
  // NOTE with filter Method
  // return food.ingredients.filter(element => element.name != 'sugar')


}


// SECTION MAP method
function dataFormater(food){
  // NOTE curly braces on the and array method means you have to explicitly return a value
  let newIngredients = food.ingredients.map( ingredient => {
    ingredient.cal += ' calories'
    return ingredient
  })

  // return coffee.ingredients
  console.log('[new ingredients]', newIngredients)
}



// NOTE creates large string to then print in console
function menuPrint( food ){
let string = ''

if(food.hot){
  string +=  'One Hot ' + food.name
} else {
  string +=  'One Iced ' + food.name
}
string += '\nIngredients \n'

string += food.ingredients.map(ing => '  '+ ing.name).join('\n')

let totalCal = getTotalCals(food)

string += '\n Calories \n'
string += totalCal
string += findThatIngredient(food, 'sugar')
console.log('your menu item: ',string)
}

