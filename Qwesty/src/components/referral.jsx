import pink from "./images/pink.png"
import blue from "./images/blue.png";
import lemon from "./images/lemon.png";
import vec1 from "./images/vec1.png";
import vec2 from "./images/vec2.png";
import vec3 from "./images/vec3.png";
import vec4 from "./images/vec4.png";
import egg from "./images/egg.png"
import rec from "./images/rec.png"
import egg1 from "./images/egg1.png"
import Image3 from "./images/images.jpeg";
import luke from "./images/luke.jpeg";
import mike from "./images/mike.jpeg";
import olivia from "./images/olivia.jpeg";
import Logo from "./Logo";

const Referral = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Left Sidebar */}
      <aside className="bg-[#201F24] text-white p-4 flex-shrink-0">
        <div>
          <Logo />
        </div>
        <h2 className="text-2xl font-bold">Your Company</h2>
        <p>Refer a friend and earn rewards!</p>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto w-[800px] p-4">
        <header className="bg-black text-white py-4 text-center w-[800px]">
          <p className="text-lg bg-[#EFE7FF] rounded-md text-purple-500">Fusky referred 5 friends and just got 50 $Qwes</p>
        </header>
        <div className="bg-gray-200 relative p-4 rounded-md w-[800px] ">
              <img src={Image3} alt="Referral Image 1" className="mb-4 rounded-md w-[797px] h-[302px]" />
              <h2 className="text-xl font-semibold mb-2">Refer a Friend</h2>
              <p className="text-gray-700">
                Invite your friends to join and get exclusive rewards. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div className="absolute text-white top-[20%] left-[13%]">
              <p className="font-bold my-14">Refer a researcher to earn 7 $Qwes points and a chance to get up to ₦5000  </p>
              <div className="flex items-center ml-[77px]"><p>your invite code:</p><p className="ml-[35%]">WK749T2SV</p> <button className="ml-3 bg-purple-500 w-24 rounded-lg  text-center"><p className="">copy</p></button></div>
            </div></div>
        <section className="mt-8 p-8 bg-[#201F24] shadow-md rounded-md w-[800px]">


      <p className="text-white my-5 text-3xl">Referral History</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

<div
  className="rounded-md relative text-white shadow-lg p-4 w-[157px] h-[196px]"
  style={{
    borderRadius: '10px',
    background: 'linear-gradient(270deg, #0793A6 0%, rgba(49, 224, 248, 0.97) 98.5%)',
    boxShadow: '16px 8px 20px 0px rgba(0, 0, 0, 0.10)',
  }}
>
<p className=""></p>
<div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={egg1} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">18</p>
</div>
<div  className="absolute top-32 left-[40%]"><img src={vec2} alt="vector" /></div>
<p className="absolute top-[150px] text-sm left-[36%] ">Today</p>

</div>



<div className="relative rounded-md text-white shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #B41155 0%, #E796B8 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(0, 0, 0, 0.10)',
}}>
           <div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={pink} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">26</p>
<div className="absolute top-32 left-[40%]"><img src={vec4} alt="vector" /></div>
<p className="absolute top-[150px] left-[27%] text-sm ">This Week</p>

</div>
            </div>

            

            <div className="relative text-white rounded-md shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #0B549C 0%, #7BABDC 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(32, 100, 167, 0.10)',
}}>

<div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={blue} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/>
<p className="absolute top-[50px] left-[40%] text-2xl">39</p>
<div className="absolute top-32 left-[40%]"><img src={vec3} alt="vector" /></div>
<p className="absolute top-[150px] left-[27%] text-sm  ">Last Month</p>

</div>
</div>

<div className="relative text-white rounded-md shadow-lg p-4 w-[157px] h-[196px]  " style={{
  background: 'linear-gradient(270deg, #1E980F 0%, #9DF292 98.5%)',
  boxShadow: '16px 8px 20px 0px rgba(45, 163, 30, 0.10)',
}}>
             <div className=" absolute  top-0 right-2 "> <img src={egg} alt="" className="w-[200px] mb-20  h-[150px]"/>
<img src={lemon} alt="" className="absolute top-3 left-[13px] fill-[#E477A5] filter drop-shadow-md"/><p className="absolute top-[50px] left-[40%] text-2xl">48</p>
<div className="absolute top-32 left-[40%]"><img src={vec1} alt="vector" /></div>
<p className="absolute top-[150px] left-[10%] text-sm ">Last Twelve Months</p>

</div>
            </div>
          </div>
        </section>
<div className="flex space-x-5">
        <section className="mt-8  px-8 py-4 bg-[#201F24] shadow-md rounded-md w-[380px] h-[240px]">
  <p className="text-white mb-5 text-3xl">Referral List</p>
  <div className="flex space-x-3">

    <div className="relative rounded-md text-white  h-[73px] w-[92px]">
      <img src={luke} alt="" className=" h-[73px] w-[92px] object-cover rounded-md" />
      <div className="absolute  h-[73px] w-[92px] rounded-lg top-[79%] p-4 bg-[#292727] ">
        {/* Your content for Luke */}
        <p>Luke</p>
        <div className="w-[63.784px] h-[23.122px] flex-shrink-0 rounded-md border-0.5px border-[#AAFAF9] bg-white">
  {/* Your content goes here */}
</div>

      </div>
    </div>

    

    <div className="relative rounded-md text-white  h-[73px] w-[92px] ">
      <img src={olivia} alt="" className="w-full h-[120%] object-cover rounded-md" />
      <div className="absolute h-[73px] w-[92px] rounded-lg top-[99%] p-4 bg-[#292727] ">
        {/* Your content for Olivia */}
        <p>Olivia</p>
      </div>
    </div>

    <div className="relative rounded-md text-white  h-[73px] w-[92px]">
      <img src={mike} alt="" className="w-full h-full object-cover rounded-md" />
      <div className="absolute  h-[73px] w-[92px]  rounded-lg top-[79%] p-4 bg-[#292727] ">
        {/* Your content for Mike */}
        <p>Mike</p>
      </div>
    </div>
   


  </div>
  
</section>
<div className="w-[399px] h-[240px] flex-shrink-0 rounded-lg mt-8 mr-0 bg-[#292727]">
<img src={rec} alt="" className="h-[240px] w-full"/>
</div>


</div>


       
      </main>

      {/* Right Sidebar */}
      <aside className="bg-blue-500 text-white p-4 flex-shrink-0">
       
      </aside>
    </div>
  );
};

export default Referral;
