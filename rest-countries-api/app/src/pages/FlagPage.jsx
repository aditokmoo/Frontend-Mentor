import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
// React Icons
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const FlagPage = () => {
	const { toggleTheme, getCountryData, countryData } = useContext(AppContext);
	const params = useParams();

	useEffect(() => {
		getCountryData(params.id);  
	}, []);

	return (
		<section className="country">
			<div className="container">
            <Link to='/' className={toggleTheme ? 'dark-theme' : ''}><AiOutlineArrowLeft /> Back</Link>
            {countryData.map(
						({ flags, name, population, region, subregion, capital, tld, currencies, languages, borders }, index) => (
							<div className="country-section" key={index}>
                                <div className="image">
                                    <img src={flags.svg} alt={flags.alt} />
                                </div>

                                <div className="content">
                                    <h1>{name.common}</h1>
                                    <div className="row-1">
                                        <div className="col">
                                            <ul>
                                                <li>Native Name: {Object.values(name.nativeName).map((item , index) => <span key={index}>{item.common}, </span>)}</li>
                                                <li>Population: <span>{population.toLocaleString('de-DE')}</span></li>
                                                <li>Region: <span>{region}</span></li>
                                                <li>Sub Region: <span>{subregion}</span></li>
                                                <li>Capital: <span>{capital}</span></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul>
                                                <li>Top Level Domain: <span>{tld}</span></li>
                                                <li>Currencies: {Object.values(currencies).map(curr => <span key={curr.name}>{curr.name}</span>)}</li>
                                                <li>Languages: {Object.values(languages).map(lang => (
                                                    <p key={lang}>{lang}, </p>
                                                ))}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row-2">
                                        <ul>
                                            <li>
                                                Border Countries:
                                                {borders ? borders.map(border => (
                                                    <p key={border} className={toggleTheme ? 'dark-theme' : ''}>{border}</p>
                                                )):
                                                    <p className={toggleTheme ? 'dark-theme' : ''}>No Border Countries</p>
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
						)
					)}
			</div>
		</section>
	);
};
