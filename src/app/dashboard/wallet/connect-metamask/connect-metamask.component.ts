import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ethers } from 'ethers';
import Swal from 'sweetalert2';
import web3 from "web3";
import { DashboardService } from '../../dashboard.service';




@Component({
  selector: 'app-connect-metamask',
  templateUrl: './connect-metamask.component.html',
  styleUrls: ['./connect-metamask.component.css']
})
export class ConnectMetamaskComponent implements OnInit {

  connect=false
  amount: any;
  coin: any;
  data: any;
  ethereum: any;
  addBroker!:FormGroup
  meetaMaskCentralWallet="0x1c3bbbf822caf20e13111915bd3b43e868dca9ca"
  // centralColdWallet = "0xbd5d703838488e20d043baf39cdb250f54c2c737";
  centralColdWallet = "0x1c3bbbf822caf20e13111915bd3b43e868dca9ca";
  txHash: any;
  body: any;
  data1: any;

 

  constructor(public route:Router,private api:DashboardService,private formbuilder:FormBuilder) {
    this.ethereum = api.window.ethereum;
   }

  ngOnInit(): void {
    this.amount= localStorage.getItem('depositData')
    this.coin= localStorage.getItem('depositData1')
    this.addBroker = this.formbuilder.group({     
     
      txnHash: this.txHash,
      type:this.coin
      
    
      
    })  
   

    this.hashData();
    // this.saveData();
      
   
  }

  hashData(){
    console.log("vivek",this.coin)  
    this.api.meetaMask({'coin':this.coin}).subscribe((res: any) => {
      this.data=res.data
     console.log("vivek12",this.data)
  } );
  }

  saveData(){
    this.api.postDataMettamask(`/add-metamask-txn/${this.txHash}/${this.coin}`, this.body).subscribe((res: any) => {
      this.data1=res.publicKey
      console.log("viv",this.data)
  } );
  }

 


