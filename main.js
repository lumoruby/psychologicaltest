const app = document.getElementById('app');

// Test data with translation keys
const testData = {
    questions: [
        // Social Style (A: Active/Outgoing vs. B: Reserved/Calm) - 7 questions
        { qKey: "q1", aKeys: [{ key: "q1_a1", type: "A" }, { key: "q1_a2", type: "B" }] },
        { qKey: "q2", aKeys: [{ key: "q2_a1", type: "A" }, { key: "q2_a2", type: "B" }] },
        { qKey: "q3", aKeys: [{ key: "q3_a1", type: "A" }, { key: "q3_a2", type: "B" }] },
        { qKey: "q4", aKeys: [{ key: "q4_a1", type: "A" }, { key: "q4_a2", type: "B" }] },
        { qKey: "q5", aKeys: [{ key: "q5_a1", type: "A" }, { key: "q5_a2", type: "B" }] },
        { qKey: "q6", aKeys: [{ key: "q6_a1", type: "A" }, { key: "q6_a2", type: "B" }] },
        { qKey: "q7", aKeys: [{ key: "q7_a1", type: "A" }, { key: "q7_a2", type: "B" }] },

        // Thinking Style (C: Practical/Realistic vs. D: Imaginative/Creative) - 7 questions
        { qKey: "q8", aKeys: [{ key: "q8_a1", type: "C" }, { key: "q8_a2", type: "D" }] },
        { qKey: "q9", aKeys: [{ key: "q9_a1", type: "C" }, { key: "q9_a2", type: "D" }] },
        { qKey: "q10", aKeys: [{ key: "q10_a1", type: "C" }, { key: "q10_a2", type: "D" }] },
        { qKey: "q11", aKeys: [{ key: "q11_a1", type: "C" }, { key: "q11_a2", type: "D" }] },
        { qKey: "q12", aKeys: [{ key: "q12_a1", type: "C" }, { key: "q12_a2", type: "D" }] },
        { qKey: "q13", aKeys: [{ key: "q13_a1", type: "C" }, { key: "q13_a2", type: "D" }] },
        { qKey: "q14", aKeys: [{ key: "q14_a1", type: "C" }, { key: "q14_a2", type: "D" }] },

        // Emotional Style (E: Logical/Objective vs. F: Empathetic/Subjective) - 6 questions
        { qKey: "q15", aKeys: [{ key: "q15_a1", type: "E" }, { key: "q15_a2", type: "F" }] },
        { qKey: "q16", aKeys: [{ key: "q16_a1", type: "E" }, { key: "q16_a2", type: "F" }] },
        { qKey: "q17", aKeys: [{ key: "q17_a1", type: "E" }, { key: "q17_a2", type: "F" }] },
        { qKey: "q18", aKeys: [{ key: "q18_a1", type: "E" }, { key: "q18_a2", type: "F" }] },
        { qKey: "q19", aKeys: [{ key: "q19_a1", type: "E" }, { key: "q19_a2", type: "F" }] },
        { qKey: "q20", aKeys: [{ key: "q20_a1", type: "E" }, { key: "q20_a2", type: "F" }] },
    ],
    results: {
        "ACE": { titleKey: "result_ACE_title", descKey: "result_ACE_desc", image: "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg" },
        "ACF": { titleKey: "result_ACF_title", descKey: "result_ACF_desc", image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg" },
        "ADE": { titleKey: "result_ADE_title", descKey: "result_ADE_desc", image: "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg" },
        "ADF": { titleKey: "result_ADF_title", descKey: "result_ADF_desc", image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg" },
        "BCE": { titleKey: "result_BCE_title", descKey: "result_BCE_desc", image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" },
        "BCF": { titleKey: "result_BCF_title", descKey: "result_BCF_desc", image: "https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg" },
        "BDE": { titleKey: "result_BDE_title", descKey: "result_BDE_desc", image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg" },
        "BDF": { titleKey: "result_BDF_title", descKey: "result_BDF_desc", image: "https://images.pexels.com/photos/349749/pexels-photo-349749.jpeg" }
    }
};

let currentQuestionIndex = 0;
const userAnswers = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

// Helper function to get translation (uses global i18n if available)
function t(key) {
    if (window.i18n && window.i18n.t) {
        return window.i18n.t(key);
    }
    return key;
}

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

    // Reset test state
    currentQuestionIndex = 0;
    Object.keys(userAnswers).forEach(key => userAnswers[key] = 0);

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
        <h2>${t(questionData.qKey)}</h2>
        <div class="answer-buttons">
            <button class="answer-btn" data-type="${questionData.aKeys[0].type}">${t(questionData.aKeys[0].key)}</button>
            <button class="answer-btn" data-type="${questionData.aKeys[1].type}">${t(questionData.aKeys[1].key)}</button>
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
    const title = t(resultData.titleKey);
    const description = t(resultData.descKey);

    const resultElement = document.createElement('div');
    resultElement.classList.add('result-container');

    resultElement.innerHTML = `
        <h1>${t('result_heading')}</h1>
        <h2>${title}</h2>
        <img src="${resultData.image}" alt="${title}" class="result-image">
        <p>${description}</p>
        <div class="result-buttons">
            <button onclick="location.reload()">${t('result_retry')}</button>
            <button onclick="location.href='results.html'">${t('result_view_all')}</button>
        </div>
    `;

    app.innerHTML = '';
    app.appendChild(resultElement);
}
