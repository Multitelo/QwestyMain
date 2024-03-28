import React, { useState, useEffect } from "react";
import plus from '../assets/images/plus-solid.svg';
import minus from '../assets/images/minus.svg';

function Faq() {
  const [isClicked, setIsClicked] = useState([false, false, false, false, false, false, false, false]);
  const faqs = [
    {
      question: 'How does this product differ from other data collection methods?',
      answer: 'Our product stands out by prioritizing user privacy. Unlike traditional methods, we implement advanced anonymization techniques and encryption protocols to protect your data. Additionally, our user-centric approach ensures transparency and control over how your information is used.',
    },
    {
      question: 'What do I stand to gain from joining Solvety? ',
      answer: 
      (
        <div dangerouslySetInnerHTML={{ __html: ` Are you a tech person that likes testing out new products?
      Or you're someone that desires sharing your opinion and thoughts in a meaningful way.
      Are you also someone that loves having fun while doing all these?
      <br><br>
      Now that's what Solvety gives you on a platter of gold.
      The best part of the process is that you get rewards for doing something you enjoy.`}}/>
    )},
    {
      question: 'What security measures are in place to prevent data breaches?',
      answer: 'We employ state-of-the-art security measures, including robust encryption, regular security audits, and strict access controls. These measures are designed to minimize the risk of data breaches and unauthorized access, ensuring the integrity and confidentiality of your information.',
    },
    {
      question: 'How is Solvety different from Survey Platforms?',
      answer: (
        <div dangerouslySetInnerHTML={{ __html: `
          Well, first of all Solvety isn't just a survey tool but a research platform.<br><br>
          Usually, you login to survey websites hoping to help Projects by sharing needed information but You're then given a long form of questions to answer.<br><br>
          Gulp<br><br>
          You're stressed, bored with what you're seeing and your time ticks away in frustration but no one cares.<br><br>
          Therefore, Solvety is creating a new process<br><br>
          1. where you give your opinions in a fun way through gamification.<br><br>
          2. Where you get rewarded for the data you're sharing.<br><br>
        ` }} />
      ),
    }
    ,
    {
      question: 'How do you ensure compliance with data protection regulations?',
      answer: 'We are committed to strict compliance with data protection regulations such as GDPR and others. Our policies and practices align with the legal requirements, and we continuously update our processes to stay in line with any changes in the regulatory landscape.',
    },
    {
      question: 'Is my data safe and can I control what data is collected about me?',
      answer: ( <div dangerouslySetInnerHTML={{ __html: 
        `There are three things we prioritize; your anonymity, your data security and your ability to control what is collected about you.
      <br><br>
      1. Your personal identifiable information that can be traced to your real-world identity is carefully anonymized, ensuring that you cannot be identified from the collected data.
      <br><br>
      2. We employ updated security measures, robust encryption, regular audits, and strict access controls to minimize the risk of data breaches and unauthorized access.
      Ensuring the integrity and confidentiality of your information is our day to day fight.
      <br><br>
      3. We do not share your data with third parties without your explicit consent.
      
      We do all these while implementing a friendly interface where you can review and control the data associated with your account.` }} />
    ),},
    {
      question: 'Can I control what data is collected about me?',
      answer: 'Absolutely. Our product is designed with user control in mind. You have the ability to manage and customize your data preferences. We provide clear options for opting in or out of specific data collection, ensuring you have control over your personal information.',
    },
    
   
    
    {
      question: 'How does the reward works and can I withdraw?',
      answer: `This will be effected on your profile and fully when we launch our Mainnet version but at the moment, you can keep on accumulating "Qwes" rewards via "frens invite" and external "quests taking".`,
  }];

  const toggleClick = (index) => {
    setIsClicked((prev) => {
      const newIsClicked = [...prev];
      newIsClicked[index] = !newIsClicked[index];

      // Disable other elements if the current one is open
      if (newIsClicked[index]) {
        for (let i = 0; i < newIsClicked.length; i++) {
          if (i !== index) {
            newIsClicked[i] = false;
          }
        }
      }

      return newIsClicked;
    });
  };

  const closeAnswers = () => {
    // Close all answers
    setIsClicked(Array(faqs.length).fill(false));
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", closeAnswers);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeAnswers);
    };
  }, []);

  return (<div className="faq-container">
  <h2>FAQ</h2>
  <h3>Researcher's </h3> <h3>Participant's</h3>
  {faqs.map((faq, index) => (
    <div
      key={index}
      id={`faq-item-${index}`}
      className={`faq-items ${isClicked[index] ? 'open' : ''}`}
    >
      <p>
        {faq.question}
        <img
          src={isClicked[index] ? minus : plus}
          alt={isClicked[index] ? 'minus' : 'plus'}
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from propagating to the document
            toggleClick(index);
          }}
        />
      </p>
      {isClicked[index] && (
        <div className="answer">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

  );
}

export default Faq;
