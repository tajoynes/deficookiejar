// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

///@title Savings_Account
///@author Tristan J.
/// @dev Allows users deposit and withdraw funds based on set time length

contract Cookie_Account {
    address public immutable acctHolder;
    uint256 public startDate;
    uint256 public holdingTerm;
    uint256 acctBal = 0;
    bool internal locked;

    event Sent(address from, address to, uint256 amount);

    modifier verifyAcctHolder() {
        require(msg.sender == acctHolder, "You are not authorized");
        _;
    }
    modifier acctLock() {
        require(!locked, "Cannot access");
        locked = true;
        _;
        locked = false;
    }

    modifier acctBalanceCheck() {
        require(acctBal >= 0, "Insufficient funds for request");
        _;
    }

    constructor(uint256 _termLength) payable {
        require(_termLength > 30);
        acctHolder = msg.sender;
        if (msg.value <= 0) {
            revert("Deposit must be greater");
        } else {
            startDate = block.timestamp;
            acctBal += msg.value;
            holdingTerm = (_termLength * 86400) / 60 / 60 / 24;
        }
    }

    function viewBal() public view verifyAcctHolder returns (uint256) {
        return acctBal;
    }

    mapping(address => uint256) withdrawTimestamp;
    mapping(address => uint256) depositTimestamp;

    function addToBal() public payable verifyAcctHolder {
        require(msg.value >= 1);

        acctBal += msg.value;
        depositTimestamp[msg.sender] = block.timestamp;
    }

    function withdrawBal(uint256 _withdrawAmt, address payable _recipient)
        public
        verifyAcctHolder
        acctLock
        acctBalanceCheck
    {
        require(_withdrawAmt >= 0, "Request must be greater than 0");
        require(
            block.timestamp >= startDate + holdingTerm * 86400,
            "Not enough time has passed"
        );

        acctBal -= _withdrawAmt;
        _recipient.transfer(_withdrawAmt);
        withdrawTimestamp[msg.sender] = block.timestamp;

        emit Sent(msg.sender, _recipient, _withdrawAmt);
    }

    function checkTime() public view returns (uint256) {
        return startDate + holdingTerm * 86400;
    }
}
