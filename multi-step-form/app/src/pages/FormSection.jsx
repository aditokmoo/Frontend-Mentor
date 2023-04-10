import { useState } from 'react'
// Images
import arcadeIcon from '../img/icon-arcade.svg'
import advancedIcon from '../img/icon-advanced.svg'
import proIcon from '../img/icon-pro.svg'
// CSS
import './css/formSection.css'
import { PersonalInfo } from './PersonalInfo'
import { SelectPlan } from './SelectPlan'
import { PickAds } from './PickAds'
import { Summary } from './Summary'
import { Finish } from './Finish'

export const FormSection = ({ activeTab, setActiveTab, nextStep, prevStep }) => {
    const [ activeSwitch, setActiveSwitch ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState({
        nameError: '',
        emailError: '',
        numberError: ''
    });
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        number: '',
    });
    const [ plans, setPlans ] = useState([
        {
            planId: 1,
            planImage: arcadeIcon,
            planType: 'Arcade',
            planMonthlyPrice: '$9/mo',
            planYearlyPrice: '$90/yr',
            isClicked: true,
        },
        {
            planId: 2,
            planImage: advancedIcon,
            planType: 'Advanced',
            planMonthlyPrice: '$12/mo',
            planYearlyPrice: '$120/yr',
            isClicked: false,
        },
        {
            planId: 3,
            planImage: proIcon,
            planType: 'Pro',
            planMonthlyPrice: '$15/mo',
            planYearlyPrice: '$150/yr',
            isClicked: false
        }
    ])

    const [ adds, setAdds ] = useState([
		{
			addId: 1,
			addType: 'Online service',
			addDesc: 'Access to multiplayer games',
			addMonthlyPrice: '$1/mo',
			addYearlyPrice: '$10/yr',
			isChecked: false,
		},
		{
			addId: 2,
			addType: 'Larger Storage',
			addDesc: 'Extra 1TB of cloud save',
			addMonthlyPrice: '$2/mo',
			addYearlyPrice: '$20/yr',
			isChecked: false,
		},
		{
			addId: 3,
			addType: 'Customizable profile',
			addDesc: 'Custom theme on your profile',
			addMonthlyPrice: '$2/mo',
			addYearlyPrice: '$20/yr',
			isChecked: false,
		}
	])

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, number } = formData

        // Check name
        if(name.length < 1) {
            setErrorMessage(prevState => ({
                ...prevState,
                nameError: 'Name is required'
            }))
        } else {
            setErrorMessage(prevState => ({
                ...prevState,
                nameError: ''
            }))
        }

        // Check email
        if(email.length < 1) {
            setErrorMessage(prevState => ({
                ...prevState,
                emailError: 'Email Address is required'
            }))
        } else {
            setErrorMessage(prevState => ({
                ...prevState,
                emailError: ''
            }))
        }

        // Check number
        if(number.length < 1) {
            setErrorMessage(prevState => ({
                ...prevState,
                numberError: 'Phone Number is required'
            }))
            return
        } else {
            setErrorMessage(prevState => ({
                ...prevState,
                numberError: ''
            }))
        }

        nextStep();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* PERSONAL INFO SECTION */}
            <div className={activeTab === 0 ? 'form-section' : 'form-section-hide'}>
                <PersonalInfo formData={formData} setFormData={setFormData} errorMessage={errorMessage} />
            </div>

            {/* SELECT PLAN SECTION */}
            <div className={activeTab === 1 ? 'form-section' : 'form-section-hide'}>
                <SelectPlan plans={plans} setPlans={setPlans} activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} />
            </div>

            {/* PICK ADS-ON SECTION */}
            <div className={activeTab === 2 ? 'form-section' : 'form-section-hide'}>
                <PickAds activeSwitch={activeSwitch} adds={adds} setAdds={setAdds} />
            </div>

            <div className={activeTab === 3 ? 'form-section' : 'form-section-hide'}>
                <Summary plans={plans} adds={adds} activeSwitch={activeSwitch} setActiveTab={setActiveTab} />
            </div>

            <div className={activeTab === 4 ? 'form-section' : 'form-section-hide'}>
                <div className="thank-you-section">
                   <Finish />
                </div>
            </div>

            <div className="button-container">
                {activeTab !== 4 && (
                    <>
                        <button type="submit" className="next-btn">{activeTab === 3 ? 'Confirm' : 'Next'}</button>
                        {activeTab !== 0 && <button onClick={prevStep} className="prev-btn">Go Back</button>}
                    </>
                )}
            </div>
        </form>
    )
}