
function paystackPopUp(publicKey, email, amount, ref, plan, currency, onClosed, callback) {
  let config = {
    key: publicKey,
    email: email,
    amount: amount,
    ref: ref,
    currency: currency,
    onClose: function () {
      alert("Window closed.");
      onClosed();
    },
    callback: function (response) {
      callback();
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
    bearer: "subaccount"
  };

  if (plan) {
    config.subaccount = plan;
  }

  let handler = PaystackPop.setup(config);
  return handler.openIframe();
}
