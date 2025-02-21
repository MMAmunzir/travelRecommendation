
function search(){
const input = document.getElementById('keyword').value.trim();
const searchResults= document.getElementById('allsearch_container')
searchResults.innerHTML ='';

 fetch('./travel_recommendation_api.json')
     .then(res => res.json())
     .then(data => {

    if(input.toLowerCase().includes("country")){
        data.countries.forEach(element => { element.cities.forEach(item =>{

            searchResults.innerHTML += `<div class="card"> <img src=${item.imageUrl} alt=${item.name}/><div><h4>${item.name}</h4><p>${item.description}</p><button>Visit</button></div></div>`
        })
        });

        // searchResults.innerHTML=searchContent;

    }else if(input.toLowerCase().includes("temple")){
        data.temples.forEach(element => {
            searchContent += `<div class="card"> <img src=${element.imageUrl} alt=${element.name}/><div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button></div></div>`
        })
        searchResults.innerHTML=searchContent;

    }else if(input.toLowerCase().includes("beach")){
        data.beaches.forEach(element => {
            searchContent += `<div class="card"> <img src=${element.imageUrl} alt=${element.name}/><div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button></div></div>`
        })
        searchResults.innerHTML=searchContent;
    }else{
        alert("Search valid keyword")
    }
     })}


function clearSearch(){
    const input = document.getElementById('keyword')
    const searchResults= document.getElementById('allsearch_container')
    searchResults.innerHTML ='';
    input.value= ''

}