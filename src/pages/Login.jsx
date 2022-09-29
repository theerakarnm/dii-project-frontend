import LC from '../components/LoginComponent';

export default function Login() {
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  return (
    <>
      <div className='overflow-y-hidden'>
        <LC />
      </div>
    </>
  );
}
