import React from 'react';
import './product-list.css';

const ProductList = ({ product }) => {

  return (
    <div className="container">
      <div className="product-tile">
        <img className="product-image" src={product.image} alt={product.title} />
        <div>
          <span className="product-brand">{product.brand}</span>
          <span className="product-title">{product.title}</span>
          <p className="product-price">
            Price: 
            <span>
              {product.price}$
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

// class ProductList extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     render() {

//         const { product } = this.props;

//         return (
//             <div className="container">
//                 <div className="product-tile">
//                     <img className="product-image" src={product.image} alt={product.title} />
//                     <div>
//                         <span className="product-brand">{product.brand}</span>
//                         <span className="product-title">{product.title}</span>
//                         <p className="product-price">
//                             Price:
//                     <span>
//                                 {product.price}$
//                     </span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default ProductList