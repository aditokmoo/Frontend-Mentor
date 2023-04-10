// CSS
import './css/tabSection.css'

export const TabSection = ({ activeTab }) => {
    return(
        <div className="tab-section">
            <div className="step">
                <p className={activeTab === 0 ? 'num active' : 'num'}>1</p>
                <div className="text-box">
                    <p className='text-1'>step 1</p>
                    <p className='text-2'>your info</p>
                </div>
            </div>

            <div className="step">
                <p className={activeTab === 1 ? 'num active' : 'num'}>2</p>
                <div className="text-box">
                    <p className='text-1'>step 2</p>
                    <p className='text-2'>select plan</p>
                </div>
            </div>

            <div className="step">
                <p className={activeTab === 2 ? 'num active' : 'num'}>3</p>
                <div className="text-box">
                    <p className='text-1'>step 3</p>
                    <p className='text-2'>add-ons</p>
                </div>
            </div>

            <div className="step">
                <p className={activeTab === 3 || activeTab === 4 ? 'num active' : 'num'}>4</p>
                <div className="text-box">
                    <p className='text-1'>step 4</p>
                    <p className='text-2'>summary</p>
                </div>
            </div>
        </div>
    )
}