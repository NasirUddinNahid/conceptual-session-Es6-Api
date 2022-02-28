const loadDog=()=>{
        fetch("https://api.thedogapi.com/v1/breeds")
        .then(res=>res.json())
        .then(data=>displayDog(data))
}
const displayDog=(dogList)=>{
        const mainDiv=document.getElementById('main');
        const first10Data=dogList.slice(0,10);

        for(const dog of first10Data){
                const div = document.createElement('div')
                div.className="col-lg-4";
                div.innerHTML=`
                <h2>${dog.name}</h2>
                <img width="400" height="250" src="${dog.image.url}" />
                `
                mainDiv.appendChild(div);
        }
}