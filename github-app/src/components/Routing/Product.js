import './style.css'
import { Link, Outlet } from 'react-router-dom';

function Product(){


return <>
<div className="container">
    <div className="left">
        <Link to='electronic'>Electronics</Link>
        <Link to='jewelery'>jewelery</Link>
        <Link to='menclothing'>Men's Clothing</Link>
        <Link to='womenclothing'>Women's Clothing</Link>
    </div>
    <div className="right">
        <Outlet/>
    </div>
</div>
  </>
}

export default Product;