import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';

function CountryList({ cities, isLoading }) {
    if (isLoading) return (<Spinner />);

    if (!cities.length) return (<Message message='Add your first city by clicking on city on the map' />);

    const countries = [
       ...new Map(
        cities.map(city => [city.country , { country : city.country , emoji : cities.emoji}])
       ).values()
    ];

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => {
                return (
                    <CountryItem country={country} key={country.country}/>
                );
            })}
        </ul>
    );
}

export default CountryList;