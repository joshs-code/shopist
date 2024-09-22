import HomePage from '../pages/homepage-page';
import ProductShopPage from '../pages/product-shop-page';
import ProductDetailsPage from '../pages/product-details-page';
import CartPage from '../pages/cart-page';
import CheckoutPage from '../pages/checkout-page';

export default class PageManager {
    
    public hp:HomePage;
    public psp:ProductShopPage;
    public pdp:ProductDetailsPage;
    public cp:CartPage;
    public cop:CheckoutPage;

    constructor(public page) {
        this.page = page;
        this.hp  = new HomePage(page);
        this.psp = new ProductShopPage(page);
        this.pdp = new ProductDetailsPage(page);
        this.cp = new CartPage(page);
        this.cop = new CheckoutPage(page);
    }
}