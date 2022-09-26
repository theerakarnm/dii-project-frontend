import DiaryComponent from "../components/DairyComponent";
import Draw from "../components/Drawing";
import Navbar from "../components/Navbar";

export default function Diary() {
  return (
    <>
      <Navbar nameWhichActive={"Diary"} />
      <div className='flex justify-center items-center w-screen h-screen'>
        <DiaryComponent />
      </div>
    </>
  );
}
