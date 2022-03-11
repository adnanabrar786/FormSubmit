import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'
import FetchApiOne from '../component/FetchApiOne'
import FetchApiTwo from '../component/FetchApiTwo'

const  Router = () => {

return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/SignIn' element={<SignUp />} />
                <Route path='/FetchApiOne' element={<FetchApiOne />} />
                <Route path='/FetchApiTwo' element={<FetchApiTwo/>}/>
            </Routes>
        </BrowserRouter>

    </>
)
}

export default Router