/**
 * Entendendo o ciclo do javascript
 */

const start = () => {
    setTimeout(() => {
        const store = { id: 1, name: 'Loja XPTO'}
        console.log(store)
        setTimeout(idStore => {
            const category = {id: 1, title: 'Promoções', store_id: idStore}
            console.log(category)
            setTimeout(idCategory => {
                const products = [
                    { id: 1, name: 'Produto XPTO', category_id: idCategory },
                    { id: 2, name: 'Produto OTPX', category_id: idCategory },
                    { id: 3, name: 'Produto TOPX', category_id: idCategory }
                ]
                console.log(products)
            },2000, category.id)
        }, 2000, store.id)
    }, 2000);
}