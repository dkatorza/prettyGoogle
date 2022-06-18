import { SvgLogo } from './cmps/SvgLogo';
import { Button } from './cmps/Button/Button';

const App = () => {
  return (
    <div className='layout'>
      <header>
        <div className='topbar-wrapper'>
          <div className='box'>
            <div className='tt'>hello</div>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='animated-logo-wrapper'>
          <SvgLogo />
        </div>
        <div className='center-layout'>
          <Button
            onClick={() => console.log('working')}
            variant='lollipop'
            shape='fancy'>
            Primary
          </Button>
        </div>
      </main>
      <footer>
        <div className='footer1'>footer1 </div>
        <div className='footer2'>footer2</div>
      </footer>
    </div>
  );
};

export default App;
