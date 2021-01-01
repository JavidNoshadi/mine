const { default: Footer } = require("../components/footer")
const { default: Header } = require("../components/header")
import Link from 'next/link'
const signup = ()=>{
    return(
    <div className='signup'>
        <Header></Header>
        <div className='errors'>'errors comes here'</div>
        <div className='login-box'>
            <form method='post' action='/login'>
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
        <Footer></Footer>
    </div>
    )
}

export default  signup