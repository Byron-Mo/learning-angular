angular.module("myApp", []).controller("myCtrl", function() {
  var myCtrl = this;
  myCtrl.services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
  ];
  myCtrl.total = 0;
  myCtrl.added = false;

  myCtrl.calculateTotal = function(event, index) {
    var added = event.currentTarget.className;
    // debugger
    if (added === "true") {
      event.currentTarget.className = "false"
      myCtrl.total -= myCtrl.services[index].price;
    } else {
      event.currentTarget.className = "true"
      myCtrl.total += myCtrl.services[index].price;
    }
    // if (event.currentTarget.id) {
    //   even
    // }
    // if (this.added) {
    //   this.added = false;
    //   this.total -= this.service[index].price;
    // } else {
    //   this.added = true;
    //   this.total += this.services[index].price;
    // }
  }
})
