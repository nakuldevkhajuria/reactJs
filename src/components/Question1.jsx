import React from 'react'
import './Styles.css'
function Question1() {
  return (
    <div className='firstHead'>
   
   <pre>{`Question1: Difference between Axios and fetch?
    Solution: 

    Fetch is a build in method used to request HTTP request.
    The fundamental work of any web application is to communicate with servers
    through http protocols.
    Some developers prefer axios over fetch(build in APIs) cause of its various 
    functionalities.
    both requires a promise for basic functionality.
    but promise is mandatory attribute in fetch.
    lets see the code.
    For Fetch .

    fetch('path_to_the_resource');
    .then((response) => {})
    .catch((error) => { })

    For Axios
    axios('url')
    .then((response) => { })
    .catch((error) => { })

    Axios has a URl required in  http request.
    fetch dont. 
    Axios is a third party package can be installed.
    Axios has XSRF proetection, fetch dont have.
    
    `}</pre><hr width='200%' />
    </div>
  )
}

export default Question1