import React from 'react'

const AdmissionNav = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-1 mb-2 bg-slate-800 rounded-2xl sm:h-[70px] md:h-[90px] shadow-[6px_6px_15px_#0ea5e9] top-0 z-50 sticky'>
                <div className='grid grid-cols-6 text-white font-bold text-[10px] gap-2 sm:grid-cols-6 sm:text-lg sm:gap-1 md:grid-cols-6 md:gap-3 md:text-xl lg:gap-10 xl:gap-[100px] xl:text-2xl'>
                    <a className='sm:px-1 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Personal</a>
                    <a className='sm:px-1 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Education</a>
                    <a className='sm:px-1 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Course</a>
                    <a className='sm:px-1 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Document</a>
                    <a className='sm:px-1 lg:px-3 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Statement</a>
                    <a className='sm:px-1 py-3 text-center hover:text-blue-500 hover:border-l hover:border-r hover:rounded-lg' href="">Payment</a>
                </div>
            </div>
        </>
    )
}

export default AdmissionNav
