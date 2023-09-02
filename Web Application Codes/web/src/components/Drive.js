import React from 'react'
import Nav from './Nav'

function Drive() {
    return (
        <div className='drive'>
            <Nav />
                <div className='DriDiv'>
            
            <div className='FirstDiv'>
                <h2>
                    Drive with transis, earn good money
                </h2>
                <p>
                    Sign up with us
                </p>
            </div>
            <div className='LastDiv'>
                <h2>Sign Up As A Driver</h2>
                <form>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' placeholder='Johnsondoe@gmail.com'/>
                    <label htmlFor='phone'>Phome Number</label>
                    <input type='tel' id='phone' placeholder='+2348012345678'/>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' placeholder='your City'/>
                    <button type='submit'>Next</button>
                </form>
            </div>
        </div>
    
        </div>
    )
}

export default Drive
