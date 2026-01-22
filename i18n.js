// i18n.js - Lightweight internationalization module
const translations = {
    ko: {
        // Brand (kept in Korean for identity, but can be translated)
        brand: "마음의 색깔",

        // Navigation
        nav_about: "소개",
        nav_results: "결과 유형",
        nav_privacy: "개인정보처리방침",
        nav_terms: "이용약관",

        // Index page
        index_title: "나의 마음 색깔은 무엇일까?",
        index_subtitle: "스무고개 질문으로 알아보는 나의 진짜 성향",
        index_start_btn: "테스트 시작하기",
        index_img_alt: "따뜻한 느낌의 다양한 색깔의 실타래",

        // Footer
        footer_copyright: "&copy; 2026 마음의 색깔. All Rights Reserved.",

        // About page
        about_title: "소개",
        about_story_title: "우리의 이야기",
        about_story_p1: "'마음의 색깔 찾기'는 간단한 스무고개 질문을 통해 자신도 몰랐던 내면의 성향을 발견하는 심리 테스트 서비스입니다.",
        about_story_p2: "저희는 모든 사람이 각자 고유의 아름다운 색깔을 가지고 있다고 믿습니다. 복잡한 세상 속에서 잠시 멈춰, 자신의 마음의 소리에 귀 기울여보는 시간을 가져보세요. 저희 테스트가 그 여정에 작은 등불이 되어줄 것입니다.",
        about_notice_title: "주의사항",
        about_notice_p: "본 테스트의 결과는 전문적인 심리 진단이 아니며, 즐거움과 자기 이해를 돕기 위한 참고 자료로만 활용해주시기 바랍니다.",

        // Results page
        results_title: "8가지 마음의 색깔",
        results_subtitle: "당신은 어떤 색깔에 가장 가까운가요? 저희 테스트는 당신의 성향을 8가지 유형으로 나누어 설명합니다. 각 유형의 간략한 특징을 살펴보세요.",

        // Result types (titles)
        result_ACE_title: "현실적인 모험가 (ACE)",
        result_ACF_title: "따뜻한 현실주의자 (ACF)",
        result_ADE_title: "창의적인 탐험가 (ADE)",
        result_ADF_title: "이상적인 중재자 (ADF)",
        result_BCE_title: "신중한 전략가 (BCE)",
        result_BCF_title: "다정한 현실주의자 (BCF)",
        result_BDE_title: "고독한 발명가 (BDE)",
        result_BDF_title: "낭만적인 이상가 (BDF)",

        // Result types (short descriptions for results page)
        result_ACE_short: "활기찬 에너지와 현실적인 감각으로 계획을 세우고 실천하는 리더입니다.",
        result_ACF_short: "관계와 화합을 중시하며 주변에 실질적인 도움을 주는 안정적인 사람입니다.",
        result_ADE_short: "넘치는 호기심과 논리적인 사고로 새로운 아이디어를 탐험하고 실현합니다.",
        result_ADF_short: "깊은 공감 능력과 창의력으로 사람들 사이의 조화를 꿈꾸는 이상주의자입니다.",
        result_BCE_short: "날카로운 통찰력과 논리로 복잡한 문제를 분석하고 최적의 해결책을 찾습니다.",
        result_BCF_short: "조용하지만 묵묵한 행동으로 가까운 사람들에게 깊은 애정과 신뢰를 줍니다.",
        result_BDE_short: "자신만의 세계에서 복잡한 이론을 탐구하며 세상을 새로운 관점으로 바라봅니다.",
        result_BDF_short: "섬세한 감성으로 일상에서 특별한 의미를 발견하고 사람들에게 감동을 줍니다.",

        // Result types (full descriptions)
        result_ACE_desc: "당신은 활기찬 에너지와 현실적인 감각을 겸비한 사람입니다. 새로운 경험을 즐기면서도 두 발은 땅에 딛고 있죠. 계획을 세우고 실천하는 능력이 뛰어나며, 사람들과 어울려 구체적인 목표를 달성하는 데서 큰 기쁨을 느낍니다. 타고난 리더십과 실행력으로 어떤 그룹에서든 중심적인 역할을 수행하곤 합니다. 당신의 존재는 멈춰있는 계획도 움직이게 만드는 활기찬 에너지를 줍니다.",
        result_ACF_desc: "당신은 사람들과의 관계를 소중히 여기면서도 현실적인 판단력을 잃지 않는 균형 잡힌 사람입니다. 주변 사람들을 잘 챙기고 실질적인 도움을 주는 것을 좋아하며, 당신의 따뜻하고 안정적인 매력에 많은 사람들이 신뢰를 보냅니다. 당신은 공동체의 화합을 중요하게 생각하며, 묵묵히 자신의 역할을 다하여 주변에 긍정적인 영향을 끼칩니다. 다른 사람의 필요를 먼저 헤아리는 이타적인 마음씨는 당신을 더욱 빛나게 합니다.",
        result_ADE_desc: "당신은 넘치는 호기심과 상상력으로 세상을 탐험하는 사람입니다. 끊임없이 새로운 아이디어를 떠올리고, 논리적인 사고를 통해 그 아이디어를 실현시킬 방법을 찾아냅니다. 당신의 독창성은 세상을 더 흥미로운 곳으로 만듭니다. 늘 새로운 가능성을 탐색하기에, 정체되어 있는 것을 견디지 못하고 변화를 주도하는 경향이 있습니다. 당신의 아이디어는 종종 기술과 예술의 경계를 넘나들며 혁신을 이끌어 냅니다.",
        result_ADF_desc: "당신은 풍부한 상상력과 깊은 공감 능력을 가진 이상주의자입니다. 사람들의 마음을 잘 이해하고, 모두가 조화롭게 어울리는 세상을 꿈꿉니다. 당신의 창의력과 따뜻한 마음은 주변 사람들에게 영감을 줍니다. 당신은 말 한마디에도 깊은 의미를 담아 전달하는 능력이 있으며, 갈등 상황에서 양쪽의 입장을 조율하는 데 탁월합니다. 당신의 존재만으로도 삭막한 현실이 조금 더 아름답고 의미 있는 곳이 됩니다.",
        result_BCE_desc: "당신은 조용하고 신중하지만, 누구보다 날카로운 통찰력과 논리를 가진 사람입니다. 혼자만의 시간에 에너지를 얻으며, 복잡한 문제도 차분하게 분석하여 최적의 해결책을 찾아냅니다. 당신의 깊이 있는 지식과 전략은 많은 사람들에게 길잡이가 되어줍니다. 겉으로 드러내지 않아도, 당신의 머릿속에서는 수많은 시뮬레이션이 이루어지고 있습니다. 장기적인 관점에서 문제를 바라보는 당신의 능력은 어려운 상황을 해결하는 결정적인 열쇠가 됩니다.",
        result_BCF_desc: "당신은 조용한 환경에서 편안함을 느끼지만, 마음속에는 사람들에 대한 깊은 애정을 품고 있는 사람입니다. 가까운 사람들을 세심하게 챙기며, 실질적인 도움을 통해 사랑을 표현합니다. 당신의 묵묵한 다정함은 주변에 안정감을 줍니다. 당신은 화려한 언변보다는 꾸준하고 성실한 행동으로 자신의 마음을 증명하는 타입입니다. 당신의 곁에 있는 사람들은 당신이 얼마나 든든하고 믿음직한 존재인지 잘 알고 있습니다.",
        result_BDE_desc: "당신은 자신만의 세계에서 무한한 아이디어를 탐구하는 논리적인 사색가입니다. 복잡한 이론과 추상적인 개념에 매료되며, 혼자만의 시간을 통해 얻은 영감을 바탕으로 세상을 새로운 관점으로 바라봅니다. 당신의 독창적인 사고는 새로운 발명을 이끌어냅니다. 다른 사람들이 보지 못하는 패턴과 원리를 발견하는 데 능숙하며, 그 지식을 바탕으로 새로운 시스템을 구축하는 것을 즐깁니다. 당신의 탐구 정신은 인류의 지식을 한 단계 발전시킬 잠재력을 가지고 있습니다.",
        result_BDF_desc: "당신은 자신만의 내면 세계가 풍부한 몽상가이자 예술가입니다. 세상의 아름다움을 발견하고, 깊은 공감 능력으로 사람들의 감정을 이해합니다. 당신의 섬세한 감성과 독창적인 상상력은 세상을 더 아름답게 만드는 힘을 가지고 있습니다. 당신은 평범한 일상 속에서도 특별한 의미와 아름다움을 찾아내는 능력이 있습니다. 당신이 표현하는 생각과 감정들은 다른 사람들에게 큰 감동과 위로를 주곤 합니다.",

        // Test result page
        result_heading: "당신의 마음 색깔은...",
        result_retry: "다시하기",
        result_view_all: "전체 결과 유형 보기",

        // Questions
        q1: "주말 저녁, 당신의 선택은?",
        q1_a1: "친구들과 함께하는 파티",
        q1_a2: "집에서 즐기는 영화 감상",

        q2: "새로운 사람을 만나는 자리는?",
        q2_a1: "에너지를 얻고 즐겁다",
        q2_a2: "조금은 피곤하고 기가 빨린다",

        q3: "여행을 간다면?",
        q3_a1: "다양한 활동이 가득한 여행",
        q3_a2: "아무것도 안하고 쉬는 여행",

        q4: "당신의 대화 스타일은?",
        q4_a1: "주로 말을 하는 편",
        q4_a2: "주로 듣는 편",

        q5: "관심사가 같은 동호회에 나갔다.",
        q5_a1: "처음 본 사람들과도 쉽게 어울린다",
        q5_a2: "친해지는 데 시간이 걸린다",

        q6: "힘든 일이 있을 때,",
        q6_a1: "친구에게 털어놓고 위로를 받는다",
        q6_a2: "혼자 조용히 생각하며 정리한다",

        q7: "당신의 SNS는?",
        q7_a1: "나의 일상을 기록하고 공유한다",
        q7_a2: "주로 다른 사람 소식을 본다",

        q8: "영화를 볼 때 더 끌리는 것은?",
        q8_a1: "실화를 바탕으로 한 이야기",
        q8_a2: "상상력이 가득한 판타지 세계",

        q9: "새로운 가구를 조립해야 한다면?",
        q9_a1: "설명서를 차근차근 따라한다",
        q9_a2: "일단 부딪혀보며 감으로 조립한다",

        q10: "'구름' 하면 떠오르는 것은?",
        q10_a1: "수증기가 응결된 것",
        q10_a2: "솜사탕, 동물 모양 등 여러가지 상상",

        q11: "대화할 때 나는",
        q11_a1: "사실과 경험에 근거해 말한다",
        q11_a2: "비유나 은유를 들어 풍부하게 말한다",

        q12: "친구가 고민 상담을 할 때,",
        q12_a1: "현실적인 해결책을 제시해준다",
        q12_a2: "가능성과 미래에 대해 이야기한다",

        q13: "더 중요하다고 생각하는 것은?",
        q13_a1: "현재의 확실한 행복",
        q13_a2: "미래의 무한한 가능성",

        q14: "일을 할 때 나의 방식은?",
        q14_a1: "정해진 규칙과 절차를 따르는 것이 편하다",
        q14_a2: "새롭고 독창적인 방식을 시도하는 것을 즐긴다",

        q15: "친구가 슬퍼할 때 당신의 반응은?",
        q15_a1: "왜 슬픈지 원인을 분석하고 해결책을 찾으려 한다",
        q15_a2: "먼저 친구의 감정에 공감하고 위로한다",

        q16: "결정을 내릴 때,",
        q16_a1: "객관적인 사실과 데이터를 근거로 한다",
        q16_a2: "나와 다른 사람의 감정을 중요하게 고려한다",

        q17: "선물을 고를 때,",
        q17_a1: "상대방에게 실용적이고 필요한 물건",
        q17_a2: "상대방과의 추억이나 감동을 줄 수 있는 물건",

        q18: "나는",
        q18_a1: "원리원칙을 중요하게 생각한다",
        q18_a2: "상황에 따른 융통성을 중요하게 생각한다",

        q19: "갈등이 생겼을 때,",
        q19_a1: "무엇이 옳고 그른지 명확히 하는게 우선이다",
        q19_a2: "모두의 감정이 상하지 않게 조율하는게 우선이다",

        q20: "더 듣고 싶은 칭찬은?",
        q20_a1: "'정말 똑똑하다!'",
        q20_a2: "'정말 따뜻한 사람이다!'",

        // Privacy page
        privacy_title: "개인정보처리방침",
        privacy_effective: "시행일: 2026년 1월 18일",
        privacy_overview_title: "개요",
        privacy_overview_p: "'마음의 색깔 찾기'(이하 '서비스')는 어떠한 개인정보도 수집, 저장, 또는 처리하지 않음을 원칙으로 합니다.",
        privacy_section1_title: "1. 수집하는 개인정보 없음",
        privacy_section1_p: "본 서비스는 심리 테스트를 진행하는 동안 사용자의 이름, 이메일, 연락처 등 식별 가능한 어떠한 개인정보도 요구하거나 수집하지 않습니다. 테스트의 모든 과정은 익명으로 진행됩니다.",
        privacy_section2_title: "2. 쿠키 및 로그 파일",
        privacy_section2_p: "서비스는 제3자 광고(예: Google AdSense)를 포함할 수 있습니다. 이러한 광고 제공업체는 광고의 효과를 측정하고 사용자에게 맞춤화된 광고를 제공하기 위해 쿠키나 웹 비콘을 사용할 수 있습니다. 이 과정에서 수집되는 정보는 광고 제공업체의 개인정보처리방침에 따라 관리되며, 본 서비스는 해당 정보에 접근할 수 없습니다.",
        privacy_section3_title: "3. 데이터 보안",
        privacy_section3_p: "본 서비스는 개인정보를 수집하지 않으므로, 개인정보 유출의 위험이 없습니다.",
        privacy_section4_title: "4. 정책 변경",
        privacy_section4_p: "본 개인정보처리방침은 법령 및 방침에 따라 변경될 수 있으며, 변경 시 공지사항을 통해 고지하겠습니다.",

        // Terms page
        terms_title: "이용약관",
        terms_article1_title: "제1조 (목적)",
        terms_article1_p: "본 약관은 '마음의 색깔 찾기' 서비스(이하 '서비스')의 이용과 관련하여 서비스와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
        terms_article2_title: "제2조 (서비스의 제공)",
        terms_article2_p: "본 서비스는 사용자가 자신의 성향을 탐색할 수 있도록 돕는 심리 테스트 콘텐츠를 무료로 제공합니다. 테스트 결과는 오락 및 참고 목적으로만 사용되어야 하며, 전문적인 심리 진단을 대체할 수 없습니다.",
        terms_article3_title: "제3조 (사용자의 의무)",
        terms_article3_p: "사용자는 서비스를 비상업적이고 개인적인 용도로만 사용할 수 있으며, 서비스의 콘텐츠를 무단으로 복제, 수정, 배포할 수 없습니다.",
        terms_article4_title: "제4조 (면책조항)",
        terms_article4_p: "서비스는 제공되는 정보의 완전성이나 정확성에 대해 보증하지 않으며, 사용자가 테스트 결과를 신뢰하여 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.",
        terms_article5_title: "제5조 (약관의 변경)",
        terms_article5_p: "서비스는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내에 공지함으로써 효력이 발생합니다.",

        // 404 page
        error_404_title: "페이지를 찾을 수 없습니다",
        error_404_desc: "요청하신 페이지가 존재하지 않거나, 이동되었거나, 삭제되었을 수 있습니다.<br>아래 링크를 통해 원하시는 페이지로 이동해 주세요.",
        error_404_start: "테스트 시작하기",
        error_404_results: "결과 유형 보기",
        error_404_about: "서비스 소개"
    },

    en: {
        // Brand
        brand: "Color of Mind",

        // Navigation
        nav_about: "About",
        nav_results: "Result Types",
        nav_privacy: "Privacy Policy",
        nav_terms: "Terms of Service",

        // Index page
        index_title: "What is the Color of Your Mind?",
        index_subtitle: "Discover your true personality through 20 questions",
        index_start_btn: "Start Test",
        index_img_alt: "Colorful yarn balls with warm feeling",

        // Footer
        footer_copyright: "&copy; 2026 Color of Mind. All Rights Reserved.",

        // About page
        about_title: "About",
        about_story_title: "Our Story",
        about_story_p1: "'Find Your Color of Mind' is a psychological test service that helps you discover your inner personality traits through simple 20 questions.",
        about_story_p2: "We believe that everyone has their own unique and beautiful color. Take a moment to pause in this complex world and listen to the voice of your heart. Our test will be a small light on that journey.",
        about_notice_title: "Disclaimer",
        about_notice_p: "The results of this test are not professional psychological diagnoses and should only be used as a reference for enjoyment and self-understanding.",

        // Results page
        results_title: "8 Colors of Mind",
        results_subtitle: "Which color are you closest to? Our test categorizes your personality into 8 types. Explore the brief characteristics of each type.",

        // Result types (titles)
        result_ACE_title: "Realistic Adventurer (ACE)",
        result_ACF_title: "Warm Realist (ACF)",
        result_ADE_title: "Creative Explorer (ADE)",
        result_ADF_title: "Idealistic Mediator (ADF)",
        result_BCE_title: "Prudent Strategist (BCE)",
        result_BCF_title: "Gentle Realist (BCF)",
        result_BDE_title: "Solitary Inventor (BDE)",
        result_BDF_title: "Romantic Idealist (BDF)",

        // Result types (short descriptions)
        result_ACE_short: "A leader who makes plans and takes action with vibrant energy and practical sense.",
        result_ACF_short: "A stable person who values relationships and harmony, providing practical help to others.",
        result_ADE_short: "Explores and realizes new ideas with overflowing curiosity and logical thinking.",
        result_ADF_short: "An idealist who dreams of harmony among people with deep empathy and creativity.",
        result_BCE_short: "Analyzes complex problems and finds optimal solutions with sharp insight and logic.",
        result_BCF_short: "Quietly but steadily gives deep affection and trust to close ones through actions.",
        result_BDE_short: "Explores complex theories in their own world and views the world from new perspectives.",
        result_BDF_short: "Discovers special meaning in everyday life and touches people with delicate sensitivity.",

        // Result types (full descriptions)
        result_ACE_desc: "You are someone who combines vibrant energy with practical sense. You enjoy new experiences while keeping your feet firmly on the ground. You excel at making plans and putting them into action, finding great joy in achieving concrete goals with others. With natural leadership and execution skills, you often play a central role in any group. Your presence brings dynamic energy that can set even stagnant plans in motion.",
        result_ACF_desc: "You are a balanced person who values relationships while maintaining practical judgment. You enjoy taking care of those around you and providing substantial help, and many people trust your warm and stable charm. You value community harmony and quietly fulfill your role, positively influencing those around you. Your altruistic nature of considering others' needs first makes you shine even brighter.",
        result_ADE_desc: "You are someone who explores the world with overflowing curiosity and imagination. You constantly come up with new ideas and find ways to realize them through logical thinking. Your originality makes the world a more interesting place. Always exploring new possibilities, you tend to lead change rather than tolerate stagnation. Your ideas often cross the boundaries of technology and art, driving innovation.",
        result_ADF_desc: "You are an idealist with rich imagination and deep empathy. You understand people's hearts well and dream of a world where everyone lives in harmony. Your creativity and warm heart inspire those around you. You have the ability to convey deep meaning in every word, and you excel at mediating between opposing sides in conflict situations. Your mere presence makes the harsh reality a little more beautiful and meaningful.",
        result_BCE_desc: "You are quiet and prudent, but you have sharper insight and logic than anyone. You gain energy from alone time and calmly analyze even complex problems to find optimal solutions. Your deep knowledge and strategies guide many people. Even without showing it outwardly, countless simulations are happening in your mind. Your ability to view problems from a long-term perspective becomes the decisive key to solving difficult situations.",
        result_BCF_desc: "You feel comfortable in quiet environments, but you hold deep affection for people in your heart. You carefully take care of those close to you and express love through practical help. Your quiet warmth provides stability to those around you. Rather than flashy eloquence, you prove your heart through consistent and sincere actions. People around you know well how dependable and trustworthy you are.",
        result_BDE_desc: "You are a logical thinker who explores infinite ideas in your own world. You are fascinated by complex theories and abstract concepts, viewing the world from new perspectives based on inspiration gained through alone time. Your original thinking leads to new inventions. You are skilled at discovering patterns and principles that others cannot see, and you enjoy building new systems based on that knowledge. Your spirit of inquiry has the potential to advance human knowledge to the next level.",
        result_BDF_desc: "You are a dreamer and artist with a rich inner world. You discover the beauty of the world and understand people's emotions through deep empathy. Your delicate sensibility and original imagination have the power to make the world more beautiful. You have the ability to find special meaning and beauty even in ordinary daily life. The thoughts and feelings you express often give great emotion and comfort to others.",

        // Test result page
        result_heading: "Your Color of Mind is...",
        result_retry: "Try Again",
        result_view_all: "View All Result Types",

        // Questions
        q1: "On a weekend evening, your choice is?",
        q1_a1: "A party with friends",
        q1_a2: "Watching movies at home",

        q2: "Meeting new people is?",
        q2_a1: "Energizing and enjoyable",
        q2_a2: "A bit tiring and draining",

        q3: "If you go on a trip?",
        q3_a1: "A trip full of various activities",
        q3_a2: "A trip doing nothing and relaxing",

        q4: "Your conversation style is?",
        q4_a1: "Usually the one talking",
        q4_a2: "Usually the one listening",

        q5: "You joined a club with similar interests.",
        q5_a1: "I easily get along with people I just met",
        q5_a2: "It takes time for me to get close",

        q6: "When you're going through a hard time,",
        q6_a1: "I talk to friends and receive comfort",
        q6_a2: "I quietly think and sort things out alone",

        q7: "Your social media is?",
        q7_a1: "I record and share my daily life",
        q7_a2: "I mainly look at others' updates",

        q8: "When watching movies, what attracts you more?",
        q8_a1: "Stories based on true events",
        q8_a2: "Fantasy worlds full of imagination",

        q9: "If you need to assemble new furniture?",
        q9_a1: "I follow the instructions step by step",
        q9_a2: "I just dive in and assemble by intuition",

        q10: "When you think of 'clouds', what comes to mind?",
        q10_a1: "Condensed water vapor",
        q10_a2: "Cotton candy, animal shapes, various imaginations",

        q11: "When having a conversation, I",
        q11_a1: "Speak based on facts and experience",
        q11_a2: "Speak richly with metaphors and analogies",

        q12: "When a friend comes for advice,",
        q12_a1: "I offer practical solutions",
        q12_a2: "I talk about possibilities and the future",

        q13: "What do you think is more important?",
        q13_a1: "Certain happiness in the present",
        q13_a2: "Infinite possibilities of the future",

        q14: "Your way of working is?",
        q14_a1: "I prefer following set rules and procedures",
        q14_a2: "I enjoy trying new and original methods",

        q15: "When a friend is sad, your reaction is?",
        q15_a1: "Analyze why they're sad and try to find solutions",
        q15_a2: "First empathize with their feelings and comfort them",

        q16: "When making decisions,",
        q16_a1: "Based on objective facts and data",
        q16_a2: "Considering my and others' feelings importantly",

        q17: "When choosing a gift,",
        q17_a1: "Something practical and needed by the person",
        q17_a2: "Something that can evoke memories or emotions",

        q18: "I",
        q18_a1: "Value principles and rules",
        q18_a2: "Value flexibility depending on the situation",

        q19: "When conflict arises,",
        q19_a1: "Clarifying what's right and wrong comes first",
        q19_a2: "Mediating so no one's feelings get hurt comes first",

        q20: "Which compliment do you want to hear more?",
        q20_a1: "'You're so smart!'",
        q20_a2: "'You're such a warm person!'",

        // Privacy page
        privacy_title: "Privacy Policy",
        privacy_effective: "Effective Date: January 18, 2026",
        privacy_overview_title: "Overview",
        privacy_overview_p: "'Find Your Color of Mind' (hereinafter 'Service') does not collect, store, or process any personal information as a principle.",
        privacy_section1_title: "1. No Personal Information Collected",
        privacy_section1_p: "This Service does not request or collect any identifiable personal information such as name, email, or contact information during the psychological test. All processes are conducted anonymously.",
        privacy_section2_title: "2. Cookies and Log Files",
        privacy_section2_p: "The Service may include third-party advertisements (e.g., Google AdSense). These advertising providers may use cookies or web beacons to measure the effectiveness of advertisements and to provide personalized ads to users. Information collected in this process is managed according to the advertising provider's privacy policy, and this Service does not have access to such information.",
        privacy_section3_title: "3. Data Security",
        privacy_section3_p: "Since this Service does not collect personal information, there is no risk of personal information leakage.",
        privacy_section4_title: "4. Policy Changes",
        privacy_section4_p: "This privacy policy may be changed according to laws and policies, and any changes will be announced through notices.",

        // Terms page
        terms_title: "Terms of Service",
        terms_article1_title: "Article 1 (Purpose)",
        terms_article1_p: "These terms aim to regulate the rights, obligations, and responsibilities between the Service and users regarding the use of 'Find Your Color of Mind' service (hereinafter 'Service').",
        terms_article2_title: "Article 2 (Provision of Service)",
        terms_article2_p: "This Service provides psychological test content for free to help users explore their personality. Test results should only be used for entertainment and reference purposes and cannot replace professional psychological diagnosis.",
        terms_article3_title: "Article 3 (User's Obligations)",
        terms_article3_p: "Users may only use the Service for non-commercial and personal purposes and may not reproduce, modify, or distribute the Service's content without authorization.",
        terms_article4_title: "Article 4 (Disclaimer)",
        terms_article4_p: "The Service does not guarantee the completeness or accuracy of the information provided, and is not responsible for any damages resulting from users relying on test results.",
        terms_article5_title: "Article 5 (Changes to Terms)",
        terms_article5_p: "The Service may change these terms when necessary, and the changed terms become effective when announced within the Service.",

        // 404 page
        error_404_title: "Page Not Found",
        error_404_desc: "The page you requested may not exist, may have been moved, or may have been deleted.<br>Please use the links below to navigate to the page you want.",
        error_404_start: "Start Test",
        error_404_results: "View Result Types",
        error_404_about: "About Service"
    }
};

