import { useState } from 'react'
import { users } from './users'
import './App.css';

export default function App() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handlePrev() {
    setIndex(index - 1)
    setShowMore(false)
  }

  function handleNext() {
    setIndex(index + 1)
    setShowMore(false)
  }

  function handleShowMore() {
    setShowMore(!showMore)
  }

  let user = users[index]
  return (
    <>
      <div className='App'>
        <h1>Sample GitHub Repositories</h1>
        <a href={user.url}>
          <h2>{user.alt}</h2>
        </a>
        <img src={user.imgURL} alt={user.alt} width={200} height={200}></img>
        <div>
          <button className='showHideBtn' onClick={handleShowMore}>
            {showMore ? 'Hide' : 'Show'} followers
          </button>
        </div>
        {showMore && <h3>{user.followers}</h3>}
        <div className='NavBtn'>
          <button className='prevBtn' onClick={handlePrev} disabled={index === 0}>Previous</button>
          <button className='nextBtn' onClick={handleNext} disabled={index === users.length - 1}>Next</button>
        </div>
      </div>
    </>
  )
}