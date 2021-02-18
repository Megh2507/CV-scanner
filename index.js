console.log("CV SCANNER")
const data = [{
    name: 'Ritam Roy',
    age: 25,
    city: 'Kolkata',
    language: 'Python',
    framework: 'Django',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
},

{
    name: 'Roni Sharma',
    age: 28,
    city: 'Hyderabad',
    language: 'JavaScript',
    framework: 'Angular',
    image: 'https://randomuser.me/api/portraits/men/53.jpg'
},

{
    name: 'Dipayan Paul',
    age: 23,
    city: 'Kolkata',
    language: 'Python',
    framework: 'Django',
    image: 'https://randomuser.me/api/portraits/women/59.jpg'
},

{
    name: 'Olivia Banerjee',
    age: 26,
    city: 'Mumbai',
    language: 'Python',
    framework: 'Flask',
    image: 'https://randomuser.me/api/portraits/women/51.jpg'
},

{
    name: 'Arpit Chandra',
    age: 30,
    city: 'Jharkhand',
    language: 'Go',
    framework: 'Go Framework',
    image: 'https://randomuser.me/api/portraits/men/36.jpg'
}
]
//instantiating iterator
function CViterator(profiles) {
    let nextIDX = 0;
    return {
        next: function () {
            return nextIDX < profiles.length ? { value: profiles[nextIDX++], done: false } : { done: true };
        }
    }
}
let candidates = CViterator(data);
let button = document.getElementById("button");
button.addEventListener("click", go);
go();
function go() {
    let currCan = candidates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currCan != undefined) {
        image.innerHTML = `<img src="${currCan.image}">`;
        profile.innerHTML = `<ul class="list-group">
    
  
    <li class="list-group-item list-group-item-primary">Name : ${currCan.name}</li>
    <li class="list-group-item list-group-item-secondary">Age : ${currCan.age}</li>
    <li class="list-group-item list-group-item-primary">City : ${currCan.city}</li>
    <li class="list-group-item list-group-item-secondary">Language : ${currCan.language}</li>
    <li class="list-group-item list-group-item-primary">Framework : ${currCan.framework}</li>

   
  </ul>`
    }
    else {
        alert("End of applications!")
        window.location.reload();
    }
}

