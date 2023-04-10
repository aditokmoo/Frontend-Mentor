import checkIcon from '../img/icon-thank-you.svg'
// CSS
import './css/finish.css'

export const Finish = () => {
    return (
        <>
            <img src={checkIcon} alt='Icon' />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </>
    )
}