import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map(){
    //return ad fucntion navigate to move or nav anywhere
    const navigate = useNavigate();
    const [searchParams , setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    return(
        <div className={styles.mapContainer} onClick={() => navigate('form')}>
            <h1>Map</h1>
            <h3>Postiton : {lat} {lng} </h3>
            <button onClick={() => setSearchParams({lat : 20 , lng : 30})}>Change Parmas</button>
        </div>
    );
}

export default Map;