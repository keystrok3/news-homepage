import { useState } from "react"

import './NewItems.css';

const new_items = [
    {
        title: 'Hydrogen VS Electric Cars',
        summary: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },

    {
        title: 'The Downsides of AI Artistry',
        summary: 'What are the possible adverse effects of on-demand AI image generation?'
    },

    {
        title: 'Is VC Funding Drying Up?',
        summary: 'Private funding by VC firms is down 50% YOY. We take a look at what that means'
    }
]


const NewItems = () => {
    // eslint-disable-next-line no-unused-vars
    const [ newItems, setNewItems ] = useState(new_items);

    return (
        <>
            <section className='new-items'>
            <h2>New</h2>

            <ul>
              {
                newItems.map((item, index) => {
                    return (
                        <>
                            <li key={`${index}`}>
                                <h3>{item.title}</h3>
                                <p>{item.summary}</p>
                            </li>
                            { index+1== newItems.length ? "" : <hr key={`0${index}`}/>}
                        </>
                        
                    )
                })
              }
            </ul>
          </section>
        </>
    )
}


export default NewItems;