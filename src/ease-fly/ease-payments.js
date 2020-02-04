import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import './shared-component/smart-accordion.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
/**
* @customElement
* @polymer
*/
class EasePayments extends PolymerElement {
static get template() {
return html`
<style>
  :host {
    display: block;
  }

  /* Credit Card */
  .credit-card {
    width: 360px;
    height: 400px;
    margin: 20px auto 0;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, .10);
  }
  .form-header {
    height: 60px;
    padding: 20px 30px 0;
    border-bottom: 1px solid #e1e8ee;
}
 
.form-body {
    height: 340px;
    padding: 30px 30px 20px;
}
.title {
    font-size: 18px;
    margin: 0;
    color: #5e6977;
}
.card-number,
.cvv-input input,
.month select,
.year select {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
}
 .year
 {
   position:relative;
 }
.card-number,
.month select,
.year select {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
}
 
.card-number,
.cvv-details,
.cvv-input input,
.month select,
.year select {
    opacity: .7;
    color: #86939e;
}
.card-number {
    width: 100%;
    margin-bottom: 20px;
    padding-left: 20px;
    border: 2px solid #e1e8ee;
    border-radius: 6px;
}
.month select,
.year select {
    width: 145px;
    margin-bottom: 20px;
    padding-left: 20px;
    border: 2px solid #e1e8ee;
    border-radius: 6px;
    background: url('caret.png') no-repeat;
    background-position: 85% 50%;
    -moz-appearance: none;
    -webkit-appearance: none;
}
 
.month select {
    float: left;
}
 
.year select {
    float: right;
}
.cvv-input input {
    float: left;
    width: 145px;
    padding-left: 20px;
    border: 2px solid #e1e8ee;
    border-radius: 6px;
    background: #fff;
}
 
.cvv-details {
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    float: right;
    margin-bottom: 20px;
}
.cvv-details p {
    margin-top: 6px;
}
.proceed-btn {
    margin-bottom: 10px;
    background: #7dc855;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    border-color: transparent;
    border-radius: 6px;
}
.proceed-btn a {
    text-decoration: none;
}
 
.proceed-btn a {
    color: #fff;
}
paper-input
{
  width:300px;
}
iron-icon
{
position:absolute;
right:5%;
}
</style>
<smart-accordion>
  <div slot="summary">Credit Card/Debit Card</div>
  <ul>
    <form class="credit-card">
      <div class="form-header">
        <h4 class="title">Credit card detail</h4>
      </div>

      <div class="form-body">
        <!-- Card Number -->
        <input type="text" class="card-number" placeholder="Card Number">

        <!-- Date Field -->
        <div class="date-field">
          <div class="month">
            <select name="Month">
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div class="year">
          <iron-icon icon=icons:arrow-drop-down></iron-icon>
            <select name="Year">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2024">2025</option>
              <option value="2024">2026</option>
              <option value="2024">2027</option>
              <option value="2024">2028</option>
            </select>
          </div>
        </div>

        <!-- Card Verification Field -->
        <div class="card-verification">
          <div class="cvv-input">
            <input type="text" placeholder="CVV">
          </div>
          <div class="cvv-details">
            <p>3 or 4 digits usually found <br> on the signature strip</p>
          </div>
        </div>

        <!-- Buttons -->
        <button type="submit" class="proceed-btn">Proceed</button>
      </div>
    </form>
  </ul>
</smart-accordion>
<smart-accordion>
  <div slot="summary">UPI ID</div>
  
  <paper-input label="Enter your upi"><div slot="suffix">@upi</div></paper-input>
  <button type="submit" class="upi-btn">Proceed</button>
</smart-accordion>
<smart-accordion>
  <div slot="summary">Wallets</div>
  <paper-radio-group selected="oneWay" id="tripType">
    <paper-radio-button name="phonePe">PhonePe</paper-radio-button>
    <paper-radio-button name="paytm">Paytm</paper-radio-button>
    <paper-radio-button name="mobikwik">Mobikwik</paper-radio-button>
</paper-radio-group>
<button type="submit" class="wallet-btn">Proceed</button>
</smart-accordion>
`;
}
static get properties() {
return {

};
}
}

window.customElements.define('ease-payments', EasePayments);