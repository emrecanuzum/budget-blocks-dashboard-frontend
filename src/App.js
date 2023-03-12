import logo from './assets/logo.png';
import userphoto from './assets/user1.png';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className='LeftMenu'>
        <div className='topLogo'>
          <img src={logo} alt=''></img>
          <h3>BUDGET BLOCKS</h3>
        </div>
        <div className='LeftPages'>
          <a>Dashboard</a>
          <a>Cash Flow</a>
          <a>Transactions</a>
          <a>Wallets</a>
          <a>Budgets</a>
          <a>Staking</a>
        </div>
      </div>
      <div className='Main'>
        <div className='helloPart'>
          <img src={userphoto} alt=''></img>
          <h4>Hello <strong>Brandon</strong>!</h4>
        </div>

        <div className='searchBar'>

        </div>

        <div className='headText'>
          <h2>Budget Overview</h2>
        </div>
        <div className='GridBox'>
          <div className='miniBox'>

          </div>
          <div className='miniBox'>
            
          </div>
          <div className='miniBox'>
            
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
