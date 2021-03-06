import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ( ) => {
    //     // setCategories ( [...categories, 'Hunter X Hunter'] );
    //     setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // } 

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr />


            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={ category }    
                        category={ category } 
                        
                        />
                    ))
            
                }

            </ol>


        </>
    )
}
