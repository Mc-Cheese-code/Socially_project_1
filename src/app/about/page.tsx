import React from 'react'

function AboutPage() {
    console.log('hello this is from server');  // this will run from the server not from the client
  return (
    <div> AboutPage </div>
  )
}

export default AboutPage

//by default every component is a server component 
// that means the compnent will run on the server and not on client 