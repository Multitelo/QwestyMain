import React from 'react'

const ProgressBar = () => {
  return (
<div className='w-[200px]'>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200 border-2 border-emerald-400"
  >
    <span
      className="block h-3 rounded-full  bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-gray-400 to-gray-500"
      style={{width:"75%"}}
    ></span>
  </span>
</div>
)
}

export default ProgressBar