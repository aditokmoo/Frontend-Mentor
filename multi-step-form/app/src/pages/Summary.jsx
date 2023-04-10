import { useEffect, useState } from "react"
// CSS
import './css/summary.css'

export const Summary = ({ plans, adds, activeSwitch, setActiveTab }) => {
    const [ summaryData, setSummaryData ] = useState({
        planType: '',
        planPrice: '',
        total: ''
    })

    useEffect(() => {
        plans.forEach(plan => {
            if(plan.isClicked) {
                setSummaryData(prevState => ({
                    ...prevState,
                    planType: plan.planType,
                    planPrice: activeSwitch ? plan.planYearlyPrice : plan.planMonthlyPrice
                }))
            }
        })
    }, [activeSwitch, plans])

    useEffect(() => {
        const convertPlanPriceToNumber = +summaryData.planPrice.split('/')[0].slice(1);

       const getPrice = adds.map(item => {
            const convertAddPriceToNumber = activeSwitch ? +item.addYearlyPrice.split('/')[0].slice(1) : +item.addMonthlyPrice.split('/')[0].slice(1);

            if(item.isChecked) {
                return convertAddPriceToNumber
            }
            return 0
        })

        const getTotalOfAdds = getPrice.reduce((x, y) => x + y);

        const totalSum = getTotalOfAdds + convertPlanPriceToNumber;

        setSummaryData(prevState => ({
            ...prevState,
            total: totalSum
        }))
    }, [adds, summaryData.planPrice, activeSwitch])

    return (
        <>
            <h1>Summary</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="summary-section">
                <div className="plan-item">
                    <div className="l-side">
                        <span className="plan-type">{summaryData.planType} ({activeSwitch ? 'Yearly' : 'Monthly'})</span>
                        <span className="change" onClick={() => setActiveTab(1)}>Change</span>
                    </div>
                    <div className="r-side">
                        <span className="plan-price">{summaryData.planPrice}</span>
                    </div>
                </div>
                <div className="add-on-item">
                    {adds.map(({ addId, addType, addMonthlyPrice, addYearlyPrice, isChecked }) => (
                        isChecked && (
                            <div className="add-on" key={addId}>
                                <span className="add-on-type">{addType}</span>
                                <span className="add-on-price">+{activeSwitch ? addYearlyPrice : addMonthlyPrice}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="total">
                <span className="total-head">Total (per {activeSwitch ? 'year' : 'month'})</span>
                <span className="total-price">${summaryData.total}/{activeSwitch ? 'yr' : 'mo'}</span>
            </div>
        </>
    )
}