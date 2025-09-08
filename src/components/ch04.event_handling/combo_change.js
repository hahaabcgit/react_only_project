function App() {
    //선택된 카테고리
    let selecteedCategory = "";
    //콤보박스 change 이벤트
    const handleChange = (event) => {
        selecteedCategory = event.target.value;
        //    renderList();
    }

    return (
        <div className="App">
            <h2>콤보박스 Change 이벤트 예제</h2>
            <p>카테고리를 선택하면 목록과 이미지를 표시합니다.</p>
            <select onChange={handleChange}>
                <option value="">-- 선택하세요 -- </option>
                <option value="bread">빵</option>
                <option value="drink">음료수</option>

            </select>
            <div id="list_container"></div>
            <div>
                <img
                    id="large_image"
                    alt="선택된 이미지"
                    width="300"
                    height="300"
                />

            </div>

            <ul>

                <li>크로아상</li>
                <li>바게트</li>
                <li>브리오슈</li>
            </ul>
            <ol>
                <li>아메리카노</li>
                <li>카페라떼</li>
                <li>녹차</li>
            </ol>



        </div>
    );
}


export default App;