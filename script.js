

async function loadRiotApiData() {
    const gameName = document.getElementById('gameName').value; //이름
    const tagLine = document.getElementById('tagLine').value; //태그
    // 사용자 입력 정보를 search.html로 전달
    window.location.href = `search.html?gameName=${encodeURIComponent(gameName)}&tagLine=${encodeURIComponent(tagLine)}`;

    try {
        const response = await fetch(`https://api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`, {
            headers: {
                'X-Riot-Token': 'RGAPI-1e1fde2e-7e58-469a-b261-e27a41c6b605'  // Riot API 키
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // API로부터 받은 데이터를 처리
        displayApiData(data);
    } catch (error) {
        alert("실패!");
    }
}

function displayApiData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // 원하는 방식으로 데이터를 표시
    resultDiv.textContent = JSON.stringify(data, null, 2);
}