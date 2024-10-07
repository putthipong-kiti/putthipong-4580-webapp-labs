import { GitHubAvatar, GitHubRepoURL } from "./github_data.js";
import "./App.css";

export default function GitHubInfo() {
  const UserInfo = {
    url: "https://github.com/Putthipong21",
    imgURL: "https://avatars.githubusercontent.com/u/119121430?v=4",
    alt: "Putthipong Kitisriworaphan"
  }
  return (
    <div className="App">
      <h1>{UserInfo.alt}</h1>
      <GitHubAvatar userInfo={UserInfo} size={300} />
      <GitHubRepoURL userInfo={UserInfo}/>
    </div>
  )
}