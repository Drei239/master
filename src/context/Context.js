import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const handleAddToCart = () => {
        setCounter(counter + 1);
        
    }
    return <Context.Provider
        value={{ counter, handleAddToCart }}>{children}
    </Context.Provider>;
}