import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

 const GifExpertApp = () => {
    //  const catergories = ['One Punch','Samurai','Dragon Ball']
    const [categories, setCategories] = useState(['Valorant'])

    /*  const añadir = () =>{
        setCategories([...categories, 'Hunter'])
    } */
  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={setCategories}/>
        <hr/>
        <ol>
            {categories.map(category=>(
                <GifGrid 
                    key={category}
                    category={category}/>
            ))}
        </ol>
    </>
  )
}

export default GifExpertApp
