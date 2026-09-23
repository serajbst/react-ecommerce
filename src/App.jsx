import { Routes, Route } from 'react-router-dom'
import ProductsData from './product'
import ProductDetails from './productDetails'
import Header from './header'
import OrderSummary from './OrderSummary'
import PlaceOrder from './PlaceOrder'
import OrderSuccess from './OrderSuccess'
import About from './about'
import Footer from './footer'
import Acount from './Acount'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<ProductsData />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="/order-place" element={<PlaceOrder />} />
                <Route path="/order-successfull" element={<OrderSuccess />} />
                <Route path="/category/:category" element={<ProductsData />} />
                <Route path="/account" element={<Acount />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App