import './index.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <header>
            <Link className='logo' to={"/"}>Star Flix</Link>
            <Link className='favoritos' to={"/favoritos"}>Meus Filmes</Link>
        </header>
     );
}
 
export default Header;