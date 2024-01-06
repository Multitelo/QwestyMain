import React from 'react'
import FagList from './fagList';

export default function fagItems() {
    
    const faqs = [
        {
          question: 'How does this product differ from other data collection methods?',
          answer: 'Our product stands out by prioritizing user privacy. Unlike traditional methods, we implement advanced anonymization techniques and encryption protocols to protect your data. Additionally, our user-centric approach ensures transparency and control over how your information is used.',
        },
        {
          question: 'What security measures are in place to prevent data breaches?',
          answer: 'We employ state-of-the-art security measures, including robust encryption, regular security audits, and strict access controls. These measures are designed to minimize the risk of data breaches and unauthorized access, ensuring the integrity and confidentiality of your information.',
        },
        {
          question: 'How do you ensure compliance with data protection regulations?',
          answer: 'We are committed to strict compliance with data protection regulations such as GDPR and others. Our policies and practices align with the legal requirements, and we continuously update our processes to stay in line with any changes in the regulatory landscape.',
        },
        {
          question: 'Can I control what data is collected about me?',
          answer: 'Absolutely. Our product is designed with user control in mind. You have the ability to manage and customize your data preferences. We provide clear options for opting in or out of specific data collection, ensuring you have control over your personal information.',
        },
        {
          question: 'How is data anonymization implemented in your product?',
          answer: 'We prioritize data anonymization to protect your privacy. Any personally identifiable information is carefully anonymized, ensuring that individual users cannot be identified from the collected data. This approach adds an extra layer of security to your information.',
        },
        {
          question: 'What steps are taken to ensure data accuracy?',
          answer: 'We implement rigorous data validation processes to ensure the accuracy of collected information. Automated checks and verification mechanisms are in place to detect and correct errors, providing you with reliable and precise data insights.',
        },
        {
          question: 'How can I access and review the data collected about me?',
          answer: 'You have the right to access and review your collected data. We provide a secure and user-friendly interface where you can request and review the data associated with your account. This transparency is central to our commitment to user empowerment.',
        },
        {
          question: 'Do you sell or share user data with third parties?',
          answer: 'No, we do not sell or share your data with third parties without your explicit consent. Your data is treated with the utmost confidentiality, and we are dedicated to maintaining the trust you place in our product. Our privacy policy provides detailed information on how your data is handled.',
}];
      
  return (
    <div>
        {faqs.map((faq, index) =>(
            <div key={index}>
                <div> <FagList key={index} {...faq}/> </div>
            </div>
        ))}
    </div>
  )
}