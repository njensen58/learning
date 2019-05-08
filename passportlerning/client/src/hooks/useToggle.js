import { useState } from 'react'

function useToggle(){
  return useState(false)
}

export default useToggle