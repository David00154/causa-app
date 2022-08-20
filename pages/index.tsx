import { useState } from 'react'
import { NextPage } from 'next'
// import { TestModal } from '~/components/utils/Modals'
import { State, useGlobal } from 'contexts/globalContext'
import { VscBell } from 'react-icons/vsc'
import { BsBag } from 'react-icons/bs'
import Layer from 'components/layer'

const Index: NextPage = () => {
  const { state: { storeName, isCheckingOut }, setState } = useGlobal()

  return (
    <Layer>

      <div className='h-full w-full'>
        <nav className="p-5 items-center bg-white w-full border-b">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            {/* <h1 className='text-custom-dark font-bold text-xl'>Hello Test Store,</h1> */}
            <div className='flex items-center ml-auto gap-5'>
              <button type='button'>
                <VscBell size={20} className="text-custom-dark" />
              </button>
              <button type='button'>
                <BsBag size={20} className="text-custom-dark" />
              </button>
            </div>
          </div>
        </nav>
        <div className='mx-auto relative container px-8'>
          List of all the product
          {/* <TestModal opened={false}>
        <div className='p-4'><h1>Helo</h1></div>
      </TestModal> */}
        </div>

      </div>
    </Layer>
  )
}

export default Index