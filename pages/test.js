function Page({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  Page.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4000')
    const json = await res.json()
    return { stars: json.name}
  }
  
  export default Page