    // this.connect=true
    async handleTransferEth() {
      let chainId = 1;
      let network = "mainnet";
      if (network == "testnet") {
        console.log("Testnet environment");
        chainId = 5; 
      } else {
        chainId = 1;
      }
      if (this.ethereum !== undefined) {
        console.log("Metamask detected");
        if (this.ethereum.networkVersion !== chainId) {
          try {
            await  this.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: web3.utils.toHex(chainId) }],
            });
          } catch (err:any) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
              await this.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainName: "Goerli Testnet",
                    chainId: web3.utils.toHex(chainId),
                    nativeCurrency: {
                      name: "ETH",
                      decimals: 18,
                      symbol: "ETH",
                    },
                    rpcUrls: ["https://goerli.infura.io/v3/"],
                  },
                ],
              });
            }
          }
        }
        console.log("vivek12",this.data)
  try{
        const provider = new ethers.providers.Web3Provider(this.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        console.log(accounts);
        const signer = provider.getSigner();
  
        // Send 1 ether to an ens name.
        const tx = await signer.sendTransaction({
          to:  this.data,
         
          value: ethers.utils.parseEther(this.amount),
        });
       
      
        this.txHash=tx.hash
        if(this.txHash){
          this.saveData();
        }
     
        this.route.navigateByUrl('/dashboard/wallet/metamask-payment')

        console.log(this.data, "vivek");
        console.log(this.txHash, "Txs dfh");
      } 
      catch(e:any){
        console.log("sadj",e.code)
        if(e.code=='ACTION_REJECTED'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User Denied Transaction!',
         
        })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insufficient Balance!',
           
          })
        }
        
      }
    }
      else {
        alert("install metamask extension!!");
      }
    }


   async handleTransferAidus() {
      const centralColdWallet = "0xbd5d703838488e20d043baf39cdb250f54c2c737";
      const contractAddress = "0xeC5980B1361127287F64fdD41f88C75Dd244cFda";
      let chainId = 1;
      let network = "mainnet";
      if (network == "testnet") {
        console.log("Testnet environment");
        chainId = 5; 
      } else {
        chainId = 1;
      }
      if (this.ethereum !== undefined) {
        console.log("Metamask detected");
        if (this.ethereum.networkVersion !== chainId) {
          try {
            await this.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: web3.utils.toHex(chainId) }],
            });
          } catch (err:any) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
          
              await this.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainName: "Goerli Testnet",
                    chainId: web3.utils.toHex(chainId),
                    nativeCurrency: {
                      name: "ETH",
                      decimals: 18,
                      symbol: "ETH",
                    },
                    rpcUrls: ["https://goerli.infura.io/v3/"],
                  },
                ],
              });
            }
          }
        }
  try{
        const provider = new ethers.providers.Web3Provider(this.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
     
        console.log("sdfg",accounts);
        const signer = provider.getSigner();
  
        const abi = [
          "function transfer(address to, uint amount) public returns (bool)",
        ];
        const amount = this.amount;
        const contractInstance = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        const tx = await contractInstance['transfer'](
          this.data,
          ethers.utils.parseEther(amount)
        );

       
        this.txHash=tx.hash
        if(this.txHash){
          this.saveData();
        }
     
        this.route.navigateByUrl('/dashboard/wallet/metamask-payment')

     
        
  
        console.log(tx, "Txs Receipt");
  }
  catch(e:any){
    console.log("sadj",e.code)
    if(e.code=='ACTION_REJECTED'){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User Denied Transaction!',
     
    })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insufficient Balance!',
       
      })
    }
    
  }

      }
       else {
        alert("install metamask extension!!");
      }
    }

    async handleTransferUSDT() {
      const centralColdWallet = "0xbd5d703838488e20d043baf39cdb250f54c2c737";
      const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
      let chainId = 1;
      let network = "mainnet";
      if (network == "testnet") {
        console.log("Testnet environment");
        chainId = 5; 
      } else {
        chainId = 1;
      }
      if (this.ethereum !== undefined) {
        console.log("Metamask detected");
        if (this.ethereum.networkVersion !== chainId) {
          try {
            await this.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: web3.utils.toHex(chainId) }],
            });
          } catch (err:any) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
          
              await this.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainName: "Goerli Testnet",
                    chainId: web3.utils.toHex(chainId),
                    nativeCurrency: {
                      name: "ETH",
                      decimals: 18,
                      symbol: "ETH",
                    },
                    rpcUrls: ["https://goerli.infura.io/v3/"],
                  },
                ],
              });
            }
          }
        }
  try
  {
        const provider = new ethers.providers.Web3Provider(this.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
     
        console.log("accounts",accounts);
        const signer = provider.getSigner();
  
        const abi = [
          "function transfer(address to, uint amount) public returns (bool)",
        ];
        const amount = this.amount;
        // const usdtAmount =amount.parseInt()
        const BigAmount=amount*1000000
        // const bigAmount=ethers.BigNumber.from(amount);
        // const usdtAmount=bigAmount.mul(1000000)
console.log("amount",BigAmount.toString())
        const contractInstance = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        const tx = await contractInstance['transfer'](
          this.data,
          // ethers.utils.parseEther(amount)
          BigAmount.toString()
        );

       
        this.txHash=tx.hash
        if(this.txHash){
          this.saveData();
        }
     
        this.route.navigateByUrl('/dashboard/wallet/metamask-payment')

     
        
  
        console.log(tx, "Txs Receipt");
  }
  catch(e:any){
    console.log("sadj",e.code)
    if(e.code=='ACTION_REJECTED'){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User Denied Transaction!',
     
    })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Insufficient Balance!',
       
      })
    }
    
  }

      }
       else {
        alert("install metamask extension!!");
      }
    }

    
  

  pay(){
    this.route.navigate(['/dashboard/wallet/metamask-payment'])
  }

}
