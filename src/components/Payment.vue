<template>
  <div class="payment">
    <form>
      <div class="wrpBilAddressPayment">
        <div class="addressBil">
          <h5>Billing Address</h5>
          <label for="fname"><i class="fa fa-user"></i> Full Name</label>
          <input
            required
            type="text"
            id="fname"
            name="firstname"
            placeholder="John M. Doe"
          />
          <label for="email"><i class="fa fa-envelope"></i> Email</label>
          <input
            required
            type="text"
            id="email"
            name="email"
            placeholder="john@example.com"
          />
          <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
          <input
            required
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <label for="city"><i class="fa fa-institution"></i> City</label>
          <input type="text" id="city" name="city" placeholder="New York" />
          <div class="itemBill">
            <label for="state">State</label>
            <input
              required
              type="text"
              id="state"
              name="state"
              placeholder="NY"
            />
          </div>
          <div class="itemBill">
            <label for="zip">Zip</label>
            <input
              required
              type="text"
              id="zip"
              name="zip"
              placeholder="10001"
            />
          </div>
        </div>

        <div class="payment">
          <h5>Payment</h5>
          <label for="fname"
            >Accepted Cards<br />
            <img id="payCards" src="@/assets/images/pay.png" alt="" />
          </label>
          <div class="icon-container">
            <i class="fa fa-cc-visa" style="color: navy"></i>
            <i class="fa fa-cc-amex" style="color: blue"></i>
            <i class="fa fa-cc-mastercard" style="color: red"></i>
            <i class="fa fa-cc-discover" style="color: orange"></i>
          </div>
          <label for="cname">Name on Card</label>
          <input
            required
            type="text"
            id="cname"
            name="cardname"
            placeholder="John More Doe"
          />
          <label for="ccnum">Credit card number</label>
          <input
            required
            type="text"
            id="ccnum"
            name="cardnumber"
            placeholder="1111-2222-3333-4444"
          />
          <label for="expmonth">Exp Month</label>
          <input
            required
            type="text"
            id="expmonth"
            name="expmonth"
            placeholder="September"
          />

          <div class="row">
            <div class="col-50">
              <label for="expyear">Exp Year</label>
              <input
                required
                type="text"
                id="expyear"
                name="expyear"
                placeholder="2018"
              />
            </div>
            <div class="col-50">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" />
            </div>
          </div>
        </div>
      </div>
      <label>
        <input required type="checkbox" checked="checked" name="sameadr" />
        Shipping address same as billing
      </label>
      <button type="submit" class="waves-effect lighten btn ofertabtn">
        Checkout
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.wrpPayment {
  padding: 4rem 0;
}

span.price {
  float: right;
  color: grey;
}

.wrpBilAddressPayment {
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    .addressBil {
      width: 40%;
    }
    .payment {
      width: 40%;
    }
  }
}

#payCards {
  width: 200px;
}

.wrpInfo {
  p {
    font-size: 19px;
    font-weight: 500;
    font-weight: 600;
    span {
      font-weight: 500;
    }
  }
}

.titleMain {
  font-weight: 500;
  font-size: 27px;
}
</style>