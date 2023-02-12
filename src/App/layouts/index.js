import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layouts({ children, FooterImage }) {
    return (
        <>
            <Header />{children}<Footer FImage={FooterImage} />
        </>
    )
}

export default Layouts