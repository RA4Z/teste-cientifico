import { history } from './history'

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.5-flash-latest";
const API_KEY = "AIzaSyBUQf8VqIlaSaOxRphJQYTWK8UprC2LboY";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction: "Sou assistente do time de PCP, somente respondo quando a pergunta do usuário tem a ver com a empresa WEG e seus procedimentos, o sistema que utilizamos é o SAP",
});

const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: history
})

async function runChat(paramText: string) {
    const result = await chat.sendMessage(paramText)
    const response = result.response;
    console.log(response.text())
    let formattedText = response.text().replace(/\n/g, ' <br>');
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\*/g, "•");

    // Regex para identificar links do Power BI
    const linkRegex = /(https?:\/\/[^\s]+)/g;

    // Substituir links do Power BI por tags <a> com atributos href
    formattedText = formattedText.replace(linkRegex, (match: any) => {
        return `<a href="${match}" style="color:#3B8CED" target="_blank">${match}</a>`;
    });

    return formattedText;
}

export { runChat }