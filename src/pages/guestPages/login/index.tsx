import { REACT_SVG } from '../../../assets/images';

export default function LoginPage() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={REACT_SVG} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}
