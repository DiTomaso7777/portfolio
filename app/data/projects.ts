export interface Project {
    partner: string;
    role: string;
    duration: string;
    keyProject: string;
    description: string;
    slug: string;
    year: string;
  }
  
  export const projectsData: Project[] = [
    {
        partner: "BMW Group",
        role: "Security Architect",
        duration: "ongoing",
        year: "2024",
        keyProject: "BMW Group",
        description: "Security Architect for the BMW Group, responsible for eDiscovery and Data Loss Prevention (DLP) for the Office 365 environment ( 125000 users )",
        slug: "bmw-group-ag"
      },
    {
      partner: "EDV Königstein",
      role: "Project Manager",
      duration: "6 months",
      year: "2018",
      keyProject: "EON AG",
      description: "Carve Out project to separate Uniper Energy and migrate Office, SCCM and Exchange OnPremises to Office 365. ( 105 000 users )",
      slug: "edv-konigstein"
    },
    {
      partner: "Datac / Deutsche Telekom",
      role: "Senior Technical Consultant",
      duration: "1 month",
      year: "2018",
      keyProject: "Simovative",
      description: "Migration of Exchange 2010 to Exchange Online. Exchange Hybrid Coexistence.",
      slug: "datac-deutsche-telekom"
    },
    {
      partner: "Datac / Deutsche Telekom",
      role: "Project Manager",
      duration: "4 months",
      year: "2018",
      keyProject: "WAGO",
      description: "Hybrid Identity, Migration of Exchange 2010 to Exchange Online ( 6000 users)",
      slug: "datac-deutsche-telekom-wago"
    },
    {
      partner: "Mondaycoffee",
      role: "Project Manager",
      duration: "2 months",
      year: "2019",
      keyProject: "Bank Now",
      description: "Hybrid Identity, Migration of Exchange 2013 to Exchange Online (800 users), consulting the Credit Suisse IT",
      slug: "mondaycoffee-bank-now"
    },
    {
      partner: "Mondaycoffee",
      role: "Project Manager",
      duration: "1 month",
      year: "2020",
      keyProject: "Swissunihockey",
      description: "Implementation of Microsoft Teams with AudioCodes SBC phone system ( 100 users)",
      slug: "mondaycoffee-swissunihockey"
    },
    {
      partner: "PCO GmbH",
      role: "Senior Technical Consultant",
      duration: "6 months",
      year: "2022",
      keyProject: "Doerken AG",
      description: "Lotus Notes Migration to Exchange Online with Quest MNE ( 1400 users )",
      slug: "pco-gmbh-doerken-ag"
    },
    {
      partner: "PCO GmbH",
      role: "Project Manager",
      duration: "6 months",
      year: "2022",
      keyProject: "Hagedorn Schuettflix",
      description: "Carve Out project to separate Schuettflix from Hagedorn, Cloud Identity, Federation with Okta, Intune, Client Migration ( 6000 users )",
      slug: "pco-gmbh-hagedorn-schuettflix"
    },
    {
      partner: "PCO GmbH",
      role: "Senior Technical Consultant",
      duration: "3 months",
      year: "2022",
      keyProject: "Egeplast",
      description: "Implementation of Microsoft Defender for Endpoint. (800 users)",
      slug: "pco-gmbh-egeplast"
    },
    {
      partner: "Sits AG",
      role: "Senior Technical Consultant",
      duration: "6 months",
      year: "2022",
      keyProject: "Partners Group",
      description: "Strategic planning for the implementations of Smarsh, a journaling technology for Office 365 ( 1500 )",
      slug: "sits-ag-partners-group"
    },
    {
      partner: "Sits AG",
      role: "Senior Technical Consultant",
      duration: "3 months",
      year: "2022",
      keyProject: "Lonza",
      description: "Implementation of Microsoft Defender for Endpoint. (800 users)",
      slug: "sits-ag-lonza"
    },
    {
      partner: "InfoSys / Collabera",
      role: "Senior Technical Consultant",
      duration: "6 months",
      year: "2022 - 2023",
      keyProject: "BMW Group",
      description: "Performance planning and scaling of the mixed Exchange 2013 and 2019 infrastructure. ( 125000 users )",
      slug: "infosys-collabera-bmw-group"
    },
    {
      partner: "Computer Futures",
      role: "Senior Technical Consultant",
      duration: "2 years",
      year: "2019-2020",
      keyProject: "Dürr AG",
      description: "Enterprise Consultant for the Skype for Business environment / SIP Telephony ( 16000 )",
      slug: "computer-futures-durr-ag"
    },
    {
      partner: "Commotron",
      role: "Senior Technical Consultant",
      duration: "6 months",
      year: "2018",
      keyProject: "Berufgenossenschaft DE",
      description: "Lotus Notes Migration to Exchange Server 2016. Exchange Hybrid Coexistence. ( 10000 users )",
      slug: "commotron-berufgenossenschaft-de"
    }
  ];

  export default projectsData;