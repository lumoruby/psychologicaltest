const app = document.getElementById('app');

const testData = {
    questions: [
        // Social Style (A: Active/Outgoing vs. B: Reserved/Calm) - 7 questions
        { q: "주말 저녁, 당신의 선택은?", a: [{ text: "친구들과 함께하는 파티", type: "A" }, { text: "집에서 즐기는 영화 감상", type: "B" }] },
        { q: "새로운 사람을 만나는 자리는?", a: [{ text: "에너지를 얻고 즐겁다", type: "A" }, { text: "조금은 피곤하고 기가 빨린다", type: "B" }] },
        { q: "여행을 간다면?", a: [{ text: "다양한 활동이 가득한 여행", type: "A" }, { text: "아무것도 안하고 쉬는 여행", type: "B" }] },
        { q: "당신의 대화 스타일은?", a: [{ text: "주로 말을 하는 편", type: "A" }, { text: "주로 듣는 편", type: "B" }] },
        { q: "관심사가 같은 동호회에 나갔다.", a: [{ text: "처음 본 사람들과도 쉽게 어울린다", type: "A" }, { text: "친해지는 데 시간이 걸린다", type: "B" }] },
        { q: "힘든 일이 있을 때,", a: [{ text: "친구에게 털어놓고 위로를 받는다", type: "A" }, { text: "혼자 조용히 생각하며 정리한다", type: "B" }] },
        { q: "당신의 SNS는?", a: [{ text: "나의 일상을 기록하고 공유한다", type: "A" }, { text: "주로 다른 사람 소식을 본다", type: "B" }] },

        // Thinking Style (C: Practical/Realistic vs. D: Imaginative/Creative) - 7 questions
        { q: "영화를 볼 때 더 끌리는 것은?", a: [{ text: "실화를 바탕으로 한 이야기", type: "C" }, { text: "상상력이 가득한 판타지 세계", type: "D" }] },
        { q: "새로운 가구를 조립해야 한다면?", a: [{ text: "설명서를 차근차근 따라한다", type: "C" }, { text: "일단 부딪혀보며 감으로 조립한다", type: "D" }] },
        { q: " '구름' 하면 떠오르는 것은?", a: [{ text: "수증기가 응결된 것", type: "C" }, { text: "솜사탕, 동물 모양 등 여러가지 상상", type: "D" }] },
        { q: "대화할 때 나는", a: [{ text: "사실과 경험에 근거해 말한다", type: "C" }, { text: "비유나 은유를 들어 풍부하게 말한다", type: "D" }] },
        { q: "친구가 고민 상담을 할 때,", a: [{ text: "현실적인 해결책을 제시해준다", type: "C" }, { text: "가능성과 미래에 대해 이야기한다", type: "D" }] },
        { q: "더 중요하다고 생각하는 것은?", a: [{ text: "현재의 확실한 행복", type: "C" }, { text: "미래의 무한한 가능성", type: "D" }] },
        { q: "일을 할 때 나의 방식은?", a: [{ text: "정해진 규칙과 절차를 따르는 것이 편하다", type: "C" }, { text: "새롭고 독창적인 방식을 시도하는 것을 즐긴다", type: "D" }] },

        // Emotional Style (E: Logical/Objective vs. F: Empathetic/Subjective) - 6 questions
        { q: "친구가 슬퍼할 때 당신의 반응은?", a: [{ text: "왜 슬픈지 원인을 분석하고 해결책을 찾으려 한다", type: "E" }, { text: "먼저 친구의 감정에 공감하고 위로한다", type: "F" }] },
        { q: "결정을 내릴 때,", a: [{ text: "객관적인 사실과 데이터를 근거로 한다", type: "E" }, { text: "나와 다른 사람의 감정을 중요하게 고려한다", type: "F" }] },
        { q: "선물을 고를 때,", a: [{ text: "상대방에게 실용적이고 필요한 물건", type: "E" }, { text: "상대방과의 추억이나 감동을 줄 수 있는 물건", type: "F" }] },
        { q: "나는", a: [{ text: "원리원칙을 중요하게 생각한다", type: "E" }, { text: "상황에 따른 융통성을 중요하게 생각한다", type: "F" }] },
        { q: "갈등이 생겼을 때,", a: [{ text: "무엇이 옳고 그른지 명확히 하는게 우선이다", type: "E" }, { text: "모두의 감정이 상하지 않게 조율하는게 우선이다", type: "F" }] },
        { q: "더 듣고 싶은 칭찬은?", a: [{ text: "'정말 똑똑하다!'", type: "E" }, { text: "'정말 따뜻한 사람이다!'", type: "F" }] },
    ],
    results: {
        "ACE": { title: "현실적인 모험가", description: "당신은 활기찬 에너지와 현실적인 감각을 겸비한 사람입니다. 새로운 경험을 즐기면서도 두 발은 땅에 딛고 있죠. 계획을 세우고 실천하는 능력이 뛰어나며, 사람들과 어울려 구체적인 목표를 달성하는 데서 큰 기쁨을 느낍니다. 타고난 리더십과 실행력으로 어떤 그룹에서든 중심적인 역할을 수행하곤 합니다. 당신의 존재는 멈춰있는 계획도 움직이게 만드는 활기찬 에너지를 줍니다.", image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg" },
        "ACF": { title: "따뜻한 현실주의자", description: "당신은 사람들과의 관계를 소중히 여기면서도 현실적인 판단력을 잃지 않는 균형 잡힌 사람입니다. 주변 사람들을 잘 챙기고 실질적인 도움을 주는 것을 좋아하며, 당신의 따뜻하고 안정적인 매력에 많은 사람들이 신뢰를 보냅니다. 당신은 공동체의 화합을 중요하게 생각하며, 묵묵히 자신의 역할을 다하여 주변에 긍정적인 영향을 끼칩니다. 다른 사람의 필요를 먼저 헤아리는 이타적인 마음씨는 당신을 더욱 빛나게 합니다.", image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg" },
        "ADE": { title: "창의적인 탐험가", description: "당신은 넘치는 호기심과 상상력으로 세상을 탐험하는 사람입니다. 끊임없이 새로운 아이디어를 떠올리고, 논리적인 사고를 통해 그 아이디어를 실현시킬 방법을 찾아냅니다. 당신의 독창성은 세상을 더 흥미로운 곳으로 만듭니다. 늘 새로운 가능성을 탐색하기에, 정체되어 있는 것을 견디지 못하고 변화를 주도하는 경향이 있습니다. 당신의 아이디어는 종종 기술과 예술의 경계를 넘나들며 혁신을 이끌어 냅니다.", image: "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg" },
        "ADF": { title: "이상적인 중재자", description: "당신은 풍부한 상상력과 깊은 공감 능력을 가진 이상주의자입니다. 사람들의 마음을 잘 이해하고, 모두가 조화롭게 어울리는 세상을 꿈꿉니다. 당신의 창의력과 따뜻한 마음은 주변 사람들에게 영감을 줍니다. 당신은 말 한마디에도 깊은 의미를 담아 전달하는 능력이 있으며, 갈등 상황에서 양쪽의 입장을 조율하는 데 탁월합니다. 당신의 존재만으로도 삭막한 현실이 조금 더 아름답고 의미 있는 곳이 됩니다.", image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg" },
        "BCE": { title: "신중한 전략가", description: "당신은 조용하고 신중하지만, 누구보다 날카로운 통찰력과 논리를 가진 사람입니다. 혼자만의 시간에 에너지를 얻으며, 복잡한 문제도 차분하게 분석하여 최적의 해결책을 찾아냅니다. 당신의 깊이 있는 지식과 전략은 많은 사람들에게 길잡이가 되어줍니다. 겉으로 드러내지 않아도, 당신의 머릿속에서는 수많은 시뮬레이션이 이루어지고 있습니다. 장기적인 관점에서 문제를 바라보는 당신의 능력은 어려운 상황을 해결하는 결정적인 열쇠가 됩니다.", image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" },
        "BCF": { title: "다정한 현실주의자", description: "당신은 조용한 환경에서 편안함을 느끼지만, 마음속에는 사람들에 대한 깊은 애정을 품고 있는 사람입니다. 가까운 사람들을 세심하게 챙기며, 실질적인 도움을 통해 사랑을 표현합니다. 당신의 묵묵한 다정함은 주변에 안정감을 줍니다. 당신은 화려한 언변보다는 꾸준하고 성실한 행동으로 자신의 마음을 증명하는 타입입니다. 당신의 곁에 있는 사람들은 당신이 얼마나 든든하고 믿음직한 존재인지 잘 알고 있습니다.", image: "https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg" },
        "BDE": { title: "고독한 발명가", description: "당신은 자신만의 세계에서 무한한 아이디어를 탐구하는 논리적인 사색가입니다. 복잡한 이론과 추상적인 개념에 매료되며, 혼자만의 시간을 통해 얻은 영감을 바탕으로 세상을 새로운 관점으로 바라봅니다. 당신의 독창적인 사고는 새로운 발명을 이끌어냅니다. 다른 사람들이 보지 못하는 패턴과 원리를 발견하는 데 능숙하며, 그 지식을 바탕으로 새로운 시스템을 구축하는 것을 즐깁니다. 당신의 탐구 정신은 인류의 지식을 한 단계 발전시킬 잠재력을 가지고 있습니다.", image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg" },
        "BDF": { title: "낭만적인 이상가", description: "당신은 자신만의 내면 세계가 풍부한 몽상가이자 예술가입니다. 세상의 아름다움을 발견하고, 깊은 공감 능력으로 사람들의 감정을 이해합니다. 당신의 섬세한 감성과 독창적인 상상력은 세상을 더 아름답게 만드는 힘을 가지고 있습니다. 당신은 평범한 일상 속에서도 특별한 의미와 아름다움을 찾아내는 능력이 있습니다. 당신이 표현하는 생각과 감정들은 다른 사람들에게 큰 감동과 위로를 주곤 합니다.", image: "https://images.pexels.com/photos/349749/pexels-photo-349749.jpeg" }
    }
};

let currentQuestionIndex = 0;
const userAnswers = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startTest);
    }
});

function startTest() {
    // Hide start screen
    const startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';
    
    // Render the first question
    renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    if (index >= testData.questions.length) {
        // End of test, calculate result
        calculateResult();
        return;
    }

    const questionData = testData.questions[index];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-container');
    
    questionElement.innerHTML = `
        <p class="progress-bar">(${index + 1}/${testData.questions.length})</p>
        <h2>${questionData.q}</h2>
        <div class="answer-buttons">
            <button class="answer-btn" data-type="${questionData.a[0].type}">${questionData.a[0].text}</button>
            <button class="answer-btn" data-type="${questionData.a[1].type}">${questionData.a[1].text}</button>
        </div>
    `;
    
    app.innerHTML = ''; // Clear previous content
    app.appendChild(questionElement);

    document.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');

            // Add a subtle animation
            e.target.classList.add('selected');

            setTimeout(() => {
                answerQuestion(type);
            }, 300); // Wait for animation
        });
    });
}

function answerQuestion(type) {
    userAnswers[type]++;
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
}

function calculateResult() {
    const social = userAnswers.A > userAnswers.B ? 'A' : 'B';
    const thinking = userAnswers.C > userAnswers.D ? 'C' : 'D';
    const emotional = userAnswers.E > userAnswers.F ? 'E' : 'F';
    
    const resultCode = `${social}${thinking}${emotional}`;
    showResult(resultCode);
}

function showResult(resultCode) {
    const resultData = testData.results[resultCode];
    
    const resultElement = document.createElement('div');
    resultElement.classList.add('result-container');
    
    resultElement.innerHTML = `
        <h1>당신의 마음 색깔은...</h1>
        <h2>${resultData.title}</h2>
        <img src="${resultData.image}" alt="${resultData.title}" class="result-image">
        <p>${resultData.description}</p>
        <div class="result-buttons">
            <button onclick="location.reload()">다시하기</button>
            <button onclick="location.href='results.html'">전체 결과 유형 보기</button>
        </div>
    `;
    
    app.innerHTML = '';
    app.appendChild(resultElement);
}
