const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '' // Your account address 1
const account2 = '' // Your account address 2

const privateKey1 = '' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

// const main = async () => {
//     const senderBalanceBefore = await provider.getBalance(account1)
//     const recieverBalanceBefore = await provider.getBalance(account2)

//     console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
//     console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

//     const tx = await wallet.sendTransaction({
//         to: account2,
//         value: ethers.utils.parseEther("0.025")
//     })

//     await tx.wait()
//     console.log(tx)

//     const senderBalanceAfter = await provider.getBalance(account1)
//     const recieverBalanceAfter = await provider.getBalance(account2)

//     console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
//     console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
// }

// main()

 const main = async()=>{
    //Show account 1 balance before transfer
    const senderBaslanceBefore = await provider.getBalance(account1)
    //Show account2 balance before transfer
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}`)

    //Send Ether
    const tx = await wallet.sendTransaction({
        to:account2,
        value:ethers.utils.parseEther("0.025")
    })

    //Wait for transaction to be minted
    await tx.wait()
    console.log(tx)

    //Show account1 balance after transfer
     //Show account2 balance after transfer

     const senderBalanceAfter = await provider.getBalance(account1)
     const recieverBalanceAfter = await provider.getBalance(account2)

     console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}`)

 }
 main()