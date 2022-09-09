const cat_Btn = document.getElementById('cat_Btn');
const cat_result = document.getElementById('cat_result');

cat_Btn.addEventListener('click',getRandomCat);

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src ="${data.file}"alt = "image" />`
        });
} // accessing file inside data in json file.
