const marvel = {
    render:()=>{
 /*
 publica:
 9570c3d874212005f024584be6fa2fe9 

  privada:
 56690c9f98597e36fe27956fc84c570b83b5ad1d

 md5:
 1e5ac14f95faef7809ebfc1b956d5597
 */

        /*1-privada+publica*/ 
      /*  const urlAPI='https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-M&ts=1&apikey=9570c3d874212005f024584be6fa2fe9&hash=1e5ac14f95faef7809ebfc1b956d5597'; */
        const urlAPI='https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron&ts=1&apikey=9570c3d874212005f024584be6fa2fe9&hash=1e5ac14f95faef7809ebfc1b956d5597';
        const container = document.getElementById("marvel-row");
        let contentHTML='';

        fetch(urlAPI)
        .then(res=>res.json())
        .then((json)=>{
            console.log(json, 'RES.JSON')
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= 
                `<div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                 <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
              </div>`;

            }
            container.innerHTML=contentHTML;
        })
    }
}
marvel.render();