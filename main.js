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
    // Fallback for when i18n is not ready
    return key;
}

// Track current test state
let testInProgress = false;
let lastResultCode = null;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startTest);
    }

    // Listen for language changes to re-render current screen
    window.addEventListener('languageChanged', () => {
        if (testInProgress && lastResultCode) {
            // Re-render result screen
            showResult(lastResultCode);
        } else if (testInProgress && currentQuestionIndex < testData.questions.length) {
            // Re-render current question
            renderQuestion(currentQuestionIndex);
        }
    });
});

function startTest() {
    // Hide start screen
    const startScreen = document.querySelector('.start-screen');
    if (startScreen) {
        startScreen.style.display = 'none';
    }

    // Reset test state
    currentQuestionIndex = 0;
    Object.keys(userAnswers).forEach(key => userAnswers[key] = 0);
    testInProgress = true;
    lastResultCode = null;

    // Render the first question
    renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    if (!app) return;
    if (index >= testData.questions.length) {
        // End of test, calculate result
        calculateResult();
        return;
    }

    const questionData = testData.questions[index];
    const questionElement = document.createElement('div');
    questionElement.className = 'question-container fade-in';

    questionElement.innerHTML = `
        <p class="progress-bar">(${index + 1}/${testData.questions.length})</p>
        <h2 data-i18n="${questionData.qKey}">${t(questionData.qKey)}</h2>
        <div class="answer-buttons">
            <button class="answer-btn" data-type="${questionData.aKeys[0].type}" data-i18n="${questionData.aKeys[0].key}">${t(questionData.aKeys[0].key)}</button>
            <button class="answer-btn" data-type="${questionData.aKeys[1].type}" data-i18n="${questionData.aKeys[1].key}">${t(questionData.aKeys[1].key)}</button>
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
    if (!app) return;
    lastResultCode = resultCode;
    const resultData = testData.results[resultCode];
    if (!resultData) {
        console.error("Result code not found:", resultCode);
        app.innerHTML = `<p>Error: Result not found.</p>`;
        return;
    }

    const title = t(resultData.titleKey);
    const description = t(resultData.descKey);

    const resultElement = document.createElement('div');
    resultElement.className = 'result-container fade-in';

    const shareText = window.i18n && window.i18n.currentLang === 'en'
        ? `My Color of Mind is "${title}"! Take the test and find yours!`
        : `나의 마음의 색깔은 "${title}"입니다! 테스트하고 당신의 색깔을 찾아보세요!`;

    resultElement.innerHTML = `
        <h1 data-i18n="result_heading">${t('result_heading')}</h1>
        <h2 data-i18n="${resultData.titleKey}">${title}</h2>
        <img src="${resultData.image}" alt="${title}" class="result-image">
        <p data-i18n="${resultData.descKey}">${description}</p>
        <div class="share-section">
            <p class="share-label" data-i18n="result_share">${t('result_share')}</p>
            <div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="https://psychologicaltest.pages.dev/" data-a2a-title="${shareText}">
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_x"></a>
                <a class="a2a_button_line"></a>
                <a class="a2a_button_whatsapp"></a>
                <a class="a2a_button_facebook_messenger"></a>
                <a class="a2a_button_email"></a>
                <a class="a2a_button_copy_link"></a>
                <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
            </div>
        </div>
        <div class="result-buttons">
            <button onclick="location.href='index.html'" data-i18n="result_retry">${t('result_retry')}</button>
            <button onclick="location.href='results.html'" data-i18n="result_view_all">${t('result_view_all')}</button>
        </div>
    `;

    app.innerHTML = '';
    app.appendChild(resultElement);

    // Reinitialize AddToAny for dynamically added buttons
    if (window.a2a) {
        window.a2a.init_all();
    }
}
