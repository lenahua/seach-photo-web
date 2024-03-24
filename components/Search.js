import React from 'react'

//負責搜尋功能
const Search = ({search, setInput}) => {
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  
  return (
    <div className='search'>
      <input type='text' onChange={handleInput}/>
      <button onClick={search}>Search</button>
    </div>
  )
}

export default Search
