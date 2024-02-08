import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({name, cover, id, light, water}) {
  return (
    <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}></img>
      {name}
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
    </li>
  )
}

function handleClick(e) {
  console.log("J'ai cliqué", e)
}

export default PlantItem
