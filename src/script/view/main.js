const main = () => {
    
   
    const getCategory = () => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                   renderAllCategory(responseJson.categories);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })

            fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`) 
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                renderAllArea(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };



        const getMeansFirsArea = () => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                   renderMeal(responseJson.meals);
                  
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };

        const filterByCategories = (categories) => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                   renderMeal(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };
        const filterByArea = (Area) => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                   renderMeal(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };

        const detailMeals = (meal) => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                renderDetailMeal(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };
        const backDetailMeals = (meal) => {
           
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseMessage(responseJson.message);
               } else {
                renderBackMeal(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };

        const SearchMeals = (meal) => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
               if(responseJson.error) {
                   showResponseSearch(meal);
               } else {
                   renderMeal(responseJson.meals);
               }
            })
            .catch(error => {
                showResponseSearch(meal);
                
            })
        };

        const renderMeal = (meals) => {
            const listMealsElement = document.querySelector("#listMeals");
            let idslider = 0;
            listMealsElement.innerHTML = "";
           
            meals.forEach(meal => {
                // membuat slider-bar dinamis
                idslider++;
                if (idslider < 6) {
                   
                    let listMeals = document.querySelector("#slider"+idslider);
                    listMeals.src =meal.strMealThumb;
                }
                //renderItem
                listMealsElement.innerHTML += `
                <div class="col s12 m12 l4 " id="idMeal${meal.idMeal}" >
                                    <div class="card">
                                        <div class="card-image waves-effect waves-block waves-light">
                                          <img class="activator" src="${meal.strMealThumb}">
                                        </div>
                                        <div class="card-content">
                                          <span class="card-title activator grey-text text-darken-4" style="font-size : 15px; font-weight:900;">${meal.strMeal}<i class="material-icons right">more_vert</i></span>
                                          <p><a class="detail-meals" id="${meal.idMeal}" style="cursor:pointer;">see tutorial details</a></p>
                                        </div>
                                        <div class="card-reveal">
                                          <span class="card-title grey-text text-darken-4" style="font-size:15px">${meal.strMeal}<i class="material-icons right">close</i></span>
                                          <p>more information about this Recipe that is only revealed once clicked on </p>
                                          <p><a class="detail-meals" id="${meal.idMeal}" style="cursor:pointer;">see tutorial details</a></p>
                                        </div>
                                      </div>
                                </div>`;
            });

            const link = document.querySelectorAll(".detail-meals");
            link.forEach(link => {
                link.addEventListener("click", event => {
                    const idMeal = event.target.id;
                   
                    detailMeals(idMeal);
                })
            })
         
        };

        const renderDetailMeal = (meals) => {
           
            meals.forEach(meal => {
                const listMealsElement = document.querySelector("#idMeal"+`${meal.idMeal}`);
                listMealsElement.className ="col s12 m12 l12"
                listMealsElement.innerHTML = "";
                let str = meal.strYoutube;
                let res = str.replace("watch?v=", "embed/");
                
                listMealsElement.innerHTML += `
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">${meal.strMeal}</span>
                    <iframe width="100%" height="315px" src="${res}" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div>
                    <h5>Ingredients Recipe ${meal.strMeal}</h5>
                    <ul id="ingredients">
                            <li><blockquote>
                            ${meal.strIngredient1} ${meal.strMeasure1} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient2} ${meal.strMeasure2} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient3} ${meal.strMeasure3} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient4} ${meal.strMeasure4} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient5} ${meal.strMeasure5} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient6} ${meal.strMeasure6} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient7} ${meal.strMeasure7} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient8} ${meal.strMeasure8} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient9} ${meal.strMeasure9} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient10} ${meal.strMeasure10} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient11} ${meal.strMeasure11} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient12} ${meal.strMeasure12} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient13} ${meal.strMeasure13} 
                            </blockquote>
                            </li>

                           
                            <li><blockquote>
                            ${meal.strIngredient14} ${meal.strMeasure14} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient15} ${meal.strMeasure15} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient16} ${meal.strMeasure16} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient17} ${meal.strMeasure17} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient18} ${meal.strMeasure18} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient19} ${meal.strMeasure19} 
                            </blockquote></li>
                            <li><blockquote>
                            ${meal.strIngredient20} ${meal.strMeasure20} 
                            </blockquote></li>
                    <ul>
                    <h5>Instructions</h5>
                    <p style=" text-align: justify;">${meal.strInstructions}</p>
                    
                    </div>
                   
                  
                    </div>
                  <div class="card-action">
                    <a class="backDetail-meals" id="${meal.idMeal}" href="#!">Close</a>
                    
                  </div>
                </div>
              `;


            const link = document.querySelectorAll(".backDetail-meals");
            link.forEach(link => {
                link.addEventListener("click", event => {
                    const idMeal = event.target.id;
                   
                    backDetailMeals(idMeal);
                })
            })
            });
        };
        const renderBackMeal = (meals) => {
            meals.forEach(meal => {

                const listMealsElement = document.querySelector("#idMeal"+`${meal.idMeal}`);
            listMealsElement.innerHTML = "";
            listMealsElement.className ="col s12 m12 l4"
                listMealsElement.innerHTML += `
                                    <div class="card">
                                        <div class="card-image waves-effect waves-block waves-light">
                                          <img class="activator" src="${meal.strMealThumb}">
                                        </div>
                                        <div class="card-content">
                                          <span class="card-title activator grey-text text-darken-4" style="font-size : 15px; font-weight:900;">${meal.strMeal}<i class="material-icons right">more_vert</i></span>
                                          <p><a class="detail-meals" id="${meal.idMeal}" style="cursor:pointer;">See Detail</a></p>
                                        </div>
                                        <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4" style="font-size:15px">${meal.strMeal}<i class="material-icons right">close</i></span>
                                        <p>more information about this Recipe that is only revealed once clicked on </p>
                                        <p><a class="detail-meals" id="${meal.idMeal}" style="cursor:pointer;">see tutorial details</a></p> </div>
                                      </div>`;
            });

            const link = document.querySelectorAll(".detail-meals");
            link.forEach(link => {
                link.addEventListener("click", event => {
                    const idMeal = event.target.id;
                   
                    detailMeals(idMeal);
                })
            })
         
        };
        
        const renderAllArea = (Area) => {
            const listAreaElement = document.querySelector("#listArea");
            listAreaElement.innerHTML = "";

            Area.forEach(areaList => {
                listAreaElement.innerHTML += `
                <a  class="collection-item list-area" id="${areaList.strArea}" href="#listMeals" class="collection-item">${areaList.strArea}</a>
                `;
            });

            const link = document.querySelectorAll(".list-area");
            link.forEach(link => {
                link.addEventListener("click", event => {
                    let i=0;
                    const listAreaNameClass = document.querySelectorAll(".list-area");
                    const listCategoryNameClass = document.querySelectorAll(".list-categories");

                    for (i = 0; i < listCategoryNameClass.length; i++) {
                        listCategoryNameClass[i].classList.remove('active');
                      }
                    for (i = 0; i < listAreaNameClass.length; i++) {
                        listAreaNameClass[i].classList.remove('active');
                      }


                    const NameArea = event.target.id;
                    link.classList.add('active');
                    filterByArea(NameArea);
                })

            })

        
        };

        const renderAllCategory = (Category) => {
            const listCategoryElement = document.querySelector("#listCategory");
            listCategoryElement.innerHTML = "";
        

            Category.forEach(categories => {
                listCategoryElement.innerHTML += `
                <a  class="collection-item list-categories" id="${categories.strCategory}" href="#listMeals" class="collection-item">${categories.strCategory}</a>
                `;
            });

            const link = document.querySelectorAll(".list-categories");
            link.forEach(link => {
                link.addEventListener("click", event => {
                    let i=0;
                    const listAreaNameClass = document.querySelectorAll(".list-area");
                    const listCategoryNameClass = document.querySelectorAll(".list-categories");
                    for (i = 0; i < listCategoryNameClass.length; i++) {
                        listCategoryNameClass[i].classList.remove('active');
                      }
                    for (i = 0; i < listAreaNameClass.length; i++) {
                        listAreaNameClass[i].classList.remove('active');
                      }

                    const NameCategory = event.target.id;
                    link.classList.add('active');
                    filterByCategories(NameCategory);
                })
            })

        
        };
        const showResponseSearch = (meal) =>{
            const listMealsElement = document.querySelector("#listMeals");
            listMealsElement.innerHTML = `<h2 class="center">${meal} is not found</h2>` ;
        };
            const showResponseMessage = (message = "Check your internet connection") => {
                alert(message);
            };

            document.addEventListener("DOMContentLoaded", () => {
                const searchMeals = document.querySelector("#search");
                searchMeals.addEventListener("keyup", function () {
                    const meals =  searchMeals.value.toUpperCase();
                   
                    SearchMeals(meals)
                });
                getCategory();
                getMeansFirsArea();
            });
}

export default main;
