import React, { Children } from 'react'

const RadioButton = ({ children }) => {
  const role = children
  return (
     <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="role"
        value={children}
        defaultChecked={children === "Employee"}
        className="h-4 w-4 accent-primary"
        required
      />
      <span className="text-sm text-gray-700 font-semibold">{children}</span>
    </label>
  )
}

export default RadioButton
