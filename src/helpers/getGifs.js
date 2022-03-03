
const getGifs = async (category) => {
    const url = `https:api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MG5J3A0YCTuni2LVauEDPEjIW5pD1ix5`
    const resp =  await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
/*  ***Ejemplo sin desestructuración de objetso ***  
    const data = await resp.json()
    console.log(data.data);

    const gifs = data.data.map(img =>{
        return{
            id: img.id,
            tile: img.title,
            url: img.images.downsized_medium.url
        }
    }) */
    console.log("Obteniendo info específica del request: ",gifs);
    // setImages(gifs)
    return(gifs)
}

export default getGifs