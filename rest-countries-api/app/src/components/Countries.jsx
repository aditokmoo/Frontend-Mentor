import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import AppContext from '../context/AppContext';

export const Countries = () => {
	const { countries, toggleTheme } = useContext(AppContext);

	return (
		<div className="countries-section">
			{countries.map(({ flags, name, population, region, capital }, index) => (
				<Link to={`/${name.common}`} key={index}>
					<div className={toggleTheme ? 'country-card dark-theme' : 'country-card'}>
						<div className="image">
							<img src={flags.png} alt={flags.alt} />
						</div>
						<div className="content">
							<h3>{name.common}</h3>
							<ul>
								<li>
									Population: <span>{population.toLocaleString('de-DE')}</span>
								</li>
								<li>
									Region: <span>{region}</span>
								</li>
								<li>
									Capital: <span>{capital}</span>
								</li>
							</ul>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};
