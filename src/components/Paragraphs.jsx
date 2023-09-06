import React from 'react'
import { useSelector } from 'react-redux'

const Paragraphs = () => {
    const paragraphs = useSelector(state=>state.textgen.paragraphs)
    const inputFormat = useSelector(state=> state.textgen.inputFormat)

  return (
    <div className='bgparagraph py-10 px-8 w-3/4'>
        {paragraphs.map((paragraph)=>{
            if(inputFormat==="html"){
                return "<p>"+paragraph+"</p>"
            }
            return paragraph
            
        })}
    </div>
  )
}

export default Paragraphs