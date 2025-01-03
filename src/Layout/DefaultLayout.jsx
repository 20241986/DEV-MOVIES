   
   

   import { Outlet } from 'react-router-dom'
   
   import header from '../components/Header'

   function DefaultLayout () {
    
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
    export default DefaultLayout

