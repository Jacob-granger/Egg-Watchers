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

  // state for valation
  const [errorForm, setErrorForm] = useState<string>('')

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
    setErrorForm('')
    // validate if the image is selected
    if (formData.image === '') {
      setErrorForm('Please, select a tamagotchi')
    } else {
      setTamagotchi(formData)
      navigate('/')
    }
  }

  // form with input for name, selector for image and selector for personalities
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="centered-form">
        <h1 className="centered-content">Create your Tamagucci</h1>

        <div
          id="message"
          className={`hidden-message ${errorForm === '' ? '' : 'show-message'}`}
        >
          {errorForm}
        </div>

        <div className="input-group">
          <label htmlFor="name" className="label-form">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="styled-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label className="label-form">
            Select Tamagotchi
            <div className="images-div">
              {tamagotchis.map((tamagotch) => (
                <img
                  className={`tamagotchis-images ${
                    formData.image === tamagotch.image
                      ? 'tamagotchi-selected'
                      : ''
                  }`}
                  id={tamagotch.id}
                  key={tamagotch.id}
                  src={`/images/${tamagotch.image}`}
                  alt={tamagotch.image}
                  onClick={handleClick}
                />
              ))}
            </div>
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="personality" className="label-form">
            Personality:
          </label>
          <select
            id="personality"
            className="styled-input"
            onChange={selectChange}
            value={formData.personality.id}
          >
            {personalities.map((personality) => (
              <option key={personality.id} value={personality.id}>
                {personality.name}
              </option>
            ))}
          </select>
        </div>
        <button className="rubber-button" type="submit">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateTam
