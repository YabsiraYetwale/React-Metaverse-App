
const World = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:ml-[230px] ml-[50px] gap-[6rem]">
        <div>
          <p className="text-[#f5f5f5]">| People on the World</p>
          <h1 className="lg:text-[48px] text-[28px] text-white font-bold w-[85%]">
            Track friends around you and invite them to play together in the
            same world
          </h1>
        </div>
        <div  className="relative">
        <div
          className="flex  justify-center items-center 
                lg:w-[65vw] w-[90vw] h-[50vh]  rounded-[10px] lg:-ml-[300px] -ml-[30px] "
        >
          <img src="./map.png" alt="map"  />
        </div>
           <img src="./people-02.png" alt="people" className="absolute w-[50px] h-[50px] lg:-left-[15.3rem] -left-[0rem] lg:-top-5 top-[90px] " />
          <img src="./people-03.png" alt="people" className="absolute w-[50px] h-[50px] left-[7rem] top-[150px] "/>
          <img src="./people-01.png" alt="people" className="absolute w-[50px] h-[50px] lg:left-[30rem] left-[14rem] lg:top-[250px] top-[200px] "/>
      </div>
        </div>
    </>
  );
};

export default World;
