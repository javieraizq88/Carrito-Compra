const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            product: {}

        },
        actions: {
 
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            cambiarCheckbox: (e) => {
                const store = getStore()
                if (store.product.hasOwnProperty(e.target.name)) {
                    const aux = { ...store.product }
                    delete aux[e.target.name]
                    setStore({ product: aux })
                }
                else {
                    setStore({ product: { ...store.product, [e.target.name]: e.target.value } })
                }
            },


 
 
        }
    }
}
export default getState;
 
 
