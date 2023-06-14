import Buttons from "../Components/Buttons";
import Title from "../Components/Title";

function Startseite() {
  return (
    <div className="w-full bg-[#828594] h-full ">
      <div className=" bg-[#828594] basis-1/2 ">
        <img className="object-cover w-full" src="./pictures/new777x.png"></img>
      </div>

      <div className="flex flex-row justify-around bg-[#000000] w-full py-5 text-slate-50 basis-1/8">
        <Buttons text="Engineering/Tec" link="/technic" />
        <Buttons text="History" link="/history" />
        <Buttons text="Variants" link="/variants" />
        <Buttons text="Destinations" link="/destinations" />
      </div>

      <div className="w-full bg-[#000000] rounded-b-3xl rounded-bl-3x1 text-slate-50 basis-1/8">
        <Title />
      </div>

      <div>
        <img className="object-cover w-full" src="./pictures/run3.jpg"></img>
      </div>
    </div>
  );
}
export default Startseite;