// Current language state
let currentLang = localStorage.getItem('lang') || 'ko';

// Translation function
function t(key) {
    return translations[currentLang][key] || translations['ko'][key] || key;
}

// Get current language
function getLang() {
    return currentLang;
}

// Set language and update UI
function setLang(lang) {
    if (lang !== 'ko' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    updateLangToggle();
}

// Toggle language
function toggleLang() {
    setLang(currentLang === 'ko' ? 'en' : 'ko');
}

// Update language toggle button text
function updateLangToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'ko' ? 'English' : '한국어';
    }
}

// Update all translatable content on the page
function updatePageContent() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t(key);
        } else {
            el.innerHTML = t(key);
        }
    });

    // Update elements with data-i18n-alt attribute (for alt text)
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        el.alt = t(key);
    });

    // Update document title if there's a title element with data-i18n-title
    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
        document.title = t(titleKey);
    }
}

// Initialize i18n on page load
function initI18n() {
    // Set initial language from localStorage or default to 'ko'
    currentLang = localStorage.getItem('lang') || 'ko';
    document.documentElement.lang = currentLang;

    // Create and insert language toggle button if header nav exists
    const nav = document.querySelector('nav');
    if (nav && !document.getElementById('lang-toggle')) {
        const langBtn = document.createElement('button');
        langBtn.id = 'lang-toggle';
        langBtn.className = 'lang-toggle-btn';
        langBtn.textContent = currentLang === 'ko' ? 'English' : '한국어';
        langBtn.onclick = toggleLang;
        nav.appendChild(langBtn);
    }

    // Update all content
    updatePageContent();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export for use in other scripts
window.i18n = { t, getLang, setLang, toggleLang, translations };
