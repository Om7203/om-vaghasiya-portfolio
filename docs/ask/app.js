const copy = {
  en: { back: 'Back to portfolio ↗', eyebrow: 'AN INTERACTIVE INTRODUCTION', title: 'Ask about <em>my work.</em>', intro: 'Curious about a project, a tool I used, or the path that brought me into AI? Ask here. The assistant draws on this public portfolio and shows where each answer comes from.', starting: 'START SOMEWHERE', question1: 'What did you work on at Bauhaus Luftfahrt? <span>↗</span>', question2: 'Which projects can I try or inspect? <span>↗</span>', question3: 'How did you get into AI? <span>↗</span>', question4: 'What can you bring to an AI team? <span>↗</span>', sourceLabel: 'ANSWERED FROM PUBLIC WORK', sourceText: 'This guide can point you to published case studies and code. For questions about private employer work, please ask me directly.', explore: 'Explore the work ↗', chatTitle: 'A conversation with the portfolio', connecting: 'Checking connection…', ready: 'Live · Gemini', offline: 'Not connected yet', assistant: 'PORTFOLIO GUIDE · AI', welcome: "Hi. I can help you find the work behind Om's experience and skills. What would you like to know?", questionLabel: 'Your question', placeholder: 'Ask about my work, projects, or background…', send: 'Send <span aria-hidden="true">↗</span>', fineprint: "AI can make mistakes. Check the linked sources. Questions are sent to Gemini to generate an answer; please don't include personal or sensitive information.", contact: 'Talk to me directly ↗', unavailable: 'The live assistant is not connected yet. You can explore the portfolio or contact Om directly.', error: 'I could not answer right now. Please try again later.', sources: 'Sources', you: 'YOU', thinking: 'Finding a grounded answer…' },
  de: { back: 'Zurück zum Portfolio ↗', eyebrow: 'EIN INTERAKTIVER EINBLICK', title: 'Frag nach <em>meiner Arbeit.</em>', intro: 'Du möchtest mehr über ein Projekt, ein eingesetztes Tool oder meinen Weg zur KI wissen? Der Assistent nutzt die öffentlichen Inhalte dieser Website und zeigt Quellen zu seinen Antworten.', starting: 'FRAG ZUM BEISPIEL', question1: 'Woran hast du bei Bauhaus Luftfahrt gearbeitet? <span>↗</span>', question2: 'Welche Projekte kann ich ausprobieren? <span>↗</span>', question3: 'Wie bist du zur KI gekommen? <span>↗</span>', question4: 'Was bringst du in ein KI-Team ein? <span>↗</span>', sourceLabel: 'AUS ÖFFENTLICHEN INHALTEN', sourceText: 'Dieser Guide verweist auf veröffentlichte Projekte und Code. Fragen zu vertraulicher Arbeit beantworte ich gerne persönlich.', explore: 'Arbeit erkunden ↗', chatTitle: 'Im Gespräch mit dem Portfolio', connecting: 'Verbindung wird geprüft…', ready: 'Live · Gemini', offline: 'Noch nicht verbunden', assistant: 'PORTFOLIO-GUIDE · KI', welcome: 'Hallo. Ich helfe dir, die Arbeit hinter Oms Erfahrung und Fähigkeiten zu finden. Was möchtest du wissen?', questionLabel: 'Deine Frage', placeholder: 'Frag nach Projekten, Erfahrung oder Hintergrund…', send: 'Senden <span aria-hidden="true">↗</span>', fineprint: 'KI kann Fehler machen. Prüfe die verlinkten Quellen. Fragen werden für die Antwort an Gemini gesendet; bitte keine persönlichen oder sensiblen Daten eingeben.', contact: 'Direkt Kontakt aufnehmen ↗', unavailable: 'Der Live-Assistent ist noch nicht verbunden. Du kannst das Portfolio erkunden oder Om direkt kontaktieren.', error: 'Im Moment ist keine Antwort möglich. Bitte versuche es später erneut.', sources: 'Quellen', you: 'DU', thinking: 'Suche nach einer belegten Antwort…' }
};
const conversation = document.querySelector('#conversation');
const form = document.querySelector('#chat-form');
const question = document.querySelector('#question');
const send = document.querySelector('#send');
const availability = document.querySelector('#availability');
const endpoint = `${(window.PORTFOLIO_CHAT_API || '').replace(/\/$/, '')}/api/chat`;
let language = localStorage.getItem('portfolio-language') === 'de' ? 'de' : 'en';
let connected = false;
let history = [];

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-language', lang);
  document.querySelectorAll('[data-copy]').forEach((node) => { node.innerHTML = copy[lang][node.dataset.copy]; });
  document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  question.placeholder = copy[lang].placeholder;
  availability.textContent = copy[lang][connected ? 'ready' : 'offline'];
}
function addMessage(role, message, sources = []) {
  const wrapper = document.createElement('div');
  wrapper.className = `message ${role}`;
  const avatar = document.createElement('span');
  avatar.className = 'avatar';
  avatar.textContent = role === 'user' ? '↗' : 'OV';
  const body = document.createElement('div');
  body.className = 'message-body';
  const speaker = document.createElement('span');
  speaker.className = 'speaker';
  speaker.textContent = role === 'user' ? copy[language].you : copy[language].assistant;
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  body.append(speaker, paragraph);
  if (sources.length) {
    const list = document.createElement('div');
    list.className = 'citation-list';
    const title = document.createElement('span');
    title.textContent = `${copy[language].sources}:`;
    list.append(title);
    sources.forEach((source) => {
      if (!/^https:\/\/(om7203\.github\.io|github\.com|www\.linkedin\.com)\//.test(source.url)) return;
      const link = document.createElement('a');
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${source.label} ↗`;
      list.append(link);
    });
    body.append(list);
  }
  wrapper.append(avatar, body);
  conversation.append(wrapper);
  conversation.scrollTop = conversation.scrollHeight;
  return wrapper;
}
async function checkConnection() {
  try {
    const response = await fetch(endpoint, { method: 'GET', cache: 'no-store' });
    const state = await response.json();
    connected = response.ok && state.available === true;
  } catch { connected = false; }
  availability.textContent = copy[language][connected ? 'ready' : 'offline'];
  availability.classList.toggle('is-live', connected);
}
async function ask(message) {
  addMessage('user', message);
  question.value = '';
  if (!connected) { addMessage('assistant', copy[language].unavailable); return; }
  send.disabled = true;
  question.disabled = true;
  const pending = addMessage('assistant', copy[language].thinking);
  try {
    const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message, language, history }) });
    const data = await response.json();
    pending.remove();
    if (!response.ok || typeof data.answer !== 'string') throw new Error('Unavailable');
    addMessage('assistant', data.answer, data.sources || []);
    history = [...history, { role: 'user', content: message }, { role: 'assistant', content: data.answer }].slice(-4);
  } catch { pending.remove(); addMessage('assistant', copy[language].error); }
  finally { send.disabled = false; question.disabled = false; question.focus(); }
}
form.addEventListener('submit', (event) => { event.preventDefault(); const message = question.value.trim(); if (message) ask(message); });
question.addEventListener('keydown', (event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); } });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && document.documentElement.classList.contains('embed')) parent.postMessage({ type: 'portfolio-chat-close' }, location.origin); });
document.querySelectorAll('[data-question]').forEach((button) => button.addEventListener('click', () => ask(button.dataset[language === 'de' ? 'questionDe' : 'question'])));
document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(language);
checkConnection();
