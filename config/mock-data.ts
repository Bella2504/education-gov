
export const chooseModeOptions = [
    { label: 'selectMode-personalityQuiz', value: 'selectMode-personalityQuiz' },
    { label: 'selectMode-advancedSearch', value: 'selectMode-advancedSearch'}
];

export const advancedSearchUserData = [
    {
        name: "advancedSearch-userData-exam",
        options: [
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
            "directory-userData-exam-chemia",
            "directory-userData-exam-fizyka",
        ]
    },
]

export const advancedSearchUniversityDetails = [
    {
        name: "advancedSearch-userData-facultyGroup",
        options: [
            "directory-userData-exam-architekturaibudownictwo",
            "directory-userData-exam-artystyczne",
            "directory-userData-exam-biologiczneiprzyrodnicze",
            "directory-userData-exam-chemiczne",
            "directory-userData-exam-dziennikarstwoiinformacja",
            "directory-userData-exam-ekonomiczne",
            "directory-userData-exam-filologiczne",
            "directory-userData-exam-fizyczne",
            "directory-userData-exam-gastronomiaihotelarstwo",
            "directory-userData-exam-geograficzne",
            "directory-userData-exam-historyczne",
            "directory-userData-exam-humanistyczne",
            "directory-userData-exam-informatyczne",
            "directory-userData-exam-inzynierskieitechniczne",
            "directory-userData-exam-logistykaitransport",
            "directory-userData-exam-matematyczneistatystyczne",
            "directory-userData-exam-medyczne",
            "directory-userData-exam-morskie",
            "directory-userData-exam-muzyczne",
            "directory-userData-exam-ochronaibezpieczenstwo",
            "directory-userData-exam-ochronasrodowiska",
            "directory-userData-exam-opiekaspoleczna",
            "directory-userData-exam-pedagogiczne",
            "directory-userData-exam-prawniczeiadministracja",
            "directory-userData-exam-psychologiczneispoleczne",
            "directory-userData-exam-rolnictwolesnictwoirybolowstwo",
            "directory-userData-exam-sportiturystyka",
            "directory-userData-exam-studiawjezykuobcym",
            "directory-userData-exam-teologiczne",
            "directory-userData-exam-weterynaryjne",
            "directory-userData-exam-wojskowe",
            "directory-userData-exam-zarzadzanieimarketing",
            "directory-userData-exam-zywienieizywnosc",
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
        ]
    },
    {
        name: "advancedSearch-userData-studiesForm",
        options: [
            "directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",
            "directory-userData-exam-online",
        ]
    },
    {
        name: "advancedSearch-userData-length",
        options: [
            "directory-userData-exam-15roku",
            "directory-userData-exam-2lata",
            "directory-userData-exam-25roku",
            "directory-userData-exam-3lata",
            "directory-userData-exam-35roku",
            "directory-userData-exam-4lata",
            "directory-userData-exam-45roku",
            "directory-userData-exam-5lat",
            "directory-userData-exam-55roku",
            "directory-userData-exam-6lat",
        ]
    },
    {
        name: "advancedSearch-userData-languages",
        options: [
            "directory-userData-exam-polski",
            "directory-userData-exam-angielski",
        ]
    },
]

export const advancedSearchFacultyDetails = [
    {
        name: "advancedSearch-facultyDetails-area",
        options: [
            "directory-facultyDetails-area-mazowieckie",
            "directory-facultyDetails-area-malopolskie",
            "directory-facultyDetails-area-pomorskie",
            "directory-facultyDetails-area-wielkopolskie",
        ]
    },
    {
        name: "advancedSearch-facultyDetails-status",
        options: [
            "directory-facultyDetails-status-publiczna",
            "directory-facultyDetails-status-prywatna",
            "directory-facultyDetails-status-katolicka",
        ]
    },
]

export const advancedSearchSection = [
    { name: "advancedSearch-userData", image: 'person', options: advancedSearchUserData },
    { name: "advancedSearch-universityDetails", image: 'pin_drop', options: advancedSearchUniversityDetails},
    { name: "advancedSearch-facultyDetails", image: 'list_alt', options: advancedSearchFacultyDetails },
];

