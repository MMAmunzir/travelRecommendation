
function search(){
const input = document.getElementById('keyword').value.trim();
const searchResults= document.getElementById('allsearch_container')
const searchContent=''

 fetch('./travel_recommendation_api.json')
     .then(res => res.json())
     .then(data => {
        const condition1 = data.countries.find(item => item.name.toLowerCase() === input.toLowerCase());
        const condition2 = data.temples.find(item => item.name.toLowerCase() === input.toLowerCase());
        const condition3 = data.beaches.find(item => item.name.toLowerCase() === input.toLowerCase());

    if(condition1){
        data.countries.forEach(element => { element.cities.forEach(item =>{

            searchContent += `<div> <img src=${item.imageUrl}/><div><h4>${item.name}</h4><p>${item.description}</p><button>Visit</button></div></div>`
        })
        });

        searchResults.innerHTML=searchContent;

    }else if(condition2){
        data.temples.forEach(element => {
            searchContent += `<div> <img src=${element.imageUrl}/><div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button></div></div>`
        })
        searchResults.innerHTML=searchContent;

    }else if(condition3){
        data.beaches.forEach(element => {
            searchContent += `<div> <img src=${element.imageUrl}/><div><h4>${element.name}</h4><p>${element.description}</p><button>Visit</button></div></div>`
        })
        searchResults.innerHTML=searchContent;
    }else{
        console.log("entered is not in data base")
    }
     })}