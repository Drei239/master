import { createContext, useEffect, useState } from "react";
import mockProduct from "../mocks/mockProduct.json";

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(mockProduct);
    }, []);

    const handleAddToCart = (productId) => {
        setCounter(counter + 1);
        const cartListFilter = product.filter(item => item.id == productId);

        function groupItem(input = []) {
            console.log("Cart List", cartList)
            let memoization = cartList;
            console.log("Memoization", memoization);

            const item = input[0];
            if (item.id in memoization) {
                memoization[item.id] = {
                    ...item,
                    qty: memoization[item.id].qty + 1,
                }
            } else {
                memoization[item.id] = {
                    ...item,
                    qty: 1,
                }
            }
            return memoization;
        }
        const newCartList = groupItem(cartListFilter);

        setCartList(newCartList);
    }
    return <Context.Provider
        value={{ counter, handleAddToCart, cartList }}>{children}
    </Context.Provider>;
}