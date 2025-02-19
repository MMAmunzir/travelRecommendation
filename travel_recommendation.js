 fetch('./travel_recommendation_api.json')
     .then(res => res.json())
     .then(data => console.log(data.countries))
     .catch(error => console.error(error))


// const keyword = document.getElementById('keyword').value;


function search(){
const keyword = document.getElementById('keyword').value;
console.log(keyword)
}
