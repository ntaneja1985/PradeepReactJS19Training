import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Databinding from "../src/Databinding";
// import DiscountOffer from "./DiscountOffer";
// import Search from "./Search";
// import Navbar from "./Navbar";
// import ProductView from "./ProductView.tsx";
import {lazy, Suspense} from "react";
import Navbar from "./Navbar.tsx";
import Products from "./Products.tsx";
import Login from "./Login.tsx";
import UserProvider from "../context/UserProvider.tsx";
// import ControlledForm from "./ControlledForm.tsx";
// import UncontrolledForm from "./UncontrolledForm.tsx";
// import Search from "./Search.tsx";
// import DiscountOffer from "./DiscountOffer.tsx";
// import ProductView from "./ProductView.tsx";

function Layout() {

    const Databinding = lazy(()=> import('../src/Databinding.tsx'))
    const DiscountOffer = lazy(()=> import('./DiscountOffer.tsx'))
    const Search = lazy(()=> import('./Search.tsx'))
    const ProductView = lazy(()=> import('./ProductView.tsx'))
    const UncontrolledForm = lazy(()=> import('./UncontrolledForm.tsx'))
    const ControlledForm = lazy(()=> import('./ControlledForm.tsx'))
    const FormikForm = lazy(()=> import('./FormikForm.tsx'))
    return (
        <>
          <BrowserRouter>
              <UserProvider>
              <Navbar/>
              <Suspense fallback={(<div>Loading...</div>)}>
              <Routes>
                  <Route path="/" element={<Search/>} />
                  <Route path="/products" element={<Search/>} />
                  <Route path="/offer" element={<DiscountOffer/>} />
                  <Route path="/databinding" element={<Databinding/>} />
                  <Route path="*" element={<Databinding/>} />
                  <Route path="/product-view/:id" element={<ProductView/>} />
                  <Route path="/uncontrolled" element={<UncontrolledForm/>} />
                  <Route path="/controlled" element={<ControlledForm/>} />
                  <Route path="/formik" element={<FormikForm/>} />
                  <Route path="/productsApi" element={<Products/>} />
                  <Route path="/login" element={<Login/>} />
              </Routes>
              </Suspense>
              </UserProvider>
          </BrowserRouter>
        </>
    )
}

export default Layout
