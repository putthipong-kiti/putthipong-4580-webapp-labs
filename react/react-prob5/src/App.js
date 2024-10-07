import { users } from "./users.js"

export default function App() {
  const popularRepos = users.filter(popularRepo => popularRepo.followers > 10000)
  const listPopularRepo = popularRepos.map((popularRepo) =>
    <li key={popularRepo.alt}>
      <img src={popularRepo.imgURL} alt={popularRepo.alt} width={100} height={100} />
      <a href={popularRepo.url} target="_blank" rel="noopener noreferrer">
        {popularRepo.alt}
      </a>
      <span>{` (` + popularRepo.followers + ` followers)`}</span>
    </li>
  )
  return (
    <div className="App">
      <h1>Popular GitHub Repositories</h1>
      <ol>
        {listPopularRepo}
      </ol>
    </div>
  )
}
