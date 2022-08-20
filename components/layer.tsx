import React, { FC, ReactElement } from 'react'
// import ConfirmCheckout from './ConfirmCheckout'
import Sidebar from 'components/sideBar'

const Layer: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <div className='w-full'>
            <Sidebar />
            <div className='md:ml-[250px] h-screen'>
                {children}
                {/* Right side bar, to confirm check out. */}
                {/* <ConfirmCheckout /> */}
            </div>
        </div>
    )
}

export default Layer