import Link from 'next/link'
//import connectToDatabase from '../util/mongodb'
import Header from '../components/header'


 function Login() {
    return(
        <div className='LoginPage'>
            <Header></Header>
            <img  src='./asses/login.svg'/>
            <div className='errors'>'errors comes here'</div>
        <div className='login-box'>
            <form method='post' onSubmit={sendit} action='/login'>
                <input placeholder='نام کاربری' type='text' name='username' className='username' />
                <input placeholder='رمز عبور' type='password' name='password' className='password' />
                <button type='submit'>ورود</button>
            </form>
            <div className='bottom'>
            <Link href='/'>
                    <a className='home-btn'>صفحه اصلی</a>
                </Link>
                <Link href='/signup'>
                    <a className='signup-btn'>ثبت نام</a>
                </Link>
            </div>
        </div>
        </div>)
}

