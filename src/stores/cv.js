// stores/counter.js
import {
    defineStore
} from 'pinia'

export const useCvStore = defineStore('cvStore', {
    state: () => {
        return {
            cvInfo: {
                theme: {
                    cvName: "",
                    fontFamily: "",
                    language: "en",
                    primaryColor: "#006666",
                    secondaryColor: "#1ab3b8",
                    picture: false,
                    position: false,
                },
                userInfo: {
                    name: "",
                    picture: "",
                    jobTitle: "",
                    phone: "",
                    email: "",
                    country: "",
                    city: "",
                },
                summary: {
                    description: "",
                },
                proffesionalExperiance: [{
                    jobTitle: "",
                    companyName: "",
                    companyResidence: "",
                    yearFrom: null,
                    yearTo: null,
                    details: [{
                        detail: "",
                    }, ],
                }, ],
                projects: [{
                    projectTitle: "",
                    projectResidence: "",
                    projectDescription: "",
                    details: [{
                        detail: "",
                    }, ],
                }, ],
                education: [{
                    schoolName: "",
                    schoolTitle: "",
                    schoolResidence: "",
                    yearFrom: null,
                    yearTo: null,
                }, ],
                skills: [{
                    skillName: "",
                    setOfSkills: [{
                        skill: "",
                    }, ],
                }, ],
                languages: [{
                    name: "",
                    level: "",
                    stars: null,
                }, ],
                hobbies: [{
                    name: "",
                }, ],
                social: {
                    facebook: "",
                    linkedin: "",
                    twitter: "",
                    instagram: "",
                    github: "",
                    discord: "",
                },
            },
            cvTranslations: {
                me: {
                    header: {
                        form: 'CV Forma',
                        preview: 'Pregled',
                        example: 'Primjer'
                    },
                    sectionTitles: {
                        theme: 'Konfiguracija Teme',
                        yourInfo: 'Lični Podaci',
                        summary: 'Rezime',
                        proffesionalExperiance: 'Profesionalno Iskustvo',
                        projects: 'Projekti',
                        education: 'Edukacija',
                        skills: 'Vještine',
                        languages: 'Jezici',
                        hobbies: 'Hobiji',
                        social: 'Društvene Mreže'
                    },
                    sectionLabels: {
                        theme: {
                            name: 'Ime CV-a',
                            language: 'Jezik',
                            fontPreview: 'Pregled Font-a',
                            primaryColor: 'Primarna Boja Teme',
                            secondaryColor: 'Sekundarna Boja Teme',
                            picture: 'Okrugao Picture',
                            mainSection: 'Pozicija Glavne Sekcije'
                        },
                        yourInfo: {
                            picture: 'Picture',
                            upload: 'Upload',
                            change: 'Izmijeni',
                            name: 'Ime',
                            jobTitle: 'Naziv Radne Pozicije',
                            phone: 'Telefon',
                            email: 'Email',
                            country: 'Zemlja',
                            city: 'Grad'
                        },
                        proffesionalExperiance: {
                            job: 'Posao',
                            jobTitle: 'Radna Pozicija',
                            companyName: 'Ime Kompanije',
                            companyResidence: 'Rezidencija Kompanije',
                            yearFrom: 'Godina (od)',
                            yearTo: 'Godina (do)',
                            jobDetail: 'Poslovni detalj'
                        },
                        projects: {
                            project: 'Projekat',
                            projectName: 'Ime Projekta',
                            projectResidence: 'Rezidencija Projekta',
                            projectDescription: 'Opis Posla',
                            projectDetail: 'Projektni Detalj'
                        },
                        education: {
                            school: 'Škola',
                            schoolName: 'Ime Škole',
                            schoolTitle: 'Titula',
                            schoolResidence: 'Rezidencija Škole',
                            yearFrom: 'Godina (od)',
                            yearTo: 'Godina (do)',
                        },
                        skills: {
                            skill: 'Skil',
                            skillName: 'Ime Skila',
                            skillDetail: 'Skil detalj'
                        },
                        languages: {
                            language: 'Jezik',
                            languageName: 'Ime Jezika',
                            languageLevel: 'Nivo Znanja Jezika',
                            rating: 'Ocjena (1-5)'
                        },
                        hobbies: {
                            hobby: 'Hobi',
                            hobbyName: 'Ime Hobija'
                        }
                    },
                    buttons: {
                        newJob: 'Dodaj novi posao',
                        newJobDetail: 'Dodaj novi poslovni detalj',
                        newProject: 'Dodaj novi projekat',
                        newProjectDetail: 'Dodaj novi projektni detalj',
                        newSchool: 'Dodaj novu školu',
                        newSkill: 'Dodaj novi skil',
                        newSkillDetail: 'Dodaj novi skil detalj',
                        newLanguage: 'Dodaj novi jezik',
                        newHobby: 'Dodaj novi hobi',
                        save: 'Sačuvaj',
                        export: 'Eksportuj CV',
                    }
                },
                en: {
                    header: {
                        form: 'CV Form',
                        preview: 'Preview',
                        example: 'Example'
                    },
                    sectionTitles: {
                        theme: 'Theme Configuration',
                        yourInfo: 'Your Info',
                        summary: 'Summary',
                        proffesionalExperiance: 'Professional Experiance',
                        projects: 'Projects',
                        education: 'Education',
                        skills: 'Skills',
                        languages: 'Languages',
                        hobbies: 'Hobbies',
                        social: 'Find Me Online'
                    },
                    sectionLabels: {
                        theme: {
                            name: 'CV Name',
                            language: 'Language',
                            fontPreview: 'Font Preview',
                            primaryColor: 'Theme Primary Color',
                            secondaryColor: 'Theme Secondary Color',
                            picture: 'Rounded Picture',
                            mainSection: 'Main Section Position'
                        },
                        yourInfo: {
                            picture: 'Picture',
                            upload: 'Upload',
                            change: 'Change',
                            name: 'Name',
                            jobTitle: 'Job Title',
                            phone: 'Phone',
                            email: 'Email',
                            country: 'Country',
                            city: 'City'
                        },
                        proffesionalExperiance: {
                            job: 'Job',
                            jobTitle: 'Job Title',
                            companyName: 'Company Name',
                            companyResidence: 'Company Residence',
                            yearFrom: 'Year (from)',
                            yearTo: 'Year (to)',
                            jobDetail: 'Job Detail'
                        },
                        projects: {
                            project: 'Project',
                            projectName: 'Project Name',
                            projectResidence: 'Project Residence',
                            projectDescription: 'Project Description',
                            projectDetail: 'Project Detail'
                        },
                        education: {
                            school: 'School',
                            schoolName: 'School Name',
                            schoolTitle: 'School Title',
                            schoolResidence: 'School Residence',
                            yearFrom: 'Year (from)',
                            yearTo: 'Year (to)',
                        },
                        skills: {
                            skill: 'Skill',
                            skillName: 'Skill Name',
                            skillDetail: 'Skill Detail'
                        },
                        languages: {
                            language: 'Language',
                            languageName: 'Language Name',
                            languageLevel: 'Language Level',
                            rating: 'Rating (1-5)'
                        },
                        hobbies: {
                            hobby: 'Hobby',
                            hobbyName: 'Hobby Name'
                        }
                    },
                    buttons: {
                        newJob: 'Add new job',
                        newJobDetail: 'Add new job detail',
                        newProject: 'Add new project',
                        newProjectDetail: 'Add new project detail',
                        newSchool: 'Add new school',
                        newSkill: 'Add new skill',
                        newSkillDetail: 'Add new skill detail',
                        newLanguage: 'Add new language',
                        newHobby: 'Add new hobby',
                        save: 'Save',
                        export: 'Export CV',
                    }
                }
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    getters: {
        getCvInfo: (state) => {
            return state.cvInfo;
        },
        getCvTranslationHeader: (state) => {
            return state.cvTranslations[state.cvInfo.theme.language].header;
        },
        getCvTranslationSections: (state) => {
            return state.cvTranslations[state.cvInfo.theme.language].sectionTitles;
        },
        getCvTranslationSectionLabels: (state) => {
            return state.cvTranslations[state.cvInfo.theme.language].sectionLabels;
        },
        getCvTranslationButton: (state) => {
            return state.cvTranslations[state.cvInfo.theme.language].buttons;
        },
    },
    actions: {
        setCvInfo(payload) {
            this.cvInfo = payload;
        },
    },
})