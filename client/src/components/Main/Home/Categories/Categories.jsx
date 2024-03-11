import React from 'react';

const categories = [
  { name: 'High Fantasy', background: 'https://adultfantasygenreguide.files.wordpress.com/2013/12/high-fantasy.jpg' },
  { name: 'Dark Fantasy', background: 'https://storage.googleapis.com/pod_public/1300/181430.jpg' },
  { name: 'Low Fantasy', background: 'https://judesworkshop.files.wordpress.com/2018/06/ddbarfight_370fdb_6314932.jpg' },
  { name: 'Magic Realism', background: 'https://mymodernmet.com/wp/wp-content/uploads/2017/05/optical-illusion-illustrations-3.jpg' },
  { name: 'Contemporary Fantasy', background: 'https://attenoke.com/wp-content/uploads/2022/11/Urban-Fantasy-Wizard-Demon.jpg' },
  { name: 'Grimdark', background: 'https://www.grimdarkmagazine.com/wp-content/uploads/2018/01/kingofthorns_940-492.jpg' },
  { name: 'Isekai', background: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/10-isekai-anime-with-the-best-romances.jpg' }
];

const Categories = () => {
  return (
    <section id="category-section">
      <h3>Categories</h3>
      <div className='slider-container'>
        {categories.map((category, index) => (
        <article className="category-card" key={index} style={{backgroundImage: `url(${category.background})`}}>
          <span>{category.name}</span>
        </article>
        ))}
      </div>
      
    </section>
  );
};

export default Categories;
