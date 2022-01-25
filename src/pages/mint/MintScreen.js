import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import MintTab from './MintTab';
import InventoryTab from './InventoryTab';
import styles from './MintScreen.module.css';
import WALLET_ICON from '../../assets/images/wallet.svg';
import AppSpinner from '../../components/loading/AppSpinner';

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import abi from "../../contract/abi.json";

const infuraId = "88b3ca144c6648df843909df0371ee08";
const contractAddress = "0x142D89E1F716fa26B7ac8b532C6B990F86Eb8411";
const contractAbi = abi;
const tokenPrice = 0.1;

const providerOptions = {
  /* See Provider Options Section */
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId
    }
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "Web3Modal Example App",
      infuraId
    }
  }
};


const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

let web3Provider = null;
const sale = true;

const MintScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false) ;
  const [account, setAccount] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [signer, setSigner] = useState('');
  const [tsNumber, setTsNumber] = useState(0);
  const [userMintTokens, setUserMintTokens] = useState([]);
  useEffect(() => {
    setSigner(signer);
  }, [signer]);

  useEffect(() => {
    if (web3Modal.cachedProvider){
      let connectType = 'MetaMask';
      if (web3Modal.cachedProvider == 'injected'){
        connectType = 'MetaMask';
      } else if (web3Modal.cachedProvider == 'walletconnect') {
        connectType = 'WalletConnect';
      } else {
        connectType = 'Coinbase Wallet';
      }

      connect(connectType);
      if (sale) {
        setInterval( async () => {
          let contract = new ethers.Contract(contractAddress, contractAbi, web3Provider.getSigner());
          if (contract){
            let totalSupply = await contract.totalSupply();
            let mintedTokenNumber = totalSupply.toNumber();
            setTsNumber(mintedTokenNumber);
          }
        }, 2000);
      }
    }
  }, []);

  const getUserTokens = async (addy) => {
    let contract = new ethers.Contract(contractAddress, contractAbi, web3Provider.getSigner());
    if (contract){
      let userTokens = await contract.tokensOfOwner(addy);
      setUserMintTokens(userTokens);
    }
  }

  const connect = async function (name) {
    let walletType = 'MetaMask' ;
    if (name === 'MetaMask') {
      walletType = 'injected';
    } else if(name === 'WalletConnect') {
      walletType = 'walletconnect';
    } else if(name === 'Coinbase Wallet') {
      walletType = 'walletlink';
    }
    await web3Modal.clearCachedProvider();
    // const instance = await web3Modal.connect(providerOptions);
    const instance = await web3Modal.connectTo(walletType);
    web3Provider = new ethers.providers.Web3Provider(instance);
    const signer = web3Provider.getSigner();
    const user_address = await signer.getAddress();
    const address = user_address.slice(0, 5) + '...'+ user_address.slice(-4, user_address.length);
    setSigner(web3Provider.getSigner());
    setAccount(address);
    setUserAddress(user_address);
    getUserTokens(user_address);
  };
  
  const mintFunction = async (mintCount) => {

    let contract = new ethers.Contract(contractAddress, contractAbi, web3Provider.getSigner());
    setLoading(false);
    let payableValue = tokenPrice * mintCount

    try {
      const tx = await contract.mint(userAddress, mintCount, {value: ethers.utils.parseEther(payableValue.toString()) });
      let receipt = await tx.wait();
      if (receipt.status){
        NotificationManager.success(mintCount+' NFT was minted.', 'Mint Success!');
        getUserTokens(userAddress);
      } else {
        NotificationManager.error(mintCount+' NFT was not minted.', 'Mint Faield!');
      }
    } catch (err) {
      console.log(err);
      NotificationManager.error(mintCount+' NFT was not minted', 'Mint Faield!');
    }
  }

  return (
    <div className="app-page bg-black">
      <div className={styles.container}>
        <div className={styles.card}>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={setTabIndex}
            selectedTabClassName={styles.tabSelected}
          >
            <div className="px-2">
              <TabList className={styles.tabList}>
                <Tab className={styles.tabNormal}>Mint ({userMintTokens.length})</Tab>
                <Tab className={styles.tabNormal}>Inventory</Tab>
              </TabList>
            </div>
            <TabPanel>
              <MintTab tsn={tsNumber} account={account} connect={(name) => connect(name)} flag={web3Modal.cachedProvider} handleMint={(mintCount) => mintFunction(mintCount)} />
            </TabPanel>
            <TabPanel>
              <InventoryTab data={userMintTokens} connect={(name) => connect(name)} flag={web3Modal.cachedProvider}/>
            </TabPanel>
          </Tabs>
          <img
            src={WALLET_ICON}
            alt=""
            className={styles.icon}
          />
        </div>
      </div>
      <NotificationContainer/>
      {loading && <AppSpinner absolute />}
    </div>
  );
};

export default MintScreen;
