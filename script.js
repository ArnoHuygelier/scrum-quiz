// JSON met 52 vragen over Scrum (2 originele + 50 extra)
const questions = [
    {
        question: "Wat is een Sprint Review?",
        options: [
            "A) Een bijeenkomst aan het einde van de sprint waarin het team de voltooide werkitems demonstreert",
            "B) Een vergadering waarin de Product Owner de voortgang bespreekt met de stakeholders",
            "C) Een bijeenkomst waarin het team hun doelen voor de volgende sprint bespreekt"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is Scrum?",
        options: [
            "A) Een projectmanagementmethodologie voor softwareontwikkeling",
            "B) Een lineaire benadering van projectmanagement",
            "C) Een documentatiesysteem voor projecten"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is de maximale aanbevolen duur van een Sprint?",
        options: [
            "A) 2 weken",
            "B) 4 weken",
            "C) 6 weken"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wie is verantwoordelijk voor het maximaliseren van de waarde van het product?",
        options: [
            "A) De Scrum Master",
            "B) De Product Owner",
            "C) Het Development Team"
        ],
        correctAnswer: "B"
    },
    {
        question: "Hoe vaak zou een Daily Scrum moeten plaatsvinden?",
        options: [
            "A) Wekelijks",
            "B) Maandelijks",
            "C) Dagelijks"
        ],
        correctAnswer: "C"
    },
    {
        question: "Wat is de primaire verantwoordelijkheid van de Scrum Master?",
        options: [
            "A) Het beheren van het team en deadlines",
            "B) Het faciliteren van het Scrum-proces en obstakels wegnemen",
            "C) Het schrijven van code"
        ],
        correctAnswer: "B"
    },
    {
        question: "Welke artefacten horen bij Scrum?",
        options: [
            "A) Product Backlog, Sprint Backlog, Increment",
            "B) Requirement Document, Gantt Chart, Sprint Plan",
            "C) Product Plan, Task List, Sprint Documentation"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is het doel van de Sprint Retrospective?",
        options: [
            "A) Het demonstreren van het voltooide werk aan stakeholders",
            "B) Het bespreken van wat goed en fout ging in de sprint en hoe te verbeteren",
            "C) Het plannen van taken voor de volgende sprint"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wie bepaalt welke items in de Sprint Backlog worden opgenomen?",
        options: [
            "A) De Scrum Master",
            "B) De Product Owner",
            "C) Het Development Team"
        ],
        correctAnswer: "C"
    },
    {
        question: "Wat is een belangrijk voordeel van Scrum?",
        options: [
            "A) Strikte planningen en minder flexibiliteit",
            "B) Continue feedback en aanpassingsvermogen",
            "C) Gedetailleerde documentatie vóór aanvang van het project"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is een User Story in Scrum?",
        options: [
            "A) Een uitgebreide technische documentatie van een feature",
            "B) Een korte beschrijving van functionaliteit vanuit het perspectief van de gebruiker",
            "C) Een lijst van technische taken voor ontwikkelaars"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wie is verantwoordelijk voor het beheren van de Product Backlog?",
        options: [
            "A) De Scrum Master",
            "B) De Product Owner",
            "C) Het Development Team"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is een belangrijk kenmerk van een Scrum Team?",
        options: [
            "A) Het team werkt in een hiërarchische structuur",
            "B) Het team is zelforganiserend en multidisciplinair",
            "C) Het team werkt onder direct toezicht van de Scrum Master"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is de rol van de Scrum Master tijdens de Daily Scrum?",
        options: [
            "A) De Scrum Master leidt en controleert de vergadering",
            "B) De Scrum Master faciliteert de vergadering en helpt obstakels te verwijderen",
            "C) De Scrum Master neemt geen deel aan de Daily Scrum"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is een kenmerk van een goed gedefinieerde User Story?",
        options: [
            "A) Het is lang en gedetailleerd",
            "B) Het volgt het INVEST-principe",
            "C) Het bevat alleen technische specificaties"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is het doel van een Sprint Planning?",
        options: [
            "A) Het plannen van taken voor het volgende kwartaal",
            "B) Het bepalen van het werk dat in de komende sprint wordt gedaan",
            "C) Het verdelen van taken onder de managers"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is het maximale aantal leden in een Scrum Team volgens de Scrum Guide?",
        options: [
            "A) 5",
            "B) 10",
            "C) 11"
        ],
        correctAnswer: "C"
    },
    {
        question: "Wat gebeurt er als een teamlid merkt dat een Sprint Goal niet haalbaar is?",
        options: [
            "A) Het team moet onmiddellijk een nieuwe sprint starten",
            "B) Het team bespreekt het probleem in de Daily Scrum en past zich indien nodig aan",
            "C) De Product Owner beslist wat er moet gebeuren"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat betekent 'Definition of Done'?",
        options: [
            "A) Een lijst met criteria waaraan een item moet voldoen voordat het als voltooid wordt beschouwd",
            "B) De definitieve opleverdatum van een project",
            "C) De lijst van nog te doen taken in de Sprint"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is het Increment in Scrum?",
        options: [
            "A) Het totaal aantal voltooide taken in een project",
            "B) Het werk dat voltooid en potentieel uitgeleverd kan worden na een sprint",
            "C) De lijst met taken die nog moeten worden uitgevoerd"
        ],
        correctAnswer: "B"
    },
    {
        question: "Hoe wordt de voortgang van een Sprint meestal visueel bijgehouden?",
        options: [
            "A) Met een Gantt Chart",
            "B) Met een Burndown Chart",
            "C) Met een roadmap"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat betekent het als een Scrum Team 'cross-functioneel' is?",
        options: [
            "A) Het team bestaat uit specialisten die één specifieke taak uitvoeren",
            "B) Het team heeft alle vaardigheden in huis om een productincrement op te leveren",
            "C) Het team wordt door externe managers aangestuurd"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wie kan wijzigingen aanbrengen in de Product Backlog?",
        options: [
            "A) Alleen de Product Owner",
            "B) Iedereen in de organisatie",
            "C) Het Development Team zonder overleg"
        ],
        correctAnswer: "A"
    },
    {
        question: "Welke van de volgende items is GEEN Scrum-event?",
        options: [
            "A) Sprint Review",
            "B) Sprint Retrospective",
            "C) Scrum Audit"
        ],
        correctAnswer: "C"
    },
    {
        question: "Wat is de belangrijkste factor bij het bepalen van de lengte van een Sprint?",
        options: [
            "A) Het comfortniveau van het team",
            "B) De snelheid waarmee het bedrijf functioneert en de noodzaak om feedback te ontvangen",
            "C) De beschikbaarheid van de Product Owner"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is een Burndown Chart?",
        options: [
            "A) Een grafiek die de resterende hoeveelheid werk toont in een sprint",
            "B) Een lijst met geblokkeerde taken",
            "C) Een grafiek die de tijd toont die per taak wordt besteed"
        ],
        correctAnswer: "A"
    },
    {
        question: "Welke rol is verantwoordelijk voor het garanderen van de effectiviteit van Scrum?",
        options: [
            "A) De Scrum Master",
            "B) De Product Owner",
            "C) Het Development Team"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is een Timebox in Scrum?",
        options: [
            "A) Een vastgestelde tijdslimiet voor een activiteit",
            "B) Een backlog item dat te groot is om in één sprint te worden voltooid",
            "C) Een speciale vergadering voor het bespreken van sprintresultaten"
        ],
        correctAnswer: "A"
    },
    {
        question: "Waarom wordt een Sprint niet verlengd als het werk niet af is?",
        options: [
            "A) Omdat het team zich moet houden aan de afgesproken tijdsduur en leren beter te plannen",
            "B) Omdat de Product Owner dit niet toestaat",
            "C) Omdat de Scrum Master hier verantwoordelijk voor is"
        ],
        correctAnswer: "A"
    },
    {
        question: "Wat is een Spike in Scrum?",
        options: [
            "A) Een plotselinge verhoging van werkdruk",
            "B) Een onderzoeks- of experimentele taak om onzekerheid weg te nemen",
            "C) Een kritiek moment in een sprint waar extra tijd wordt toegevoegd"
        ],
        correctAnswer: "B"
    },
    {
        question: "Wat is de belangrijkste reden voor een Daily Scrum?",
        options: [
            "A) Om te zorgen dat iedereen op tijd begint met werken",
            "B) Om de voortgang te controleren en obstakels te identificeren",
            "C) Om taken opnieuw te verdelen onder de teamleden"
        ],
        correctAnswer: "B"
    },
];

// Willekeurige volgorde maken van de vragen
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialiseer de quiz met een gehusselde volgorde van vragen
shuffleQuestions(questions);

let currentQuestionIndex = 0;
let score = 0;

// Functie om de vraag en de opties weer te geven
function loadQuestion() {
    const question = questions[currentQuestionIndex];

    // Vraag weergeven
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = question.question;

    // Opties weergeven
    const optionsElement = document.getElementById("answer-options");
    optionsElement.innerHTML = ''; // Verwijder oude opties
    question.options.forEach(option => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        li.appendChild(button);
        optionsElement.appendChild(li);
    });

    // Verwijder het resultaat van de vorige vraag
    document.getElementById("result").innerHTML = '';
    document.getElementById("next-button").style.display = 'none';
}

// Functie om het antwoord te controleren
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById("result");

    // Controleren of het geselecteerde antwoord correct is
    if (selectedOption.charAt(0) === question.correctAnswer) {
        resultElement.innerHTML = "✅ Correct!";
        score++;
    } else {
        resultElement.innerHTML = `❌ Fout! Het juiste antwoord is ${question.correctAnswer}.`;
    }

    // Volgende knop tonen
    document.getElementById("next-button").style.display = 'block';
}

// Functie om naar de volgende vraag te gaan
function nextQuestion() {
    currentQuestionIndex++;

    // Als er geen vragen meer zijn, de quiz beëindigen
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerHTML = `🎉 Quiz Voltooid! Je score is ${score} van de ${questions.length} vragen.`;
        document.getElementById("next-button").style.display = 'none';
    }
}

// Zorg ervoor dat de functie pas wordt aangeroepen nadat de DOM volledig is geladen
document.addEventListener("DOMContentLoaded", function () {
    loadQuestion(); // Laad de eerste vraag wanneer de pagina geladen is
});
