import SignupForm from '../components/Signupform';

export default function Regis() {
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  return (
    <div>
      <SignupForm />
    </div>
  );
}
