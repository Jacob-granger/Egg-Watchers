import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Tamagotchi, TamagotchiContext } from './App'
import personalities from '../../data/personalities'
import tamagotchis from '../../data/tamagotchis'

// default form values
const defaultValues = {
  name: '',
  image: '',
  personality: { id: 1, name: 'Calm' },
}

//CreateTam component
const CreateTam = () => {
  // get setTamagotchi from the App component (via outlet context)
  const { setTamagotchi } = useOutletContext<TamagotchiContext>()
  const navigate = useNavigate()

  // state to handle form data
  const [formData, setFormData] = useState<Tamagotchi>(defaultValues)

  // handle changes in input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // handle changes in the select
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPersonality = personalities.find(
      (personality) => personality.id === Number(event.target.value)
    )
    setFormData({
      ...formData,
      personality: selectedPersonality || defaultValues.personality,
    })
  }

  // handle click on the image
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const img: HTMLButtonElement = event.currentTarget

    const selectedTamagotchy = tamagotchis.find(
      (tamagotchy) => tamagotchy.id === Number(img.id)
    )
    setFormData({
      ...formData,
      image: selectedTamagotchy?.image || '',
    })
  }

  // handle submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    setTamagotchi(formData)
    navigate('/')
  }

  // form with input for name, selector for image and selector for personalities
  return (
    <form onSubmit={handleSubmit}>
      <div>Create a Tamagucci - Add form here</div>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <div>
        <label>
          Select Tamagotchi
          {tamagotchis.map((tamagotch) => (
            <img
              className={`tamagotchis-images ${
                formData.image === tamagotch.image ? 'tamagotchi-selected' : ''
              }`}
              id={tamagotch.id}
              key={tamagotch.id}
              src={`/images/${tamagotch.image}`}
              alt={tamagotch.image}
              onClick={handleClick}
            />
          ))}
        </label>
      </div>

      <label htmlFor="personality">Personality</label>
      <select
        id="personality"
        onChange={selectChange}
        value={formData.personality.id}
      >
        {personalities.map((personality) => (
          <option key={personality.id} value={personality.id}>
            {personality.name}
          </option>
        ))}
      </select>
      <br />
      <button className="rubber-button" type="submit">
        Create
      </button>
    </form>
  )
}

export default CreateTam
