import React, { useEffect, useState } from 'react';
import '../Get_api/Get_api.css'
const Get_api = () => {
    const products = [
        { id: 1, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/71mGhk13xYL._AC_UL320_.jpg', price: '500 INR' },
        { id: 2, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/71K4ZJCCdzL._AC_UL320_.jpg', price: '750 INR' },
        { id: 3, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/61GtS6IrR7L._AC_UL320_.jpg', price: '850 INR' },
        { id: 4, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/71h+Mxxki+L._AC_UL320_.jpg', price: '900 INR' },
        { id: 5, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/81xbq9vuIuL._AC_UL320_.jpg', price: '650 INR' },
        { id: 6, name: 'Shirt', image: 'https://m.media-amazon.com/images/I/81zm2CZv6EL._AC_UL320_.jpg', price: '799 INR' },
        { id: 7, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/81F6o3bKUtL._AC_UL320_.jpg', price: '450 INR' },
        { id: 8, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/81ffiVXdQGL._AC_UL320_.jpg', price: '600 INR' },
        { id: 9, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/61upMWQ1qLL._AC_UL320_.jpg', price: '550 INR' },
        { id: 10, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/7191VPW+0GL._AC_UL320_.jpg', price: '500 INR' },
        { id: 11, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/91D-hQsFPFL._AC_UL320_.jpg', price: '700 INR' },
        { id: 12, name: 'T-shirt', image: 'https://m.media-amazon.com/images/I/81EmWuP+npL._AC_UL320_.jpg', price: '650 INR' },
        { id: 13, name: 'Pants', image: 'https://m.media-amazon.com/images/I/51X-GABKiWL._AC_UL320_.jpg', price: '800 INR' },
        { id: 14, name: 'Pants', image: 'https://m.media-amazon.com/images/I/51kdrnIHIzL._AC_UL320_.jpg', price: '950 INR' },
        { id: 15, name: 'Pants', image: 'https://m.media-amazon.com/images/I/61hCfVDPrrL._AC_UL320_.jpg', price: '850 INR' },
        { id: 16, name: 'Pants', image: 'https://m.media-amazon.com/images/I/6189cX8rr3L._AC_UL320_.jpg', price: '900 INR' },
        { id: 17, name: 'Pants', image: 'https://m.media-amazon.com/images/I/61Do40y3vDL._AC_UL320_.jpg', price: '950 INR' },
        { id: 18, name: 'Pants', image: 'https://m.media-amazon.com/images/I/51Z511XFLYL._AC_UL320_.jpg', price: '800 INR' }
    ];

    const [category, setCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleDropdownChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
    };

    useEffect(() => {
        if (category === 'all') {
            setFilteredProducts(products)
        } else (
            setFilteredProducts(products.filter((items) => {
                return items.name.toLowerCase().includes(category.toLowerCase())
            }))
        )
    }, [category])

    return (
        <><div className='container-fluid bg-dark'>

            <header className='d-flex justify-content-around bg-dark text-light'>
                <h1>welcome to the store</h1>
                <div className="dropdown ">
                    <select className="form-select" aria-label="Select category" onChange={handleDropdownChange}>
                        <option value="all">All</option>
                        <option value="Shirt">Shirts</option>
                        <option value="T-shirt">T-Shirts</option>
                        <option value="Pants">Pants</option>
                    </select>
                </div>



            </header>

            <div className='container'>
                <div className="row mt-3">
                    {filteredProducts.map((pro) => {
                        const { name, price, image } = pro;
                        return (

                            <>
                                <div className='col-4 mt-3'>
                                    <div className='container'>
                                        <div className='card border-'>
                                            <div className='container d-flex justify-content-center'>
                                                <img src={image} alt={name} />
                                            </div>
                                            <div className='container text-center bg-dark text-light'>
                                                <p>{name}</p>
                                                <p>{price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    );
};

export default Get_api;
