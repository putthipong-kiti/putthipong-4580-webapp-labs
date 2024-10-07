export function GitHubInfo({ userInfo, size = 50 }) {
    return (
        <>
            <h1>{userInfo.alt}</h1>
            <img src={userInfo.imgURL} alt={userInfo.alt} width={size} height={size} />
            <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
                <h2>GitHub repository</h2>
            </a>
        </>
    )
}