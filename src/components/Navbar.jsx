import { Component} from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'


export default  class Navbar extends Component{

    render(){

        return(
            <>
             <div className='heading'>
      <div className='first'>The</div>
      <div className='second'>Siren</div></div>
            <nav>
                <ul className='nav'>
                    <li> <Link style={{color:"black"}} to='/' >Home</Link></li>
                    <li><Link style={{color:"black"}} to='/bollywood'>Bollywood</Link></li>
                    <li><Link style={{color:"black"}} to='/technology'>Technology</Link></li>
                    <li><Link style={{color:"black"}} to='/hollywood'>Hollywood</Link></li>
                    <li><Link style={{color:"black"}} to='/fitness'>Fitness</Link></li>
                    <li><Link style={{color:"black"}} to='/food'>Food</Link></li>
                </ul>
            </nav>
            <hr style={{width:"103rem",color:"grey"}}/>
            </>
        )
    }
}


