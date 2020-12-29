import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Card1 from '../components/cards'

const Header = dynamic(()=> import('../components/header'))
export default function Home() {
  return(
    <div>
      <Head>
        <title> Javid Noshadi </title>
      </Head>
        <div>
          <Header></Header>
              <div className='home-container'>
                <Card1></Card1>
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