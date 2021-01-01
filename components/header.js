import Link from 'next/link'

export default function Header() {
  return (
    <div className='Header'>
        <div className='right'>
          <Link href='/'>
            <a className='home-btn'>صفحه اصلی <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"/></svg></a>
          </Link>
          <Link href='/blog'>
            <a className='blog-btn'>بلاگ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M424.86 0c-23.46 0-46.85 9.64-63.71 28.72L169.93 240 84.1 268.62a34.005 34.005 0 0 0-21.5 21.5L0 478l33.99 34 187.79-62.62a34.005 34.005 0 0 0 21.5-21.5l28.6-85.88 211.19-191.3C544.5 96.38 500.08 0 424.86 0zM212.93 417.75c-.2.59-145.42 49.34-145.42 49.34l68.63-68.66c2.56.66 5.03 1.57 7.8 1.57 17.67 0 31.99-14.33 31.99-32s-14.32-32-31.99-32-31.99 14.33-31.99 32c0 2.77.91 5.24 1.57 7.8l-68.64 68.67S93.6 299.18 94.2 298.98l88.54-29.53 59.69 59.71-29.5 88.59zM461.6 126.97L264.26 305.74l-58.09-58.11L385.11 49.92A53.057 53.057 0 0 1 424.86 32c29.1 0 55.87 25.55 54.91 56.61-.45 14.78-6.81 28.31-18.17 38.36z"/></svg></a>
          </Link>
          <Link href='/login'>
            <a className='blog-btn'>ورود<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M424.86 0c-23.46 0-46.85 9.64-63.71 28.72L169.93 240 84.1 268.62a34.005 34.005 0 0 0-21.5 21.5L0 478l33.99 34 187.79-62.62a34.005 34.005 0 0 0 21.5-21.5l28.6-85.88 211.19-191.3C544.5 96.38 500.08 0 424.86 0zM212.93 417.75c-.2.59-145.42 49.34-145.42 49.34l68.63-68.66c2.56.66 5.03 1.57 7.8 1.57 17.67 0 31.99-14.33 31.99-32s-14.32-32-31.99-32-31.99 14.33-31.99 32c0 2.77.91 5.24 1.57 7.8l-68.64 68.67S93.6 299.18 94.2 298.98l88.54-29.53 59.69 59.71-29.5 88.59zM461.6 126.97L264.26 305.74l-58.09-58.11L385.11 49.92A53.057 53.057 0 0 1 424.86 32c29.1 0 55.87 25.55 54.91 56.61-.45 14.78-6.81 28.31-18.17 38.36z"/></svg></a>
          </Link>
        </div>
        <div className='left'>
        <img className='logo' src='./asses/logo.png'/>
        </div>
    </div>
  )
}