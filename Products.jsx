import { Link, Outlet } from 'react-router-dom';

import New from './New';
import Featured from './Featured';
const Products = () => {
    return (
        <div>
            <input type="search" />
            <nav>
                <Link to='Featured'>Featured</Link>
                
                <Link to='New'>New</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Products;

