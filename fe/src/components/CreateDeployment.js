import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const TEMPLATES = [
  {
    "name": "Sporty",
    "deployedAt": "28-05-89",
    "url":"https://www.npoint.io/docs/8f7cf8628b367ffd50a2",
    "versions": [
      "1.0.0",
      "1.1.0",
      "1.2.0",
      "1.2.1",
      "1.3.0",
      "2.0.0"
    ]
  },
  {
    "name": "Node",
    "deployedAt": "18-10-2021",
    "url":"https://www.npoint.io/docs/8f7cf8628b367ffd50a2",
    "versions": [
      "1.2.0",
      "1.2.1",
      "1.3.0",
      "2.0.0"
    ]
  }
]
const Error = ({ children }) => (
  <span className="new badge red">{children}</span>
)

const CreateDeployment = ({ addNewDeployment }) => {
  const [selectedTemplate, setTemplate] = useState(TEMPLATES[0])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(addNewDeployment)}>
        <div className="row">
          <div className="input-field col s12">
            <select
              className="browser-default"
              id="template"
              // onSelect={}
              {...register('templateName')}
            >
              <option value="" disabled defaultValue="">
                Choose your template
              </option>
              {
                TEMPLATES.map((temp, index) => {
                  return <option value={temp.name} key={temp+index}>{temp.name}</option>
                })
              }
            </select>
            <label className="active" htmlFor="template">
              Template
            </label>
          </div>
          <div className="input-field col s12">
            <select
              className="browser-default"
              id="version"
              // onSelect={}
              {...register('version')}
            >
              <option value="" disabled defaultValue="">
                Choose version
              </option>
              {
                selectedTemplate.versions.map((temp, index) => {
                  return <option value={temp} key={temp+index}>{temp}</option>
                })
              }
            </select>
            <label className="active" htmlFor="template">
              Version
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="url"
              type="text"
              className="validate"
              {...register('url', {
                required: true,
                pattern:
                  /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?/gi
              })}
            />
            <label className="active" htmlFor="url">
              Url
            </label>
            {errors?.url?.type === 'pattern' && (
              <Error>Should be a valid url</Error>
            )}
          </div>
        </div>
        <button className="btn col s2 blue" type="submit" onClick={reset}>
          Add New Deployment
        </button>
      </form>
    </div>
  )
}

export default CreateDeployment
