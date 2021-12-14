const state = {
    products:[{
        "id": 1,
        "type": "Guys",
        "name": "Crewneck T-Shirt 3-Pack",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1085-0123-100_prod1",
        "price": 40,
        "discountedPrice": 21.99,
        "dateEntered": "2021/12/10",
        "stock": 10
      },
      {
        "id": 2,
        "type": "Girls",
        "name": "Smocked Tiered Mini Dress",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_359-1220-1911-805_prod1",
        "price": 29,
        "dateEntered": "2021/07/10",
        "stock": 5
      },
      {
        "id": 3,
        "type": "Girls",
        "name": "Gilly Hicks Cozy Joggers",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1252-0485-116_prod1",
        "price": 27,
        "dateEntered": "2021/12/06",
        "stock": 15
      },
      {
        "id": 4,
        "type": "Guys",
        "name": "Gilly Hicks Go Energize 2-in-1 Running Short",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_346-1614-0521-900_prod1",
        "price": 29,
        "dateEntered": "2021/07/10",
        "stock": 20
      },
      {
        "id": 5,
        "type": "Guys",
        "name": "Gilly Hicks Woven Boxer",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_309-1408-0413-136_prod1",
        "price": 12,
        "dateEntered": "2021/07/10",
        "stock": 2
      },
      {
        "id": 6,
        "type": "Guys",
        "name": "Gilly Hicks Smiley Socks 2-Pack",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1020-0010-900_prod1",
        "price": 14,
        "dateEntered": "2021/12/11",
        "stock": 1
      },
      {
        "id": 7,
        "type": "Guys",
        "name": "Stretch Poplin Slim Fit shirt",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_325-1072-0609-214_prod1",
        "price": 29,
        "discountedPrice": 20.3,
        "dateEntered": "2020/02/10",
        "stock": 13
      },
      {
        "id": 8,
        "type": "Guys",
        "name": "Must-Have Crewneck T-Shirt 5-Pack",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_324-1072-0132-108_prod1",
        "price": 55,
        "discountedPrice": 34.99,
        "dateEntered": "2021/12/10",
        "stock": 12
      },
      {
        "id": 9,
        "type": "Guys",
        "name": "Print Logo Graphic Tee",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_323-1957-2978-908_prod1",
        "price": 25,
        "discountedPrice": 11.99,
        "dateEntered": "2021/04/10",
        "stock": 17
      },
      {
        "id": 10,
        "type": "Girls",
        "name": "Ultra High-Rise Dad Sweatpants",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_347-1074-0669-100_prod1",
        "price": 35,
        "discountedPrice": 14.99,
        "dateEntered": "2021/08/01",
        "stock": 6
      },
      {
        "id": 11,
        "type": "Girls",
        "name": "Crop Oversized Hoodie",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_352-3541-0604-100_prod1",
        "price": 35,
        "discountedPrice": 12.99,
        "dateEntered": "2021/08/01",
        "stock": 8
      },
      {
        "id": 12,
        "type": "Girls",
        "name": "Gilly Hicks Socks 2-Pack",
        "image": "https://img.hollisterco.com/is/image/anf/KIC_354-1013-0002-100_prod1",
        "price": 14,
        "discountedPrice": 5.99,
        "dateEntered": "2021/12/10",
        "stock": 10
      }],
      users:[],
    selectedPage:'Home',

}


