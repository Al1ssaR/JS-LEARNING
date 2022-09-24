const mainData = ()=>{
    fetch('https://anime-site-db-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
        return response.json()
    })
    .then((data) =>{
        console.log(data)
    })
}
mainData()