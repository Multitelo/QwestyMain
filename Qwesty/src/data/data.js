export const ResearchPageData = [
  {
    status: "completed",
    title: "Product validation research",
    researchType: "survey",
    numberReached: "50",
    amountSpent: "₦5000",
  },
  {
    status: "incomplete",
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