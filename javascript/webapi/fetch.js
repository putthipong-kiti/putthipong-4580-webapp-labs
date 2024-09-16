function fetchData() {
    fetch("https://api.github.com/users/putthipong21")
        .then((response) => response.json())
        .then((data) => {
            renderName(data.name, data.html_url);
            renderImg(data.avatar_url, data.html_url);
        });
}
function renderName(nameData, urlData) {
    let name = document.createElement('h1');
    let link = document.createElement('a');
    link.textContent = nameData;
    link.href = urlData;
    name.style.textAlign = 'center';
    name.appendChild(link);
    document.body.appendChild(name);
}
function renderImg(imgUrlData, urlData) {
    let img = document.createElement('img');
    let link = document.createElement('a');
    img.className = 'avatar-img';
    img.src = imgUrlData;
    link.href = urlData;
    link.appendChild(img);
    document.body.appendChild(link);
}
fetchData();