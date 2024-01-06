import React from 'react';
import FagData from './fagData';

export default function HomePage() {
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
      answer: 'No, we do not sell or share your data with third parties without your explicit consent. Your data is treated with the utmost confidentiality, and we are dedicated to maintaining the trust you place in our product. Our privacy policy provides detailed information on how your data is handled.'},
  ];
  
  return (
    <div className='bg-[#383434]'>
    <div className='pt-10 pr-10'>
    <div className='grid grid-cols-2 w-[1078px]'>

      <div className='rounded-3xl bg-cyan-300 h-[336px] w-[504px] ml-9 '>
        <img src="https://s3-alpha-sig.figma.com/img/7ef5/7a13/6d5d058891aab8a68cc7f3a7aea9596f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Li5e-URK8g1ishDb79yrfX6994NeiwK0Xq4CT6lwaNYUTIkMwajIZ8XG3B88dlrJV6kmmob9BMp0sjjZDfyGf6W7WucO6MPMSuZTkWDZL-7ECg3ODgmcw9cE2ua6uDT65fKgmqI1srEQronI98tWuxNKFr90vuaLOASY2ylo20mDid7lh9WeasWL3RDFK0RpiO8booHL6bWYWd4UupF9xaRlZQFe6pjj~-VaPsKAjxiZBZqI5SD3-rhBmI2fvDS758EEQ9e2izBCt2HB1pCVs~AbL1FV8iplVLeomryKb7TjHrZhtxMnhuW6F7R43c25k6xLx6G7IFq2G7qIakB4bA__" alt="girl" className='rounded-3xl'/>
      </div>
      <div className='rounded-[30px] bg-[#8E5DF5] h-[588px] w-[674px] row-span-2'>
  <p className='text-center mt-52' style={{
    color: '#FFF',
    fontFeatureSettings: 'clig off, liga off',
    fontFamily: 'Outfit',
    fontSize: '96px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.483px'
  }}>
    QWESTY
  </p>
</div>
      <div className='rounded-[30px] border  bg-[#383434] ml-9 w-[504px] h-[252px]'>
        <div className='rounded-[30px] w-[267px] bg-[#FFF3C7] my-7 ml-6 h-[89.378px]'><p className='px-7 py-2'>"This form is so long, I'm starting to think I'm applying for a job."</p></div>
        <div className='rounded-[30px] w-[267px] bg-[#8E5DF5] h-[89.378px] my-7 ml-52  '>
          <p className='px-7 py-5 text-[16px]'>Qwesty is so fun, you'll forget you're giving feedback</p>
        </div>
    </div>
      </div>
      <div className='flex'>
      <p  style={{
  color: '#FFF',
  textAlign: 'center',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='ml-10 my-5'>A typical participant's day</p>

      <div className='rounded-[30px] border  bg-[#383434] ml-9 w-[504px] h-[252px]'>
        <div className='rounded-[30px] w-[267px]  bg-[#FFF3C7] my-7 ml-6 h-[89.378px]'> <p  style={{
  textAlign: 'center',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='ml-10 my-5 pt-3 pr-9'>"These responses are so empty, that I wonder if the participants are forced to respond"</p>
</div>
        <div className='rounded-[30px] w-[267px] bg-[#8E5DF5] h-[89.378px] my-7 ml-52  '>
        <p  style={{
  textAlign: 'center',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='ml-10 my-5 pt-3 pr-9'>Qwesty is the only way to find out what your users really think, even if they don't want to tell you.</p>

        </div>
      </div></div>

           <div className='rounded-[30px] border ml-[50%] bg-[#383434] w-[504px] h-[252px]'>
        <div className='rounded-[30px] w-[267px] bg-[#FFF3C7] my-7 ml-6 h-[89.378px]'> <p  style={{
  textAlign: 'center',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='ml-10 my-5 pt-3 pr-9'> “I know what my target audience want but but it's still not kinda helpful”</p>
</div>
        <div className='rounded-[30px] w-[267px] bg-[#8E5DF5] h-[89.378px] my-7 ml-52  '>
        <p  style={{
  textAlign: 'center',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='ml-10 my-5 pt-6 pr-9'>Qwesty not only tells you What but also tells you Why</p>

        </div>
      </div>
    </div>

    <p style={{
  color: '#ffff', 
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='text-center mt-20 mb-10 '>Who we are seeking to <span className='text-purple-700'>help</span> and More</p>

<div style={{
  width: '1137px',
  height: '397px',
  flexShrink: 0,
  opacity: 0.6,
background: 'linear-gradient(90deg, #0C0C0C 19.11%, rgba(12, 12, 12, 0.00) 95.95%)',
backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/14cf/3f9a/41167d4d2af83c4dcf2fe72054c873b7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMLbSv1haZU6ufotcTIS3GpE~CNwr8MAYgxhvdQ49XD80h1dUYzkjgEpRBInph-Rb6K4pDGmfBWZK2ULUtqxyJOkY67jgw~sF1dyUBZmj95K-WhP8RnksD3eRT5KSjPxQ8GLgjtignUbWLuP~Oz4hn5LkcsUvj08KG1PUdt3Pr2n4kZUpv85XWVVyqB8fbK9NkWFup5uBR4wV6piWNNLShjPPLSCmh9gyxQmlBSIGoAIh7FgboglnBIqS7X4cabCR882DQmyU~wekS8-MFcbO8xLMDs0fBIKxo8BcrEaDGPHHZKQOsQC0m9nJvi5AJwOkDQcYIa8NekpJ8iSWHhSvA__")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}} className='ml-16 px-20 py-10'>

<p style={{
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px' 
}} className='text-white font-bold'>Onyebuchi</p>
<p style={{
  width: '352px',
  height: '149px',
  flexDirection: 'column',
  justifyContent: 'center',
  flexShrink: 0,
  color: '#FFF',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: 'Outfit',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.483px'
}} className='mt-20 font-bold'>
  A Prop firm founder who's frustrated that his business status isn't upgrading because he doesn't know his users, what they want and why.
</p>

</div>
<p className='font-bold text-center text-3xl text-white mt-10'>FAQ</p>
<div className='grid grid-cols-2 py-10 px-20 ml-10 gap-5 '>

        {faqs.map((faq, index) =>(
            <div key={index} className='w-[476px] h-[70px]'>
                <div> <FagData key={index} {...faq}/> </div>
            </div>
        ))}
    </div>
    </div>
  );
}
