import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {
  const [menuItems,setmenuItems]=useState(items);
  const [categories,setcategories]=useState(allCategories);
  const allCategories=['all',...New Set(items.map(item =>item.category))];
  const filterItems= (category)=>{
    if(category==='all'){
      setmenuItems(items)
      return
    }
    const newItems=items.filter(item=>item.category===category);
    setmenuItems(newItems);
  
  return 
  (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu </h2>
          <div className='underline'></div>
        </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>
      </section>
    </main>;
    );
}

export default App;
