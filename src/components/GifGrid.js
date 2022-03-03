import React, { useState,useEffect} from 'react'
import getGifs from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
    const {data,loading} = useFetchGifs(category);



/*     useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category])
     */

/*     Todo esto se pasó a una js solo para que se ejecute la función nada más y se exporta ahora aquí

    const getGifs = async() => {
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
        console.log("Obteniendo info específica del request: ",gifs);
        setImages(gifs)
    } */
  
    return (
    <>
        <h3>{category}</h3>
        {loading  && <h1 className='animate__animated animate__flash'>Cargando...</h1>}
        <div className='card-grid'>
            {data.map(img =>(
                <GifGridItem 
                    key={img.id} 
                    {...img}/>
    /*             // Como se mandarían normalmente las props
                    <GifGridItem 
                    key={img.id} 
                    id={img.id}
                    title={img.title}
                    url={img.url}/> 

                 // Como se mandarían normalmente las props de otra forma                
                    <GifGridItem  
                    img={img}/> */
            ))}
        </div>
    </>
  )
}

export default GifGrid