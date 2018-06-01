export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';

function requestProducts(products){
    return {
        type: 'REQUEST_PRODUCTS',
        products
    }
}

function receiveProducts(json){
    return {
        type: 'RECEIVE_PRODUCTS',
        products: json.map(data => {
            data.author = data.metadata.author.title;
            data.authorImage = data.metadata.author.metadata.image.url;
            return data
        }),
        receivedAt: Date.now()
    }
}

export function productsHasErrored(bool){
    return {
        type: 'PRODUCTS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function fetchProducts(url) {
    return (dispatch) => {
        dispatch(requestProducts(url))
        fetch(url)
        .then( response => response.json(),
          error => {
              console.log('An error occurred: ', error)
              dispatch(productsHasErrored(error))
          }
        )
        .then(json => {
            console.log(json);
            dispatch(receivedProducts(json))
        }
    )
 };
}