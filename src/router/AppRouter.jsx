import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { JournalRouter } from '../journal/router/JournalRouter'
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <JournalRouter /> } />
           : <Route path="/auth/*" element={ <AuthRouter /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}