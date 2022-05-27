import React from 'react';
import './style.css';
import signUp from '../../assets/images/signup-image.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { onChange } from '../../Redux/actions/authorization'


function Register(props) {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.username);
    const password = useSelector(state => state.auth.password);
    const repeatPass = useSelector(state => state.auth.repeatPass);
    const email = useSelector(state => state.auth.email);

    const validation = () => {
        if (!username || !password || !repeatPass || !email) {
            return 'لطفا تمامی قسمت ها را پر کنید'
        } else if (password !== repeatPass) {
            return 'رمز ها با یکدیگر برابر نیستند'
        } else if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
            return 'ایمیل معتبر نیست'
        } else return ''
    }
    const register = (e) => {
        e.preventDefault()
        const valid = validation();
        if (valid === '') {
            localStorage.setItem('username', JSON.stringify(username))
            props.props.history.push('/home')
        } else {
            alert(valid)
        }
    }

    return (
        <div className="main">
            <section class="signup">
                <div class="container">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">ثبت نام</h2>
                            <form method="POST" class="register-form" id="register-form">
                                <div class="form-group">
                                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input class="register_input" type="text" name="name" id="name" placeholder="نام" value={username} onChange={(e) => dispatch(onChange('username', e.target.value))} />
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                                    <input class="register_input" type="email" name="email" id="email" placeholder="ایمیل" value={email} onChange={(e) => dispatch(onChange('email', e.target.value))} />
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input class="register_input" type="password" name="pass" id="pass" placeholder="رمز" value={password} onChange={(e) => dispatch(onChange('password', e.target.value))} />
                                </div>
                                <div class="form-group">
                                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                    <input class="register_input" type="password" name="re_pass" id="re_pass" placeholder="تکرار رمز" value={repeatPass} onChange={(e) => dispatch(onChange('repeatPass', e.target.value))} />
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" class="form-submit" value="ثبت نام" onClick={(e) => register(e)} />
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img src={signUp} alt="sing up image" /></figure>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Register;
