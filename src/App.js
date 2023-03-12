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
            <div className='pieTextPart'>
              <div className='pieTextPartGrid'>
                <h1>Salaries</h1>
                <h1>Outsourced labor</h1>
                <h1>Marketing</h1>
                <h1>Equipment rentals</h1>
                <h1>Travel costs</h1>
                <h1>Other</h1>   
              </div>
              <div className='pieTextPartGrid'>
                <h2>$ 32,120.50</h2>
                <h2>$ 17,505.00</h2>
                <h2>$ 14,440.00</h2>
                <h2>$ 9,790.15</h2>
                <h2>$ 5,765.45</h2>
                <h2>$ 3,119.05</h2>
              </div>
              <div className='pieTextPartGrid'>
                <h3>1,776.90 SOL</h3>
                <h3>968.35 SOL</h3>
                <h3>798.69 SOL</h3>
                <h3>541.36 SOL</h3>
                <h3>318.73 SOL</h3>
                <h3>172.43 SOL</h3>
              </div>
            </div>
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
