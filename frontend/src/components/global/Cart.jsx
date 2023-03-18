import "../../styles/components/cart.css";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="picture">
        <img src={`./images/${product.imageUrl}`} alt={product.title} />
      </div>
      <div className="content">
        <h4>{product.title}</h4>
        <p>Quantity: {product.count}</p>
      </div>
    </div>
  );
};

export const Cart = ({ show, setShow, products, setProducts }) => {
  return (
    <div className="cart-wrapper">
      <div className={`cart ${show ? "show" : ""}`}>
        <div className="header">
          <h3 className="primary-color">Таны сагс</h3>
          <p
            onClick={() => {
              setProducts([]);
            }}
            className="primary-color"
          >
            Сагс хоослох
          </p>
        </div>

        {products.length !== 0 ? (
          <div className="cart-products">
            {products.map((product, index) => {
              return <CartItem key={`cart-item-${index}`} {...{ product }} />;
            })}
          </div>
        ) : (
          <div className="empty-cart">
            <img src="./images/empty-cart.svg" alt="Empty Cart" />
            <p>Сагс хоосон байна</p>
          </div>
        )}

        <div className="bottom">
          <div className="amount">
            <h3>Нийт дүн</h3>
            <h3>90,000₮</h3>
          </div>
          <div className="order-btn primary-bg">Захиалах</div>
        </div>
      </div>

      <div onClick={() => setShow(false)} className="overlay"></div>
    </div>
  );
};
