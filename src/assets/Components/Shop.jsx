import React, { use, useState } from 'react'
import reactPhoto from "../react.svg"

const Shop = () => {
    const [allProducts,setallProducts] = useState([]);
    const [showForm, setShowForm] = useState(false)
    const [showBtn, setshowBtn] = useState(true)
    const [product, setProduct] = useState({
        image: "",
        title: "",
        price: "",
        desc: "",
    })

    const handleChange = (e)=> {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file); // Preview the uploaded image
        setProduct({...product, image: imageURL});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setallProducts([...allProducts, product]);
        setProduct({
            image: "",
            title: "",
            price: "",
            desc: "",
        })
        console.log(allProducts)
        setShowForm(false);
        setshowBtn(!showBtn);
    }
    
    const toggleBtn = () => setShowForm(!showForm)
    const handleAddProduct = () => {
        toggleBtn();
        setshowBtn(!showBtn);
    }
   

    


  return (
    <div>   
                <button className='addProduct' onClick={handleAddProduct}>
                    Add Product 
                </button>
            {
                allProducts.length === 0 && 
                <div className='cart'>
                    <div className='empty'>
                        <h1>Oops! Your Shopping Cart is Empty</h1>
                    </div>
                    
                </div>
            }

        {/* PRODUCT FORM */}
        {
            showForm && 
            <form onSubmit={handleSubmit} >
            <h2>Product Form</h2>
            <div className="inputs">
                <label htmlFor="name">Product Name</label>
                <input type="text" name='title' value={product.title} onChange={handleChange} required/>
            </div>
            <div className="inputs">
                <label htmlFor="price">Product Price</label>
                <input type="number" name='price' value={product.price} onChange={handleChange} required/>
            </div>
            <div className="inputs">
                <label htmlFor="desc">Description</label>
                <textarea name='desc' value={product.desc} onChange={handleChange} required></textarea>
            </div>
            <div className="inputs">
                <label htmlFor="preview">Preview</label>
                <img src={product.image} alt="imagePreview" className='productImg'/>
            </div>
            <div className="inputs">
                <label htmlFor="file">Picture Image</label>
                <input type="file" name='image' onChange={handleFileChange} required/>
            </div>
            <button className='add'>Add Product</button>
        </form>
        }

        <div className='gallery'>
            
            {
                
                allProducts.map((prod,index) => {
                    // <h3>Your Products</h3>Headph
                    return( 
                            <div className="product" key={index}>
                                <div className='img-container'>
                                    <img className='productImg' src={prod.image} alt="productImg" />
                                </div>
                                <p className='productTitle'>{prod.title}</p>
                                <div className='side'>
                                    <p>N{prod.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                                <div className='productDesc'>
                                    <p>{prod.desc}</p>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Shop
