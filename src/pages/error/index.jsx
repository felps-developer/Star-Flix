import { Link } from 'react-router-dom';
import './index.css'


const NotFound = () => {
    return ( 
        <>
            <div className='not-found'>
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <Link to="/">Veja todos filmes</Link>
            </div>
        </>
     );
}
 
export default NotFound;