const recipes = [
    {
        title: "Spaghetti Carbonara",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400",
        recipe: "Ingredients: Spaghetti, eggs, Parmesan cheese, pancetta, black pepper. Instructions: Cook spaghetti, mix with beaten eggs, cheese, and pancetta."
    },
    {
        title: "Chicken Tikka Masala",
        image: "https://www.skinnytaste.com/wp-content/uploads/2011/06/Chicken-Tikka-Masala-15.jpg",
        recipe: "Ingredients: Chicken, yogurt, garlic, ginger, spices, tomatoes. Instructions: Marinate chicken, cook in spices and tomatoes."
    },
    {
        title: "Caesar Salad",
        image: "https://cookieandkate.com/images/2021/05/caesar-salad-in-bowl.jpg",
        recipe: "Ingredients: Ground beef, onions, carrots, peas, mashed potatoes, butter. Instructions: Cook beef with vegetables, layer in dish, top with mashed potatoes, and bake."
    },
    {
        title: "Beef Tacos",
        image: "https://kaynutrition.com/wp-content/uploads/2023/08/shredded-beef-tacos.jpg",
        recipe: "Ingredients: Ground beef, taco shells, lettuce, cheese, salsa. Instructions: Cook beef, fill taco shells with toppings."
    },
    {
        title: "Vegetable Stir Fry",
        image: "https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_9.jpg?w=1200&q=82&auto=format&fit=crop&dm=1703377301&s=27a8577bc7f666190301a03fdf06584c",
        recipe: "Ingredients: Bell peppers, broccoli, soy sauce, garlic, ginger. Instructions: Stir fry vegetables in a wok."
    },
    {
        title: "Chocolate Chip Cookies",
        image: "https://www.recipetineats.com/tachyon/2017/06/Soft-Chocolate-Chip-Cookies-3.jpg",
        recipe: "Ingredients: Flour, sugar, chocolate chips, butter, eggs. Instructions: Mix ingredients and bake."
    },
    {
        title: "Margherita Pizza",
        image: "https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-1200x1707.jpg",
        recipe: "Ingredients: Pizza dough, tomatoes, mozzarella, basil. Instructions: Top dough and bake."
    },
    {
        title: "Pancakes",
        image: "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
        recipe: "Ingredients: Flour, milk, eggs, sugar, baking powder. Instructions: Mix ingredients and cook on a skillet."
    },
    {
        title: "Greek Salad",
        image: "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
        recipe: "Ingredients: Tomatoes, cucumber, olives, feta cheese, olive oil. Instructions: Chop ingredients and toss."
    },
    {
        title: "Lemon Tart",
        image: "https://sugargeekshow.com/wp-content/uploads/2022/02/lemon_tart-25.jpg",
        recipe: "Ingredients: Lemon juice, sugar, eggs, crust. Instructions: Bake crust, mix filling, bake again."
    },
    {
        title: "Chicken Shawarma",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2016/01/Chicken-Shawarma-Recipe-The-Mediterranean-Dish-2.jpg",
        recipe: "Ingredients: Chicken, garlic, cumin, paprika, lemon juice, yogurt. Instructions: Marinate chicken, cook, and serve with pita."
    },
    {
        title: "Fried Chicken",
        image: "https://i.ytimg.com/vi/3CVDrAkhDmI/maxresdefault.jpg",
        recipe: "Ingredients: Chicken, flour, spices, buttermilk. Instructions: Coat chicken in flour mixture, fry until golden."
    },
    {
        title: "Filipino Macaroni Spaghetti",
        image: "https://curiousflavors.com/wp-content/uploads/2024/01/Untitled-design-2024-01-09T123015.086.jpg",
        recipe: "Ingredients: Spaghetti, ground meat, tomato sauce, hot dogs, cheese. Instructions: Cook spaghetti, prepare sauce with meat and cheese."
    },
    {
        title: "Buffalo Wings",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Buffalo-Wings-square-FS-55.jpg",
        recipe: "Ingredients: Chicken wings, hot sauce, butter, garlic powder. Instructions: Fry wings, toss in hot sauce and butter mixture."
    },
    {
        title: "Pad Thai",
        image: "https://www.onceuponachef.com/images/2016/03/pad-thai-760x939.jpg",
        recipe: "Ingredients: Rice noodles, chicken, shrimp, peanuts, egg, tamarind paste. Instructions: Stir fry noodles with sauce and toppings."
    },
    {
        title: "Eggplant Parmesan",
        image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2023/09/simple-eggplant-parmesan-12-scaled.jpg?fit=1200%2C800&ssl=1",
        recipe: "Ingredients: Eggplant, marinara sauce, mozzarella, Parmesan. Instructions: Layer eggplant and cheese, bake until golden."
    },
    {
        title: "Ramen",
        image: "https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-f.jpg",
        recipe: "Ingredients: Ramen noodles, soy sauce, pork, eggs, seaweed. Instructions: Prepare broth, cook noodles, and add toppings."
    },
    {
        title: "Falafel",
        image: "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-Pita-FEATURED.jpg",
        recipe: "Ingredients: Chickpeas, garlic, parsley, cumin, coriander. Instructions: Blend ingredients, form patties, and fry until golden."
    },
    {
        title: "Sushi Rolls",
        image: "https://cdn.pickuplimes.com/cache/a6/7d/a67d95e8044769cf96d551c0ad09f7f9.jpg",
        recipe: "Ingredients: Sushi rice, nori, fish, avocado, cucumber. Instructions: Roll sushi with ingredients and slice into pieces."
    },
    {
        title: "Cheesecake",
        image: "https://theloopywhisk.com/wp-content/uploads/2021/05/White-Chocolate-Cheesecake_730px-featured.jpg",
        recipe: "Ingredients: Cream cheese, sugar, eggs, graham cracker crust. Instructions: Prepare filling, bake in crust, and chill."
    },
    {
        title: "Shepherd's pie",
        image: "https://schoolnightvegan.com/wp-content/uploads/2022/10/vegan-cottage-pie41.jpg",
        recipe: "Ingredients: Cream cheese, sugar, eggs, graham cracker crust. Instructions: Prepare filling, bake in crust, and chill."
    },
    {
        title: "Hummus",
        image: "https://www.gimmesomeoven.com/wp-content/uploads/2019/02/Hummus-Recipe-9.jpg",
        recipe: "Ingredients: Chickpeas, tahini, lemon juice, garlic, olive oil, salt. Instructions: Blend ingredients until smooth, drizzle with olive oil, and serve."
    },
];
function displayRecipes() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-40 object-cover">
            <div class="p-4">
                <h2 class="text-lg font-semibold">${recipe.title}</h2>
                <p class="text-gray-600">${recipe.recipe}</p>
            </div>
        `;
        recipeList.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-40 object-cover">
            <div class="p-4">
                <h2 class="text-lg font-semibold">${recipe.title}</h2>
                <p class="text-gray-600">${recipe.recipe}</p>
            </div>
        `;
        recipeList.appendChild(card);
    });
});

displayRecipes();

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world");
    fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
        .then(resp => resp.json())
        .then((object) => {
            console.log(object);
            // Use the object here or manipulate DOM as needed
        })
        .catch(error => console.log("Error fetching OpenFoodFacts data: ", error));

    // Second fetch request
    const configObj = {
        method: "POST", // Set the method to POST
        headers: {
            "Content-Type": "application/json", // Proper case
            "Accept": "application/json"
        },
        body: JSON.stringify({
            // Provide data that you want to send to the local server
            someData: "example data"
        })
    };

    fetch("http://localhost:3000/", configObj)
        .then((resp) => resp.json())
        .then((object) => console.log(object))
        .catch(error => console.log("Error posting data to local server: ", error));
});

