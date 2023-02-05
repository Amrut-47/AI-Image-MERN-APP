import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-white"
      >
        {labelName}
        </label>
        
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-[#1f2123] border border-none text-white font-medium text-sm rounded-full sm:rounded-lg outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
  )
}

export default FormField