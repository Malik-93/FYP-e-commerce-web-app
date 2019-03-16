
const getAllProduct = (product) => {
    return {
        type: 'GET_ALL', 
        payload: product
    }
}

const getMensProduct = (product) => {
    return {
        type: 'GET_MENS', 
        payload: product
    }
}

const getWomensProduct = (product) => {
    return {
        type: 'GET_WOMENS', 
        payload: product
    }
}

const getKidsProduct = (product) => {
    return {
        type: 'GET_KIDS', 
        payload: product
    }
}

export {
     getAllProduct,
     getMensProduct,
     getWomensProduct,
     getKidsProduct
    };