import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setIsCorrectPassword } from '../store/actions/portfolioActions'

export function PasswordModal() {

    const passwordInput = useRef()
    const { portfolio } = useSelector(state => state.portfolioModule)
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const checkPassword = () => {
        if(!passwordInput.current.value) return
        if (passwordInput.current.value === portfolio.password) {
            dispatch(setIsCorrectPassword(true))
            navigate("/back-office");
        } else {
            dispatch(setIsCorrectPassword(false))
            navigate("/");
        }
    }

    return (
        <section className='password-modal'>
            <div className="content">
                <h1>Enter Password</h1>
                <input ref={passwordInput} type="text" />
                <button onClick={checkPassword}>Submit</button>
            </div>
        </section>
    )
}
