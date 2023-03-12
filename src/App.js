import logo from './assets/logo.png';
import userphoto from './assets/user1.png';
import searchHamburger from './assets/search-hamburger.png';
import searchButton from './assets/search-button.png';
import solanaLogo from './assets/solanaLogo.png';
import pieChart from './assets/pie.png';
import graphChart from './assets/graph.png';
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
        <div className='headPart'>
          <div className='helloPart'>
            <img src={userphoto} alt=''></img>
            <h4>Hello <strong>Brandon</strong>!</h4>
          </div>
          <div className='searchBar'>
            <img src={searchHamburger} alt=''></img>
            <input placeholder='Search'></input>
            <img src={searchButton} alt=''></img>      
          </div>
        </div>
        <div className='headText'>
          <h2>Budget Overview</h2>
        </div>
        <div className='GridBox'>
          <div className='miniBox'>
            <h3>Total Assets</h3>
            <h6>$ 22,482.50</h6>
            <div className='solPart'>
              <img src={solanaLogo} alt=''></img>   
              <p> 1,230.14 SOL</p>
            </div>          
          </div>
          <div className='miniBox'>
            <h3>Exp. in 30 days</h3>
            <h6>$ 5,101.11</h6>
            <div className='solPart'>
              <img src={solanaLogo} alt=''></img>   
              <p> 280.00 SOL</p>
            </div>  
          </div>
          <div className='miniBox'>
            <h3>Income in 30 days</h3>
            <h6>$ 7,505.55</h6>
            <div className='solPart'>
              <img src={solanaLogo} alt=''></img>   
              <p> 412.00 SOL</p>
            </div>  
          </div>
          <div className='verticalPieBox'>
            <h3>Distribution of Expenditures last 30 days</h3>
            <img src={pieChart} alt=''></img>
          </div>
        </div>
        <div className='bottomBox'>
        <img src={graphChart} alt=''></img>
        </div>

      </div>



    </div>
  );
}

export default App;
