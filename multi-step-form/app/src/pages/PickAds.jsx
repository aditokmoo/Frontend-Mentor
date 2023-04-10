// CSS
import './css/addOns.css'

export const PickAds = ({ activeSwitch, adds,  setAdds }) => {
	const handleChange = (index, e) => {				
		const newAdds = adds.map((item) => {
			if(item.addId === index) {
				return {
					...item,
					isChecked: e.target.checked
				}
			}
			return item
		})

		setAdds(newAdds)
	}

	return (
		<>
			<h1>Pick add-ons</h1>
			<p>Add-ons help enhance your gaming experience.</p>
			<div className="add-ons-section">
				{adds.map(({addId, addType, addDesc, addMonthlyPrice, addYearlyPrice}) => (
					<div className="item" key={addId}>
						<div className="item-col checkbox">
							<input type="checkbox" id={addId} onChange={(e) => handleChange(addId, e)} />
							<label htmlFor={addId} className="checkmark" />
						</div>
						<div className="item-col service">
							<h5>{addType}</h5>
							<p>{addDesc}</p>
						</div>
						<div className="item-col price">
							{activeSwitch ? (
								<p>+{addYearlyPrice}</p>
							):
							(
								<p>+{addMonthlyPrice}</p>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};
