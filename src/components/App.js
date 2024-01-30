import logo from '../assets/logo.png';
import '../App.css';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import CareScale from './CareScale';

function App() {
    return <div>
            <Banner>
				      <img src={logo} alt='La maison jungle' className='lmj-logo' />
				      <h1 className='lmj-title'>La Maison Jungle</h1>
			      </Banner>
            <Cart />
            <ShoppingList />
           </div>
}

export default App
