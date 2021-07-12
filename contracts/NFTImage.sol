pragma solidity >=0.5.0 <0.7.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTImage is ERC721, Ownable{

    struct ImgFile{
        string imgName;
        uint imgPrice;
        string imgDescription;
        string imgHash;
    }

    uint public tokenCounter;
    
    mapping(address => ImgFile[]) files;

    constructor() public ERC721("Django","DJG"){
        tokenCounter = 0;
    }

    function uploadImg(string memory _imgName, uint _imgPrice, string memory _imgDescription, string memory _imgHash) public{
        files[msg.sender].push(ImgFile({imgName: _imgName, imgPrice: _imgPrice, imgDescription:  _imgDescription, imgHash:  _imgHash}));
    }

    function getImage(uint _index) public view returns(string memory, uint, string memory, string memory){
        ImgFile memory file = files[msg.sender][_index];
        return (file.imgName, file.imgPrice, file.imgDescription, file.imgHash);
    }

    function getCount()public view returns(uint){
        return files[msg.sender].length;
    }

    function mintNft(address receiver, string memory tokenURI) external onlyOwner returns (uint256) {
        uint256 newNftTokenId = tokenCounter;
        _mint(receiver, newNftTokenId);
        _setTokenURI(newNftTokenId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newNftTokenId;
    }
}