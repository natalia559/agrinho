
// 1. Alternador de Modo Claro/Escuro (Theme Toggle)
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Alternar Modo';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Modo Claro';
    }
});

// 2. Botão Saiba Mais (Mensagem Dinâmica)
const btnSaibaMais = document.getElementById('btn-saiba-mais');
const dynamicMessage = document.getElementById('dynamic-message');

btnSaibaMais.addEventListener('click', () => {
    dynamicMessage.textContent = "Você está prestes a descobrir um universo de inovação no campo! Role a página para saber mais.";
    dynamicMessage.style.color = "#2ecc71";
    
    // Suaviza o scroll até a seção pilares após um pequeno delay
    setTimeout(() => {
        document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

// 3. Gerador de Fatos Sustentáveis
const btnFact = document.getElementById('btn-fact');
const factText = document.getElementById('fact-text');

const fatosAgro = [
    "O Brasil é líder no uso de controle biológico, reduzindo drasticamente a dependência de defensivos químicos.",
    "A tecnologia de Plantio Direto no Brasil protege o solo contra erosões e retém mais carbono na terra.",
    "Sistemas de Integração Lavoura-Pecuária-Floresta (ILPF) aumentam a produtividade da mesma área sem desmatar novos espaços.",
    "Drones de precisão conseguem identificar pragas pontuais, economizando até 80% na aplicação de insumos.",
    "O uso de bioinsumos (bactérias benéficas e fungos) cresce mais de 15% ao ano nas lavouras brasileiras."
];

btnFact.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fatosAgro.length);
    factText.textContent = fatosAgro[randomIndex];
});

// 4. Envio do Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    alert(`Obrigado, ${nome}! Seu e-mail (${email}) foi cadastrado com sucesso para receber nossos informativos.`);
    
    contactForm.reset(); // Limpa os campos do formulário
});