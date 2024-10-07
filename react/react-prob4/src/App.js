import { users } from "./users.js"

function GitHubInfo({ userInfo, size = 100 }) {
  return (
    <li>
      <img src={userInfo.imgURL} alt={userInfo.alt} width={size} height={size} />
      <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
        {userInfo.alt} {userInfo.followers > 10000 && `(` + userInfo.followers + ` followers)`}
      </a>
    </li>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Sample Github Repositories</h1>
      <ol>
        <GitHubInfo userInfo={users[0]} />
        <GitHubInfo userInfo={users[1]} />
        <GitHubInfo userInfo={users[2]} />
      </ol>
    </div>
  )
}
