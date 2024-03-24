export const statusOptions = [
  { value: "Completed", label: "Completed" },
  { value: "Ongoing", label: "Ongoing" },
  { value: "Paused", label: "Paused" },
  { value: "Status", label: "Status" },
];

export const researchTypeOptions = [
  { value: "Survey", label: "Survey" },
  { value: "Interview", label: "Interview" },
  { value: "Focus group", label: "Focus group" },
  { value: "Card sorting", label: "Card sorting" },
  { value: "Ethnographic observation", label: "Ethnographic observation" },
  { value: "A/B Testing", label: "A/B Testing" },
  { value: "Usability Test", label: "Usability Test" },
  { value: "Voice from the street", label: "Voice from the street" },
  { value: "Tree Testing", label: "Tree Testing" },
  { value: "Research Type", label: "Research Type" },
];

export const timePeriodOptions = [
  { value: "Last week", label: "Last week" },
  { value: "Last month", label: "Last month" },
  { value: "Last 3 months", label: "Last 3 months" },
  { value: "Last 6 months", label: "Last 6 months" },
  { value: "Last 2 years", label: "Last 2 years" },
  { value: "Last 3 years", label: "Last 3 years" },
  { value: "This Year", label: "This Year" },
];

export const filterOptions = [
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Filter", label: "Filter" },
];

export const ResearchPageData = [
  {
    status: "completed",
    title: "Product validation research",
    researchType: "survey",
    numberReached: "50",
    amountSpent: "₦5000",
  },
  {
    status: "paused",
    title: "Product marketing research",
    researchType: "survey",
    numberReached: "32",
    amountSpent: "₦2500",
  },
  {
    status: "ongoing",
    title: "Product validation research",
    researchType: "survey",
    numberReached: "50",
    amountSpent: "₦14000",
  },
];

// Draft table
export const headings = {
  Title: {
    text: "Title",
  },
  Summary: {
    text: "Summary",
  },
  LastEdited: {
    text: "Last Edited",
  },
};

export const draftTableData = {
  body: [
    {
      Title: `The impact of covid-19 on the tourism industry`,
      Summary: `This research paper explores the impact ot COVID-19 on the global tourism industry. including changes in consumer behavior, travel restrictions, and the long-term economic consequences`,
      LastEdited: `March 15, 2022`, 
    },
    {
      Title: `A comparative study ot renewable energy policies in Europe`,
      Summary: `This research project examines the effectiveness of renewable energy policies in European countries, with a focus on government subsidies, regulatory frameworks, and public awareness campaigns`,
      LastEdited : `June 4, 2022`,
    },
    {
      Title: `The role of artificial intelligence in healthcare diagnostics`,
      Summary: `This academic article reviews recent advancements in AI technology for medical imaging. patient data analysis, and disease diagnosis accuracy, highlighting potential benefits and ethical considerations for healthcare providers and patients.`,
      LastEdited: `Jan 4, 2022`,
    },
  ],
};


// Tailwind theme switch function
export const switchTheme = (lightColor, darkColor, theme) => {
  return theme === 'light' ? lightColor : darkColor;
};
export const darkTheme = "bg-[#201F24]";



export const fieldOptions = [
          {value:'Advertising and Marketing', label:'Advertising and Marketing'},
          {value:'Agriculture', label:'Agriculture'},
          {value:'Automotive', label:'Automotive'},
          {value:'Consumer Packaged Goods', label:'Consumer Packaged Goods'},
          {value:'Educations', label:'Educations'},
          {value:'Energy', label:'Energy'},
          {value:'Engineering, Construction, and Real Estate', label:'Engineering, Construction, and Real Estate'},
          {value:'Financial Services', label:'Financial Services'},
          {value:'Game Tech', label:'Game Tech'},
          {value:'Government', label:'Government'},
          {value:'Healthcare and Life Sciences', label:'Healthcare and Life Sciences'},
          {value:'Manufacturing', label:'Manufacturing'},
          {value:'Media and Entertainment', label:'Media and Entertainment'},
          {value:'Mining', label:'Mining'},
          {value:'Nonprofit', label:'Nonprofit'},
          {value:'Power and Utilities', label:'Power and Utilities'},
          {value:'Retail', label:'Retail'},
          {value:'Technology, Software, or Services', label:'Technology, Software, or Services'},
          {value:'Telecommunications', label:'Telecommunications'},
          {value:'Travel and Hospitality', label:'Travel and Hospitality'},
          {value:'Law', label:'Law'},
          {value:'Other', label:'Other'}]