export const listOfUniversities = [
    {
        id: 1,
        adress: "ul. Nowoursynowska 16602-787 Warszawa",
        name: 'Uniwersytet Warszawski',
        "advancedSearch-userData-exam": ["directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
            "directory-userData-exam-chemia",
            "directory-userData-exam-fizyka"],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-architekturaibudownictwo",
            "directory-userData-exam-artystyczne",
            "directory-userData-exam-biologiczneiprzyrodnicze",
            "directory-userData-exam-chemiczne",
            "directory-userData-exam-dziennikarstwoiinformacja",
            "directory-userData-exam-ekonomiczne",
            "directory-userData-exam-filologiczne",
            "directory-userData-exam-fizyczne",
            "directory-userData-exam-gastronomiaihotelarstwo",
            "directory-userData-exam-geograficzne",
            "directory-userData-exam-historyczne",
            "directory-userData-exam-humanistyczne",
            "directory-userData-exam-informatyczne",
            "directory-userData-exam-inzynierskieitechniczne",
            "directory-userData-exam-logistykaitransport",
            "directory-userData-exam-matematyczneistatystyczne"
        ],
        "advancedSearch-userData-studiesForm": ["directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-mazowieckie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id: 2,
        adress: "ul. Koszykowa 86, 02-008 Warszawa",
        name: 'Politechnika Warszawska',
        "advancedSearch-userData-exam": [
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-chemia",
            "directory-userData-exam-fizyka"],
        "advancedSearch-userData-facultyGroup": [         
            "directory-userData-exam-weterynaryjne",
            "directory-userData-exam-wojskowe",
            "directory-userData-exam-zarzadzanieimarketing",
            "directory-userData-exam-zywienieizywnosc",
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski"
        ],
        "advancedSearch-userData-studiesForm": [
            "directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",
            "directory-userData-exam-online"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-mazowieckie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id: 3,
        name: 'Akademia Górniczo Hutnicza',
        adress: "pl. Plac Jana Matejki 13, 31-157 Kraków",
        "advancedSearch-userData-exam": [ "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-chemia",
            "directory-userData-exam-fizyka"],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-angielski"],
        "advancedSearch-userData-studiesForm": [
            "directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",
            "directory-userData-exam-online"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-malopolskie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id: 4,
        name: 'Uniwersytet Jagielloński',
        adress: "pl. Plac Jana Matejki 13, 31-157 Kraków",
        "advancedSearch-userData-exam": [
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
            "directory-userData-exam-chemia",
            "directory-userData-exam-fizyka"
        ],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-biologia"],
        "advancedSearch-userData-studiesForm": ["directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",
            "directory-userData-exam-online"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-malopolskie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id: 5,
        name: 'Uniwersytet im- Adama Mickiewicza w Poznaniu',
        adress: 'ul. Zielna 3, 22602-787 Warszawa',
        "advancedSearch-userData-exam": ["directory-userData-exam-biologia"],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-biologia"],
        "advancedSearch-userData-studiesForm": ["directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-wielkopolskie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id: 6,
        name: 'Szkoła głowna Handlowa',
        adress: "ul. Aleja Niepodległosci 2, 00-058 Warszawa",
        "advancedSearch-userData-exam": ["directory-userData-exam-biologia", "directory-userData-exam-chemia"],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-biologia", "directory-userData-exam-angielski"],
        "advancedSearch-userData-studiesForm": ["directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",
            "directory-userData-exam-online"],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-mazowieckie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
    {
        id:7,
        adress: "ul. Aleja Banacha 2, 00-128 Warszawa",
        name: 'Warszawski Uniwersytet Medyczny',
        "advancedSearch-userData-exam": ["directory-userData-exam-biologia"],
        "advancedSearch-userData-facultyGroup": ["directory-userData-exam-medyczne", "directory-userData-exam-angielski"],
        "advancedSearch-userData-studiesForm": ["directory-userData-exam-stacjonarnie",
            "directory-userData-exam-niestacjonarnie",],
        "advancedSearch-userData-languages": ["directory-userData-exam-angielski", "directory-userData-exam-polski"],
        "advancedSearch-facultyDetails-area": ["directory-facultyDetails-area-mazowieckie"],
        "advancedSearch-facultyDetails-status": ["directory-facultyDetails-status-publiczna"]
    },
]
