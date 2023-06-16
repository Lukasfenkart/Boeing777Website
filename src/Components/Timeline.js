import Buttons from "./Buttons";

function Timeline(){
    return(
        <div className="flex flex-row p-5 pt-0">
            <div className="bg-slate-200 w-1/5 p-2 rounded-bl-xl rounded-br-md">
                1986
            </div>
            <div className="bg-slate-300 w-1/5 p-2 rounded-b-md">
                1990-1994
            </div>
            <div className="bg-slate-400 w-1/5 p-2 rounded-b-md">
                1995-1996
            </div>
            <div className="bg-slate-500 w-1/5 p-2 rounded-b-md">
                2000s
            </div>
            <div className="bg-slate-600 w-1/5 p-2 rounded-br-xl rounded-bl-md">
                2010s
            </div>
        </div>
    );
}
export default Timeline;