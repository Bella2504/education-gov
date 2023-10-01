
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
        ]
    },
]

export const advancedSearchUniversityDetails = [
    {
        name: "advancedSearch-userData-facultyGroup",
        options: [
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
        ]
    },
    {
        name: "advancedSearch-userData-studiesForm",
        options: [
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
        ]
    },
    {
        name: "advancedSearch-userData-length",
        options: [
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
        ]
    },
    {
        name: "advancedSearch-userData-languages",
        options: [
            "directory-userData-exam-biologia",
            "directory-userData-exam-matematyka",
            "directory-userData-exam-angielski",
            "directory-userData-exam-polski",
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
        name: 'Uniwersytet Warszawski',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-biologia",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-mazowieckie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
    {
        id: 2,
        name: 'Politechnika Warszawska',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-angielski",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-mazowieckie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
    {
        id: 3,
        name: 'Akademia Górniczo Hutnicza',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-angielski",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-malopolskie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
    {
        id: 4,
        name: 'Uniwersytet Jagielloński',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-biologia",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-malopolskie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
    {
        id: 5,
        name: 'Uniwersytet im- Adama Mickiewicza w Poznaniu',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-biologia",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-wielkopolskie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
    {
        id: 6,
        name: 'Szkoła głowna Handlowa',
        "advancedSearch-userData-exam": "directory-userData-exam-biologia",
        "advancedSearch-userData-facultyGroup": "directory-userData-exam-biologia",
        "advancedSearch-userData-studiesForm": "directory-userData-exam-biologia",
        "advancedSearch-userData-languages": "directory-userData-exam-angielski",
        "advancedSearch-facultyDetails-area": "directory-facultyDetails-area-mazowieckie",
        "advancedSearch-facultyDetails-status": "directory-facultyDetails-status-publiczna"
    },
]