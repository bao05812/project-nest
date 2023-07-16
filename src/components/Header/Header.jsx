import React, { useEffect, useState } from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderMid from '../../components/Header/HeaderMid'
import HeaderBottom from '../../components/Header/HeaderBottom'

const Header = () => {

   
    return (
        <div>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
        </div>
    )
}

export default Header