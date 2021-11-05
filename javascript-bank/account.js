/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (amount < 0) {
    return false;
  } else {
    return true;
  }
};
Account.prototype.withdraw = function (amount) {
  if (amount < 0) {
    return false;
  } else {
    return true;
  }
};
Account.prototype.getBalance = function (amount) {

};
