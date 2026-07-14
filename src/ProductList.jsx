import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night and helps improve indoor air quality.', cost: '$15' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters common indoor pollutants and is easy to maintain.', cost: '$12' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'A flowering houseplant known for helping purify indoor air.', cost: '$18' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity and brings lush greenery to indoor spaces.', cost: '$20' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'A hardy indoor plant with broad, glossy leaves.', cost: '$17' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'A low-care succulent whose gel is commonly used for skin care.', cost: '$14' },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop', description: 'A calming aromatic plant often used in relaxation routines.', cost: '$20' },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop', description: 'Produces delicate flowers with a sweet fragrance.', cost: '$18' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'An aromatic herb used in cooking and home gardens.', cost: '$15' },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg', description: 'A refreshing herb commonly used in drinks, teas, and recipes.', cost: '$12' },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg', description: 'A citrus-scented herb that grows well in containers.', cost: '$14' },
        { name: 'Hyacinth', image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg', description: 'A colorful flowering plant with a strong, pleasant fragrance.', cost: '$22' },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=900&auto=format&fit=crop', description: 'Thrives in low light and needs only occasional watering.', cost: '$25' },
        { name: 'Pothos', image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg', description: 'A resilient trailing plant suitable for many indoor conditions.', cost: '$10' },
        { name: 'Cast Iron Plant', image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg', description: 'A durable houseplant that tolerates low light and neglect.', cost: '$20' },
        { name: 'Succulents', image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg', description: 'Drought-tolerant plants available in many shapes and sizes.', cost: '$18' },
        { name: 'Aglaonema', image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg', description: 'A colorful indoor plant that requires minimal care.', cost: '$22' },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg', description: 'A bright flowering plant that is simple to grow and maintain.', cost: '$8' },
      ],
    },
  ];

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((current) => ({ ...current, [plant.name]: true }));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery logo" />
            <a href="/" onClick={handleHomeClick}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div className="ul">
          <div><a href="#plants" onClick={handlePlantsClick}>Plants</a></div>
          <div>
            <a href="#cart" onClick={handleCartClick} aria-label={`Shopping cart with ${totalQuantity} items`}>
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                  <rect width="256" height="256" fill="none" />
                  <circle cx="80" cy="216" r="12" fill="white" />
                  <circle cx="184" cy="216" r="12" fill="white" />
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" />
                </svg>
                <span className="cart_quantity_count">{totalQuantity}</span>
              </h1>
            </a>
          </div>
        </div>
      </nav>

      {!showCart ? (
        <main id="plants" className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category}>
              <div className="plantname_heading">
                <h2 className="plant_heading">{category.category}</h2>
              </div>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const isAdded = addedToCart[plant.name] || cartItems.some((item) => item.name === plant.name);
                  return (
                    <article className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <h3 className="product-title">{plant.name}</h3>
                      <p>{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className={`product-button ${isAdded ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
