import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NFTImage from "./contracts/NFTImage.json";
import getWeb3 from "./getWeb3";

// import { Table } from 'reactstrap';
 
// import "bootstrap/dist/css/bootstrap.css";
//import { AddLinks } from './components/AddLinks';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
//import { Home } from './components/Home';
import "./App.css";

const Landing = () => (
  <div>
    <Header />
    <Foo />
    <Bar />
    <Own />
  </div>
)
const Foo = () => <div><Link to="/createNFT" className="btn">Create NFT</Link></div>;
const Bar = () => <div><Link to="/" className="btn">View my NFT</Link></div>;
const Own = () => <div><Link to="/" className="btn">Transfer Ownership</Link></div>;
const createNFT = () => <div><AddTransaction /></div>;

const NotFound = () => <div>Not found</div>

class App extends Component {
  state = { nftImage: [], web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = NFTImage.networks[networkId];
      const instance = new web3.eth.Contract(
        NFTImage.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getFile = async() => {
    //TODO:
  }

  onDrop = async() => {
    //TODO:
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/createNFT" component={createNFT} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
      </div> 
      // <div>
        //  {/* <Home />
        //  <Header /> */}
        //   <div className="container">      
        //    {/* <AddTransaction /> */}

        //   </div>
        // </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
