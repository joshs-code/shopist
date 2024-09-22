import { test, expect } from '@playwright/test';
import PageManager from '../pages/page-manager';

test.describe('E2E test flows', () => {
  
  test("Product Checkout", async ({page}) => {
    
    const pm = new PageManager(page);

    await pm.hp.go();
    await pm.hp.clickProductCategory();

    await pm.psp.clickProduct();

    await pm.pdp.addToCart();
    await pm.pdp.gotoCart();

    await pm.cp.clickCheckout();

    const msg = await pm.cop.getMsg();
    expect(msg).toEqual("Thank you!");
    await pm.cop.snap();

  });

})