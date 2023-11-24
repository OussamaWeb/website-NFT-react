import React, { createContext, useContext, useState, useEffect } from 'react'
import { NFT__DATA } from '../components/assets/data/data';


let appContext = createContext();
let localId = localStorage.getItem("idBox") ? JSON.parse(localStorage.getItem("idBox")) : ''
export const Context = ({ children }) => {
    const [slide, setSlide] = useState(false);
    const [detailsModel, setDetailsModel] = useState('');
    const [detailsMarket, setDetailMarket] = useState(localId);
    const [showModel, setShowModel] = useState(false);
    let open = () => setSlide(true);
    let close = () => setSlide(false);
    let getIdForBox = (id) => {
        NFT__DATA.find((item) => {
            if (item.id == id) {
                setDetailsModel(id)
            }
        })
    }
    let openModel = () => setShowModel(true);
    let closeModel = () => setShowModel(false);
    let getIdForMarket = (id) => {
        NFT__DATA.find((item) => {
            if (item.id == id) {
                setDetailMarket(id)
            }
        })
    }
    useEffect(() => {
        localStorage.setItem("idBox", JSON.stringify(detailsMarket))
    }, [detailsMarket])
    return (
        <appContext.Provider value={{
            slide,
            open,
            close,
            getIdForBox,
            getIdForMarket,
            detailsModel,
            detailsMarket,
            showModel,
            openModel,
            closeModel
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useGlobalFunction = () => {
    return useContext(appContext)
}
