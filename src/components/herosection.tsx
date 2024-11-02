import Image from "next/image"
export default function Hero(){
    return(
      <div>
        <div>
          <div className="container1">
      <div className="mainimage">
     <div className="container grid lg:grid-cols2 h-[calc(10vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] font-bold leading-tight flex justify-center p-50 ">
       <div>< h1 className=" text-gray-400 text-7xl font-extralight">project</h1>
      <h1 className="text-gray-600  text-5xl font-extrabold">Lorum</h1></div>
      </div>
      </div>
      <img 
         src="/Rectangle 6.png" 
         alt="Luxury Appartments" 
     />
     </div>
     </div>
   <div className="second">
    <div className="About-section">
      <div className="About-images">
        <div className="align-image-about">
          <img src="About1.png" alt="building-image"  className="aboutimg" /><br /><br />
          <img src="About2.png" alt="building-image"  className="aboutimg" /><br /><br />
          </div>
        
          <img src="About3.png" alt="building-image" className="aboutimg" />
        
        </div>
        <div className="About-text">
          <h1 className="aboutheading">About</h1>
          <p className="aboutpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <img src="readmorebutton.png" alt="read more button" /><br /><br /><br /><br />
        </div>
        </div>
    </div>
    {/* Main section */}
    <div className="container3">
    <div className="mainfocus-heading">
      <h1>Main Focus/Mission Statement</h1>
    </div>
    <div className="mainfocus">
      <div className=" focus-item">
        <img src="1.png" alt="1"  className="focus-imageone"/>
        <div className="focus-text">
          <p className="focus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        </div>
      </div>
      <div className="focus-item">
        <img src="2.png" alt="2"  className="focus-imagetwo"/>
        <div className="focus-text">
          <p className="focus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
        </div>
      </div>
    </div>
<div className="container4">
  <div className="mainprojectheading">
    <h1>Our Project</h1>
  </div>
  <div className="rowimagesone">
   <img src="project1.png" alt="project1" className="picone" />
    <img src="project2.png" alt="project2" className="pictwo" />
  </div>
<div className="rowimagestwo">
  <img src="project3.png" alt="project3" className="picthree"/>
  <img src="project4.png" alt="project4" className="picfour"/>
  <img src="project5.png" alt="project5" className="picfive"/>
</div>
<div className="allprojectbuttoncontainer">
<div className="projectbutton">
  <div className="buttontext">
   <h1 className=" buttontext1"> All Projects</h1>
  </div>
  </div>

</div>
<div className="container5">
  <div className="contactheading">
    <h1>Contact Us</h1>
  </div>
  <div className="formcontact">
<form className="Form">
  <input type="text" placeholder=" Name"  className="one" />
  <input type="text" placeholder="Phone Number" className="two" />
  <input type="text" placeholder="E-mail"  className="three" />
  <input type="text" placeholder="Intrested in" className="four" />
  <input type="text" name="" id="" placeholder="Massage" className="five" />
  <button type="submit" className="submitform">Send email</button>
</form>
<div className="contactpic">
  <img src="contactpic.png" alt="contact" />
</div>
  </div>
</div>


</div>
</div>
      </div>
      
    )

}