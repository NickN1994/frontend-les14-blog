import {useNavigate} from "react-router-dom";
import './PageNotFound.css'


function pageNotFound () {
    const navigate = useNavigate();

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h1>404</h1>
                <h2>De pagina die je bezoekt bestaat niet</h2>
                <div><button type='button' onClick={() => navigate('/')}>Ga terug naar Home</button></div>
            </div>
        </div>
    )
}

export default pageNotFound;