export function GitHubAvatar({userInfo, size = 50}) {
    return (
        <img src={userInfo.imgURL} alt={userInfo.alt} width={size} height={size}/>
    )
}

export function GitHubRepoURL({userInfo}) {
    return (
        <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
            <h2>GitHub repository</h2>
        </a>
    )
}