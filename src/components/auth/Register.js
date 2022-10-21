import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("cal_token" in res) {
                        localStorage.setItem("cal_token", res.token)
                        history.push("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main className="container__auth">

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <img src={"#"} alt="#" />
            <form onSubmit={handleRegister}>
                <h1>Calendar</h1>
                <h3>Register</h3>
                <div className="page__grid">
                    <div className="page__grid__top">
                        <fieldset>
                            <div className="form__fieldset__item form__input">
                                {/* <label htmlFor="firstName"> First Name </label> */}
                                <input 
                                    ref={firstName} 
                                    type="text" 
                                    name="firstName" 
                                    className="form__input__field" 
                                    placeholder="First name" 
                                    required 
                                    autoFocus
                                    autoComplete="off"
                                    />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form__fieldset__item form__input">
                                {/* <label htmlFor="lastName"> Last Name </label> */}
                                <input 
                                    ref={lastName} 
                                    type="text" 
                                    name="lastName" 
                                    className="form__input__field" 
                                    placeholder="Last name" 
                                    required
                                    autoComplete="off" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form__fieldset__item form__input">
                                {/* <label htmlFor="inputUsername">Username</label> */}
                                <input 
                                    ref={username} 
                                    type="text" 
                                    name="username" 
                                    className="form__input__field" 
                                    placeholder="Username" 
                                    required
                                    autoComplete="off" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form__fieldset__item form__input">
                                {/* <label htmlFor="inputPassword"> Password </label> */}
                                <input 
                                    ref={password} 
                                    type="password" 
                                    name="password" 
                                    className="form__input__field" 
                                    placeholder="Password" 
                                    required
                                    autoComplete="off" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form__fieldset__item form__input">
                                {/* <label htmlFor="verifyPassword"> Verify Password </label> */}
                                <input 
                                    ref={verifyPassword} 
                                    type="password" 
                                    name="verifyPassword" 
                                    className="form__input__field" 
                                    placeholder="Verify password" 
                                    required
                                    autoComplete="off" />
                            </div>
                        </fieldset>
                    </div>
                    <div className="page__grid__bottom">
                        <fieldset>
                            <button 
                                className="btn" 
                                type="submit">
                                Submit
                            </button>
                        </fieldset>
                    </div>
                </div>
            </form>
            
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
