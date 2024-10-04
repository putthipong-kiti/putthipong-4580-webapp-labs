import './App.css';

function GithubAvatar() {
  return (
    <img src="https://avatars.githubusercontent.com/u/119121430?v=4" alt="my avatar" />
  )
}

function GithubRepoURL() {
  return (
    <a href="https://github.com/Putthipong21" target="_blank" rel="noopener noreferrer">
      <h2>My GitHub Repository</h2>
    </a>
  )
}

function GitHubInfo() {
  return (
    <>
      <div id="github-info">
        <h1>My GitHub Information</h1>
        <GithubAvatar />
        <GithubRepoURL />
      </div>
    </>
  )
}

function App() {
  return (
    <GitHubInfo />
  );
}

export default App;
