
function search(){
const input = document.getElementById('keyword').value.trim();

 fetch('./travel_recommendation_api.json')
     .then(res => res.json())
     .then(data => {
        console.log(data.countries)
        const condition1 = data.countries.find(item => item.name.toLowerCase() === input.toLowerCase());
        const condition2 = data.temples.find(item => item.name.toLowerCase() === input.toLowerCase());
        const condition3 = data.beaches.find(item => item.name.toLowerCase() === input.toLowerCase());

    if(condition1){
        console.log(condition1)
    }else if(condition2){
        console.log(condition2)
    }else if(condition3){
        console.log(condition3)
    }else{
        console.log("entered is not in data base")
    }
     })}