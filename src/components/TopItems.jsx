
import gamingGrowth from '../assets/image-gaming-growth.jpg';
import retroPcs from '../assets/image-retro-pcs.jpg';
import topLaptops from '../assets/image-top-laptops.jpg';

import './TopItems.css';

const top_items = [
    {
        image: retroPcs,
        title: 'Revivind Retro PCs',
        summary: 'What happens when old PCs are given modern upgrades?'
    },

    {
        image: topLaptops,
        title: 'Top 10 Laptops of 2022',
        summary: 'Our best picks for various needs and budgets'
    },

    {
        image: gamingGrowth,
        title: 'The Growth of Gaming',
        summary: 'How the pandemic has sparked fresh opportunities'
    }
];



const TopItems = () => {
    return (
        <div className="top-items">
            <ul>
                {
                    top_items.map((item, index) => {
                        return (
                            <li key={`${index}`}>
                                <div className='top-image'>
                                    <img src={ item.image }/>
                                </div>
                                <div className='top-content'>
                                    <h1>{ `0${index + 1}` }</h1>
                                    <h3>{ item.title }</h3>
                                    <p> { item.summary } </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};


export default TopItems;