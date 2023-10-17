/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach(temple => {

      const article = document.createElement("article");
    
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
    
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
    
      article.appendChild(h3);
      article.appendChild(img);
    
      templesElement.appendChild(article);
    });
  };


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
  }
  
/* reset Function */
let reset = () => {
    templesElement.innerHTML = "";

  }

/* sortBy Function */
const sortBy = () => {
    const sortBy = document.getElementById("sortBy").value;
    let sortedTemples = [];
  
    switch(sortBy) {
      case "utah":
        sortedTemples = templeList.filter(temple => temple.location.includes("Utah"));
        break;
      case "notutah":
        sortedTemples = templeList.filter(temple => !temple.location.includes("Utah"));
        break;
      case "older":
        sortedTemples = templeList.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1950);
        break;
      case "all":
      default:
        sortedTemples = templeList;
        break;
    }

    reset();
    displayTemples(sortedTemples);
  }



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();