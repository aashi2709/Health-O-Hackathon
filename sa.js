function calculateScore() {
    let anxietyScore = 0;
    let depressionScore = 0;
    let stressScore = 0;

    // Get all answers
    document.querySelectorAll("select[name='anxiety']").forEach(select => {
        anxietyScore += parseInt(select.value);
    });

    document.querySelectorAll("select[name='depression']").forEach(select => {
        depressionScore += parseInt(select.value);
    });

    document.querySelectorAll("select[name='stress']").forEach(select => {
        stressScore += parseInt(select.value);
    });

    // Determine results based on severity
    let anxietyResult = getResultText(anxietyScore, "Anxiety");
    let depressionResult = getResultText(depressionScore, "Depression");
    let stressResult = getResultText(stressScore, "Stress");

    document.getElementById("result").innerHTML = `
        <h2>Your Assessment Results</h2>
        <p>${anxietyResult}</p>
        <p>${depressionResult}</p>
        <p>${stressResult}</p>
    `;
}

function getResultText(score, type) {
    if (score <= 2) return `✅ ${type}: Normal`;
    if (score <= 4) return `⚠️ ${type}: Mild`;
    if (score <= 6) return `⚠️ ${type}: Moderate`;
    return `🚨 ${type}: Severe (Consider seeking professional help)`;
}
