import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage-page';
import ProductShopPage from '../pages/product-shop-page';
import ProductDetailsPage from '../pages/product-details-page';
import CartPage from '../pages/cart-page';
import CheckoutPage from '../pages/checkout-page';

test.describe('E2E test flows', () => {
  
  test("Product Checkout", async ({page}) => {
    const hp = new HomePage(page);

    await hp.go();
    await hp.clickProductCategory();

    const psp = new ProductShopPage(page);
    await psp.clickProduct();

    const pdp = new ProductDetailsPage(page);
    await pdp.addToCart();
    await pdp.gotoCart();

    const cp = new CartPage(page);
    await cp.clickCheckout();

    const cop = new CheckoutPage(page);
    const msg = await cop.getMsg();

    expect(msg).toEqual("Thank you!")
  });

})