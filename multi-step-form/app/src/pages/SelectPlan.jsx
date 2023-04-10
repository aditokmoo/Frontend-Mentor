// CSS
import './css/selectPlan.css'

export const SelectPlan = ({ plans, setPlans, activeSwitch, setActiveSwitch}) => {	
	const onChange = () => {
		setActiveSwitch(prevState => !prevState)
	}

	const handleActivePlan = (index, e) => {
		const newPlan = plans.map(plan => {
			if(plan.planId === index) {
				return {
					...plan,
					isClicked: true
				}
			}
			return {
				...plan,
				isClicked: false
			}
		})

		setPlans(newPlan)
	}

	return (
		<>
			<h1>Select your plan</h1>
			<p>You have option of monthly or yearly biiling.</p>
			<div className="plan-section">
				
				{plans.map(({ planId, planImage, planType, planMonthlyPrice, planYearlyPrice, isClicked }) => (
					<div className={isClicked ? 'plan active' : 'plan'} key={planId} onClick={(e) => handleActivePlan(planId, e)}>
					<img src={planImage} alt="" />
					<div className="content">
						<h4>{planType}</h4>
						{activeSwitch ? 
							<>
								<span>{planYearlyPrice}</span>
								<p>2 months free</p>
							</>
							:
							<>
								<span>{planMonthlyPrice}</span>
							</>
						}
					</div>
				</div>
				))}
			</div>

			<div className="switch-btn-container">
				<span className={!activeSwitch ? 'active' : ''}>Monthly</span>
				<label className="switch">
					<input type="checkbox" onClick={onChange} />
					<span className="slider round" />
				</label>
				<span className={activeSwitch ? 'active' : ''}>Yearly</span>
			</div>
		</>
	);
};
