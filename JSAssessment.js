/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftList = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftName, nftAttr1, nftAttr2) {
    const nft = {
        name: nftName,
        attr1: nftAttr1,
        attr2: nftAttr2,
    }
    nftList.push(nft)
    console.log("Minted " + nftName)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftList.length; i++) {
        console.log("Name: " + nftList[i].name)
        console.log("Attribute 1: " + nftList[i].attr1)
        console.log("Attribute 2: " + nftList[i].attr2)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("No. of created NFTs: " + nftList.length)
}

// call your functions below this line
mintNFT("NFT One", "Red", "Angry")
mintNFT("NFT Two", "Blue", "Sad")
mintNFT("NFT Three", "Yellow", "Happy")
mintNFT("NFT Four", "White", "Neutral")
listNFTs()
getTotalSupply()
