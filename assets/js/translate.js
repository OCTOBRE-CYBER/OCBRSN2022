const langue = document.querySelector('.nav-menu');
const button = document.querySelector('.buy-ticketsfr');
const Apropos = document.querySelector('.apropos');

button.forEach(button => {
    button.addEventListener('click', () => {
        langue.querySelector('.menu-active').classList.remove('menu-active');
        button.classList.add('menu-active');

        const attr = button.getAttribute('langue');
        Apropos.textContent = data[attr].apropos;
    });
});

const data = {
    "french":
    {
        "apropos": "Octobre Cyber by #rootsn est une activité que nous organisons durant tout le mois de la cybersécurité. C' est une occasion pour nous d'intensifier les messages de sensibilisation que nous faisons passer tous les jours de l'année. Cette année, tout au long du mois d'octobre, nous ferons en sorte que les acteurs engagés dans le Cyber mois vous apportent des clés de lecture pour comprendre les enjeux de la sécurité du numérique et vous permettre d'agir à votre tour pour sécuriser efficacement votre vie numérique personnelle, comme professionnelle. De nombreuses campagnes d'information seront organisées au sein des ministères, des entreprises, des particuliers et de la population pour toucher le maximum de personne possible.",
    },

    "english":
    {
        "apropos": "October Cyber ​​by #rootsn is an activity that we organize during the whole month of cybersecurity. This is an opportunity for us to intensify the awareness messages that we send out every day of the year. This year, throughout the month of October, we will ensure that the actors involved in Cyber ​​month provide you with reading keys to understand the challenges of digital security and allow you to act in turn to secure efficiently your personal and professional digital life. Numerous information campaigns will be organized within ministries, businesses, individuals and the population to reach as many people as possible."
    }
}