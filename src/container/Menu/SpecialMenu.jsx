import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app_specialmenu flex__center section__padding'>
    <div className='app_specialmenu-title'>
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app_specialmenu-menu'>
      <div className='app_specialmenu-menu-wine flex__center'>
        <p className='app_specialmenu-menu-heading'>Wine & Beer</p>
        <div className='app_specialmenu-menu-items'>
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} title={wine.title} price ={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app_specialmenu-menu-img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app_specialmenu-menu-cocktail flex__center'>
        <p className='app_specialmenu-menu-heading'>Cocktails</p>
        <div className='app_specialmenu-menu-items'>
          {data.wines.map((cocktail, index)=>(
             <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop: '15px'}} >
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
