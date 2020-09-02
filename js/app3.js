/**
 * Promises
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

const start = () => {

    startPreLoader()

    store()
        /**
         * 1- Carrega a loja
         * 2- Carrega as categorias dessa loja
         * 3- Carrega os produtos da categoria
         */
        .then(store => {
            console.log(store)

            return category(store.id)
        })
        .then(category => {
            console.log(category)

            return products(category.id)
        })
        .then(products => {
            console.log(products)
        })
        // capturando erro
        .catch(err => {
            console.log(err)
        })
        .finally(() => endPreLoader())

}