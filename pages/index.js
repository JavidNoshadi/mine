import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'

const Header = dynamic(()=> import('../components/header'))
export default function Home() {
  return(
    <div>
      <Head><title> Javid Noshadi </title></Head>
      <Header></Header>
      <main className='wrapper'>
      <svg className='blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0070F3" d="M45.1,-61.8C60.7,-50.7,77.3,-40.6,76.2,-28.4C75.2,-16.2,56.6,-1.9,45,8.6C33.3,19.1,28.5,25.9,22.2,38.9C15.8,52,7.9,71.3,-5.4,78.7C-18.7,86.1,-37.4,81.6,-53.2,71.7C-69,61.7,-81.9,46.2,-87,28.7C-92.1,11.1,-89.4,-8.5,-82.3,-25.5C-75.1,-42.5,-63.4,-56.8,-48.9,-68.4C-34.5,-79.9,-17.2,-88.6,-1.3,-86.9C14.7,-85.2,29.4,-73,45.1,-61.8Z" transform="translate(100 100)" />
</svg>
      <Card1></Card1>      
      <Card2></Card2>
      </main>
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