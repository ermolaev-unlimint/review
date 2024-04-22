import React, { useState, useEffect } from "react"

const fetchFromServer = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
    const [number, setNumber] = useState()
    const [scroll, setScroll] = useState()

    useEffect(async () => {
        setNumber(await fetchFromServer());

        window.addEventListener("scroll", () => setScroll(window.scrollY))
        return () => window.removeEventListener("scroll", () => setScroll(window.scrollY))
    })

    return (
        <div>
            <div> Number: {number} </div>
            <div> Scroll: {scroll} </div>
        </div>
    )
}
