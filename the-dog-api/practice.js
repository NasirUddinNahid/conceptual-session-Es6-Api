const loadDog=()=>{
    fetch("https://api.thedogapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog=(dogList)=>{
        const main=document.getElementById("main")
        const first10Data = dogList.slice(0,10);
       

        for(const dog of first10Data){
                console.log(dog)
                const div=document.createElement('div');
                div.className ="col-lg-4"
                
                div.innerHTML=`
                 <h2>${dog.name}</h2>
                 <h4>${dog.temperament}</h4>
                 <img width="400px" height="250px" src="${dog.image.url}" />
                 
                 `
                 main.appendChild(div);
        }

      
}
