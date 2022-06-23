

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('EGO shoes',function () {

  before(function () {
    cy.viewport(1440, 1220)
    cy.fixture('example.json').then(function (testData) {
      this.testData = testData;
    })
})
it('Login', function () {
    
  cy.visit('https://interwood.pk/')
    cy.wait(6000)

    //////////LOGIN////////////////

    // //login 
    // cy.get('#root > main > div.main-desktop-header > header > div > div > div.header-desktop-header-382 > div.header-header-right-3JL > div.header-header-action-icon-1t5 > div.account-trigger-icon > button > span > a > i').click({ multiple: true ,force: true })
    // cy.wait(3000)

    // //email
    // cy.get('#root > main > div.main-page-279 > div > div > div > div.signIn-form-area-3WI > form > div:nth-child(1) > span > input').type(this.testData.email)
    // cy.wait(500)

    // //Password
    // cy.get('#root > main > div.main-page-279 > div > div > div > div.signIn-form-area-3WI > form > div:nth-child(2) > div > span > input').type('@Mani112233')
    // cy.wait(500)

    // //Button
    // cy.get('#root > main > div.main-page-279 > div > div > div > div.signIn-form-area-3WI > form > button').click({ multiple: true ,force: true })
   


  //Search
    cy.get('#root > main > div.main-desktop-header > header > div > div > div.header-desktop-header-382 > div.header-header-right-3JL > div.searchBar-header-icon-246.searchBar-header-search-2j-.searchBar-header-search-inline-xe7.searchBar-header-search-category-1L9.searchbar-global-class > div > form > div.searchBar-header-search-wrapper-Ro3 > span > input').focus().type('bedroom{enter}')
    cy.wait(9000)

     //click on filter
cy.get('#root > main > div.main-page-279 > article > section.searchPage-filter-section-1hm > div > div > ul > li:nth-child(1) > a').click({ multiple: true ,force: true })
cy.wait(2000)

//click on size filter
cy.get('#root > aside.filterModal-root_open-1LH.filterModal-root-2jI > div.filterModal-body-3vF > ul > li:nth-child(4) > button > span').click({ multiple: true ,force: true })
cy.wait(2000)

 //click on size
 cy.get('#root > aside.filterModal-root_open-1LH.filterModal-root-2jI > div.filterModal-body-3vF > ul > li:nth-child(4) > form > ul > li:nth-child(1) > label > input').click({ multiple: true ,force: true })
cy.wait(2000)

//Click on see results
cy.get('#root > aside.filterModal-root_open-1LH.filterModal-root-2jI > div.filterFooter-root-3X2 > button').click()
cy.wait(2000)

//clcik on product
cy.get('#root > main > div.main-page-279 > article > section:nth-child(3) > div > div > div:nth-child(2) > div > div > figure > a > div > img.item-image-3gx.image-loaded-SHk').click({ multiple: true ,force: true })
cy.wait(5000)


 //click on add to cart button
cy.get('#root > main > div.main-page-279 > div.productFullDetail-root-1OT > div.productFullDetail-root-1OT > div > div.product-action-custom > div > button').click({ multiple: true ,force: true })
cy.wait(2000)

//click on edit cart
cy.get('#root > main > div.main-desktop-header > header > div > div > div.header-desktop-header-382 > div.header-header-right-3JL > div.header-header-action-icon-1t5 > aside > div > div.miniCart-footer-2Ww > button.miniCart-editCartButton-wmt.button-root_highPriority-qp_.button-root-2JQ.clickable-root-1G6').click({ multiple: true ,force: true })
cy.wait(6000)

 //click on quantity swatch
cy.get('#root > main > div.main-page-279 > div > section > div.cartPage-row-wHu > div.cartPage-left-section-3sM > div.cartPage-cart-form-3sj > ul > div:nth-child(1) > div > div.product-qty-price-2ry > div.product-qty-box-3S0 > form > div > button.quantity-button_increment-3IZ.quantity-button-28s').click({ multiple: true ,force: true })
cy.wait(3000)

//click on checkout
cy.get('#root > main > div.main-page-279 > div > section > div.cartPage-row-wHu > div.priceSummary-root-L4M > div > div.priceSummary-control-2bU > button').click({ multiple: true ,force: true })
cy.wait(5000)

//click on email
cy.get('[name=email]').eq(0).type(this.testData.email)


//Enter firstname
cy.get('[name=firstname]').type(this.testData.firstname)
cy.wait(2000)

//Enter lastname
cy.get('[name=lastname]').type(this.testData.lastname)
cy.wait(2000)

//Select country
cy.get('#country-root-2Hq').eq(0).select('PK')
cy.wait(1000)


//Enter Address
cy.get('#street0').type(this.testData.address)
cy.wait(1000)


//Enter city
cy.get('#city').eq(0).select('Islamabad')
cy.wait(2000)

 //Enter Phone
 cy.get('[name=telephone]').eq(0).type(this.testData.number)
 cy.wait(3000)
 
 //Click on shipping method button
 cy.contains('Continue to Shipping Method').click({ multiple: true,force: true })
 
 cy.wait(6000)
 
 //Click on payment method button
 cy.get('#root > main > div.main-page-279 > div > div.checkoutPage-checkoutContent-34w > div.checkoutPage-shipping_method_container-1q9 > div > div > form > div.shippingMethod-formButtons-38q > button').click({ multiple: true,force: true })
 cy.wait(5000)
 
  

//////////Pay by credit card////////////////


//  //Click on creditcard
//  cy.get('#root > main > div.main-page-279 > div > div.checkoutPage-checkoutContent-34w > div.checkoutPage-payment_information_container-222 > div > div.paymentInformation-payment_info_container-1xW > form > div > div > div > div:nth-child(2) > div:nth-child(1) > label').click({force: true})
//  cy.wait(2000)
 
//  //Review order
//  cy.get('#root > main > div.main-page-279 > div > div.checkoutPage-checkoutContent-34w > button').click({ multiple: true,force: true })
//  cy.wait(500)

//  //Click on proceed to pay
//  cy.get('#root > main > div.main-page-279 > div > div.checkoutPage-checkoutContent-34w > button').click({ multiple: true,force: true })
//   cy.wait(18000)

//   //Click on card type
//   cy.get('#card_type_001').click({ multiple: true,force: true })
//   cy.wait(1000)

//   //Enter card number
//   cy.get('#card_number').type('4242424242424242',{ multiple: true,force: true })

//   //Enter exp

// cy.get('#card_expiry_month').eq(0).select('03')
// cy.wait(1000)
// cy.get('#card_expiry_year').eq(0).select('2024')
// cy.wait(1000)

//  //Enter cvc
//  cy.get('#card_cvn').type('737',{ multiple: true,force: true })
  })
})
