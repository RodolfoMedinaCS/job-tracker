/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useState } from "react";

const NavBarContext = createContext();

export function NavBarProvider({ children }){
    const [navConfig, setNavConfig] = useState({
        showSearch : false,
        showFilter : false,
    });

    const[filter, setFilter] = useState("ALL");
    const[searchTerm, setSearchTerm] = useState("");

    return(
        <NavBarContext.Provider value={{navConfig, setNavConfig, filter, setFilter, searchTerm, setSearchTerm}}>
            {children}
        </NavBarContext.Provider>
    );
}
export function useNavBar() {
    return useContext(NavBarContext);
}