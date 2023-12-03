// URL에서 쿼리 매개변수를 가져오는 함수
function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 검색 결과를 표시하는 함수
function displayResult() {
    const gameName = getQueryStringParameter('gameName');
    const tagLine = getQueryStringParameter('tagLine');

    // 여기에서 API를 호출하고 결과를 표시하는 로직을 추가할 수 있습니다.
    // 이 예제에서는 간단히 URL에서 가져온 gameName과 tagLine을 표시합니다.
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>게임 이름: ${gameName}</p>
        <p>태그: ${tagLine}</p>
        <!-- 여기에 API 결과를 추가 -->
    `;
}

// 페이지가 로드될 때 검색 결과를 표시
window.onload = displayResult;
