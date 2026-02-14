import './ProductCard.css';

function ProductCard({ name, price, stockStatus, image }) {
    return (
        <div className="product-card">
            <div className="product-image">
                {image ? (
                    <img src={image} alt={name} />
                ) : (
                    <div className="image-placeholder"></div>
                )}
            </div>

            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">${price}</p>

                <div className={`stock-badge ${stockStatus === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                    {stockStatus}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
