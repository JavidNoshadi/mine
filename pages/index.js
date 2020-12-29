import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Header = dynamic(()=> import('../components/header'))
export default function Home() {
  return(
    <div>
      <Head>
        <title> Javid Noshadi </title>
        <script src="https://kit.fontawesome.com/bf0cb79f35.js" crossorigin="anonymous"></script>
      </Head>
        <div>
          <Header></Header>
              <div className='home-container'>
                <h1>javiid</h1>
              </div>
        </div>
        </div>
    )
}
/* 
export async function getServerSideProps() {
  const { client , db } = await connectToDatabase()

  //const isConnected = await client.isConnected()
  const movies = await db
  .collection("movies")
  .find({})
  .sort({ metacritic: -1 })
  .limit(20)
  .toArray();
  return {
    props: {  movies: JSON.parse(JSON.stringify(movies)) },
  }
}
 */