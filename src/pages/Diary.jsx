import DiaryComponent from '../components/DairyComponent';
import Draw from '../components/Drawing';

export default function Diary() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <DiaryComponent />
      <Draw />
    </div>
  );
}