function renderHeader(){
    const headerEl = document.createElement('header') 

    const navEl = document.createElement('nav') 

    const categoryDiv = document.createElement('div') 
    categoryDiv.setAttribute('class','categories')

    const storeNameH1 = document.createElement('h1') 
    storeNameH1.textContent = 'HOLLIXTON'
    storeNameH1.addEventListener('click',e=>{
        state.selectedPage='Home'
        renderBody()
    })
    const categoryUl = document.createElement('ul') 

    const girlsLi = document.createElement('li') 
    girlsLi.textContent = 'Girls'
    girlsLi.addEventListener('click',e=>{
        state.selectedPage='Girls'
        renderBody()
    })
    const guysLi = document.createElement('li') 
    guysLi.textContent = 'Guys'
    guysLi.addEventListener('click',e=>{
        state.selectedPage='Guys'
        renderBody()
    })
    const saleLi = document.createElement('li') 
    saleLi.textContent = 'Sale'
    saleLi.addEventListener('click',e=>{
        state.selectedPage='Sale'
        renderBody()
    })
    const headerButtonsDiv = document.createElement('div') 
    headerButtonsDiv.setAttribute('class','header-buttons')

    const headerButtonsUl = document.createElement('ul') 

    const glassLi = document.createElement('li') 

    const glassImg = document.createElement('img') 
    glassImg.setAttribute('src',"assets/glass.svg")

    const userLi = document.createElement('li') 

    const userImg = document.createElement('img') 
    userImg.setAttribute('src',"assets/user.svg")

    const cartLi = document.createElement('li') 

    const cartImg = document.createElement('img') 
    cartImg.setAttribute('src',"assets/cart.svg")

    document.body.append(headerEl)
    headerEl.append(navEl)
    navEl.append(categoryDiv,headerButtonsDiv)
    categoryDiv.append(storeNameH1,categoryUl)
    categoryUl.append(girlsLi,guysLi,saleLi)
    headerButtonsDiv.append(headerButtonsUl)
    headerButtonsUl.append(glassLi,userLi,cartLi)
    glassLi.append(glassImg)
    userLi.append(userImg)
    cartLi.append(cartImg)
}
function renderMain(){
    const mainEl = document.createElement('main') 
    document.body.append(mainEl)
    const selectedCategoryH2 = document.createElement('h2') 
            selectedCategoryH2.textContent = state.selectedPage
            const productsSection = document.createElement('section') 
            productsSection.setAttribute('class','store-items')
            mainEl.append(selectedCategoryH2,productsSection)
    if(state.selectedPage ==='Home'){
        renderHomeProducts()
    }else if(state.selectedPage ==='Girls'){
        renderGirlsProducts()
    }else if(state.selectedPage ==='Guys'){
        renderGuysProducts()
    }else if(state.selectedPage ==='Sale'){
        renderSaleProducts()
    }else{
        renderProductPage()
    }
}
function renderFooter(){
    const footerEl = document.createElement('footer') 

    const storeNameSpan = document.createElement('span') 
    storeNameSpan.setAttribute('id','name')

    const countrySpan = document.createElement('span') 
    countrySpan.setAttribute('id','country')
    countrySpan.textContent = 'United Kingdom'

    const storeNameH1 = document.createElement('h1') 
    storeNameH1.textContent = 'HOLLIXTON'
    const flagImg = document.createElement('img') 
    flagImg.setAttribute('src',"assets/uk.svg")
    
    document.body.append(footerEl)
    footerEl.append(storeNameSpan,countrySpan)
    storeNameSpan.append(storeNameH1)
    countrySpan.prepend(flagImg)
}
function renderHomeProducts(){
    for(let product of state.products){
        createProductCard(product)
    }
}
function renderGirlsProducts(){
    let girlsProducts = state.products.filter(product=>product.type==='Girls')
        for(let product of girlsProducts){
            createProductCard(product)
        }
}
function renderGuysProducts(){
    let guysProducts = state.products.filter(product=>product.type==='Guys')
        for(let product of guysProducts){
            createProductCard(product)
        }
}
function renderSaleProducts(){
    let saleProducts = state.products.filter(product=>product.hasOwnProperty('discountedPrice'))
        for(let product of saleProducts){
            createProductCard(product)
        }
}
function renderProductPage(){
    let selectedProduct = state.products.filter(product=>
        product.name===state.selectedPage
    )
    const mainEl = document.querySelector('main')
    mainEl.innerHTML=''
    const singleProductArticle = document.createElement('article')
    singleProductArticle.setAttribute('class','single-article')
    const singleImg = document.createElement('img')
    singleImg.setAttribute('src',selectedProduct[0].image)
    singleImg.setAttribute('class','single-img')
    const singleNameDiv = document.createElement('div')
    singleNameDiv.setAttribute('class','name-btn')
    const singleH2 = document.createElement('h2')
    singleH2.textContent = selectedProduct[0].name.toUpperCase()
    singleH2.setAttribute('class','single-h2')
    const singlePriceP = document.createElement('p')
    singlePriceP.setAttribute('class','single-price-p')
    singlePriceP.textContent = '£' + selectedProduct[0].price
    const addCartBtn = document.createElement('button')
    addCartBtn.setAttribute('class','add-cart-btn')
    addCartBtn.textContent = 'ADD TO BAG'
    mainEl.append(singleProductArticle)
    singleProductArticle.append(singleImg,singleNameDiv)
    singleNameDiv.append(singleH2,singlePriceP,addCartBtn)

}
function returnDayDiffBetween2Dates(date1,date2){
    let timeInMiliSec = date1.getTime() - date2.getTime()
    let numberOfDays = timeInMiliSec/1000/60/60/24
    return Math.floor(numberOfDays)
}
function createProductCard(product){
            const productArticle = document.createElement('article') 
            productArticle.addEventListener('click',e=>{
                state.selectedPage=product.name
                renderBody()
            })



            let productDate = new Date(product.dateEntered)
            let dateNow = new Date()
            
            if(returnDayDiffBetween2Dates(dateNow,productDate)<10){
                const newDiv = document.createElement('div')
                newDiv.setAttribute('class','new')
                newDiv.textContent = 'NEW!'
                // newDiv.style.display = 'block'
                productArticle.append(newDiv)
            }

            const productImg = document.createElement('img') 
            productImg.setAttribute('src',product.image)

            const productNameH3 = document.createElement('h3') 
            productNameH3.setAttribute('class','product-name')
            productNameH3.textContent = product.name
            const pricesP = document.createElement('p') 
            pricesP.setAttribute('class','prices')
            
            const oldPriceSpan = document.createElement('span')
            
            oldPriceSpan.setAttribute('class','price')
            oldPriceSpan.setAttribute('id','oldPrice')
            oldPriceSpan.textContent = '£' + product.price
            
            const newPriceSpan = document.createElement('span') 
            if(product.discountedPrice){
                oldPriceSpan.setAttribute('class','price old')
                newPriceSpan.textContent = '£' + product.discountedPrice
                newPriceSpan.setAttribute('class','price new')
                
                newPriceSpan.setAttribute('id','newPrice')
                newPriceSpan.style.display='inline-block'
            }

            
            const productsSection = document.querySelector('.store-items')
            
            productsSection.append(productArticle)
            productArticle.append(productImg,productNameH3,pricesP)
            pricesP.append(oldPriceSpan,newPriceSpan)
}
function renderBody(){
    document.body.innerHTML=''
    renderHeader()
    renderMain()
    renderFooter()
}
function getStoreFromServer(){
    return fetch('http://localhost:3000/store').then(resp=>resp.json(),renderBody())
}
function getUsersFromServer(){
    return fetch('http://localhost:3000/users').then(resp=>resp.json())
}

getStoreFromServer().then(store=>
    {
        state.products = store
        getUsersFromServer().then(users=>{
            state.users=users
            renderBody()
        })
        
        
    }
)