

const Navber = () => {

    return (
        <div className="navbar bg-base-100 md:max-w-5xl mx-auto">
    
        <div className="navbar-start">
            <p className=" text-4xl text-red-400"> Qu<span className=" text-yellow-400">i</span>z App</p>
        </div>
        <div className="  lg:navbar-center ">
         <ul className="hidden lg:flex gap-6">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
         </ul>
        </div>
        <div className=" navbar-end">
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img className=" bg-yellow-400" src="https://i.ibb.co/wLyq3RY/IMG-1037-removebg-preview.png" />
  </div>
</div>
        </div>

          
        </div>
     
      
  
    );
};

export default Navber;