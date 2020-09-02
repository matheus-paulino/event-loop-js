/**
 * Async await
 */
const store = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const store = { id: 1, name: 'Loja XPTO'}

            resolve(store)
        }, 2000)
    })
}

const category = (idStore) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const category = {id: 1, title: 'Promoções', store_id: idStore}

            resolve(category)
        }, 2000)
    })
}

const products = (idCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                { id: 1, name: 'Produto XPTO', category_id: idCategory },
                { id: 2, name: 'Produto OTPX', category_id: idCategory },
                { id: 3, name: 'Produto TOPX', category_id: idCategory }
            ]
            
            resolve(products)
        }, 2000)
    })
}

/**
 * async function nameFunction() {
 * 
 * 
 * }
 */

const start = async () => {
    startPreLoader()
    const storeR = await store()
    console.log(storeR)
    const getCategory = await category(storeR.id)
    console.log(getCategory)
    const getProducts = await products(getCategory.id)
    console.log(getProducts)
    endPreLoader()
}