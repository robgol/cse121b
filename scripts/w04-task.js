/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Robson Correia",
    photo: {
        source: "images\\robson.jpg",
        alt: "Robson Correia"
    },
    favoriteFood: [
        "Tuna",
        "Ribs",
        "Russian Salad",
        "Pizza",
        "Lasagna"
    ],
    hobbies: [
        "Running",
        "Swimming",
        "Camping"
    ],
    placesLived:[]
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Praia, CV",
        length: "18 years"
    },
    {
        place: "Mirandela, PT",
        length: "4 years"
    },
    {
        place: "Praia, CV",
        length: "13 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("img").setAttribute('src', myProfile.photo.source);
document.querySelector("img").setAttribute('alt', myProfile.photo.source);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);    
});


/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.innerHTML = `<b>${placeLived.place}</b>`;

    let dd = document.createElement('dd');
    dd.innerHTML = `<small>${placeLived.length}</small><br/>`;

    document.querySelector("#places-lived").appendChild(dt);    
    document.querySelector("#places-lived").appendChild(dd);    
});

