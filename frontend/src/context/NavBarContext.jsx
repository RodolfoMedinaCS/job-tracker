/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useState } from "react";

const NavBarContext = createContext();

export function NavBarProvider({ children }){
    const [navConfig, setNavConfig] = useState({
        showSearch : false,
        showFilter : false,
    });

    const[filter, setFilter] = useState("ALL");

    return(
        <NavBarContext.Provider value={{navConfig, setNavConfig, filter, setFilter}}>
            {children}
        </NavBarContext.Provider>
    );
}
export function useNavBar() {
    return useContext(NavBarContext);
}