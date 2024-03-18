import React from 'react'
import SideBar from '../../components/share/SideBar';
import Top from '../../components/share/Top';
import Footer from '../../components/Footer';

const Survey = () => {
  return (
    <div className={`researcher-content`}>
    <div className="researcher-menu">
        <SideBar/>
      </div>
      <div className="home-main">
      <div className="top-section">
        <Top/>
      </div>
      {/* content */}
      <div className="home-main-section">
        <section className="w-full  rounded-2xl h-[100vh]">
          <h1 className="draft font-bold text-3xl">Drafts</h1>

  
        </section>
      </div>
      </div>
      <div className="research-footer">
      <Footer/>
    </div>
  </div>
  )
}

export default Survey;