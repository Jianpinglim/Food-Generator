const foods = ['chicken rice', 'Mcdonalds', 'subway', 'FC5 Jap', 'curry rice']
const drinks = ['ice lemon tea', 'milo', 'mango smoothie', 'apple juice']
const snacks = ['waffles', 'popcorn chicken', 'biscuit', 'bread', 'ice cream']
const btn = document.getElementById('btn');
const food = document.querySelector('.foodie');
const drink = document.querySelector('.drinker');
const snack = document.querySelector('.snackie');
var num;

btn.addEventListener("click", function (){
    num = Math.floor(Math.random() * foods.length) 
    food.textContent = foods[num]  
});

btn.addEventListener("click", function (){
    num = Math.floor(Math.random() * drinks.length) 
    drink.textContent = drinks[num]  
});

btn.addEventListener("click", function (){
    num = Math.floor(Math.random() * snacks.length) 
    snack.textContent = snacks[num]  
});
