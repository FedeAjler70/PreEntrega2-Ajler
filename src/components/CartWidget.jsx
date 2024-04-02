import cart from '../assets/cart.svg';

export const CartWidget = () => {
    return (
        <div id="cart-widget">
        <img src={cart} alt="Carrito" width={40}/>
        <span>8</span>
        </div>
    );
};