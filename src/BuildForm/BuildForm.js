import React from 'react'
import './BuildForm.css'

export default function BuildForm() {
  const stats = [ 'Strength', 'Perception', 'Endurance', 'Charisma', 'Intelligence', 'Agility', 'Luck' ] 
  const statInputs = stats.map(stat => {
    return (
      <div className='stat-input'>
        <label for={stat.toLowerCase()}>{stat}:</label>
        <input type='number' id={stat.toLowerCase()} name={stat.toLowerCase()} min='1' max ='10' defaultValue='1' required />
      </div>
    )
  }) 
  
  return (
    <section className='form-box'>
      <h2>Create Build</h2>
      <form id='build-form'>
        <label for='title'>Build Title:</label>
        <input type='text' id='title' name='title' required />
        <fieldset id='stats'>
          <legend>Stats</legend>
          {statInputs}
        </fieldset>
        <fieldset id='perks'>
          <legend>Perks</legend>
          <h2>PERKS WILL GO HERE</h2>
        </fieldset>
      </form>
      
    </section>
  )
}
