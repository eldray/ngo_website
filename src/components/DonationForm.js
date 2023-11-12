import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import donations from '../components/images/donations.jpg';


const DonationForm = () => {
  const [momoAmount, setMomoAmount] = useState('');
  const [momoNumber, setMomoNumber] = useState('');
  const [paypalAmount, setPaypalAmount] = useState('');
  const [paypalAccount, setPaypalAccount] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankAmount, setBankAmount] = useState('');

  const handleMomoSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/donate', {
        amount: momoAmount,
      });

      if (response.data.success) {
        console.log('MTN MoMo Donation submitted successfully:', momoAmount, momoNumber);
      } else {
        console.error('MTN MoMo Donation failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting MTN MoMo Donation:', error.message);
    }
  };

  const handlePaypalSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/paypal-donate', {
        amount: paypalAmount,
        account: paypalAccount,
      });

      if (response.data.success) {
        console.log('PayPal Donation submitted successfully:', paypalAmount, paypalAccount);
      } else {
        console.error('PayPal Donation failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting PayPal Donation:', error.message);
    }
  };

  const handleBankSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/bank-donate', {
        accountName: bankAccount,
        accountNumber: bankAmount,
        amount: bankAmount,
      });

      if (response.data.success) {
        console.log('Bank Details submitted successfully:', bankAccount, bankAmount);
      } else {
        console.error('Bank Details submission failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error submitting Bank Details:', error.message);
    }
  };

  return (
    <div className="donation-form container mb-4">
      <img src={donations} height={200} width={900} alt='Donations' className="mx-4 image-fluid"/>
      <div className="row mb-4">
        <div className="col-md-6">
          <h2>MTN MoMo Donation</h2>
          <form onSubmit={handleMomoSubmit}>
            <div className="form-group">
              <label htmlFor="momoAmount">Amount (USD)</label>
              <input
                type="number"
                value={momoAmount}
                onChange={(e) => setMomoAmount(e.target.value)}
                className="form-control"
                id="momoAmount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="momoNumber">Mobile Money Number</label>
              <input
                type="tel"
                value={momoNumber}
                onChange={(e) => setMomoNumber(e.target.value)}
                className="form-control"
                id="momoNumber"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-wallet mr-2"></i> Pay with MTN MoMo
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>PayPal Donation</h2>
          <form onSubmit={handlePaypalSubmit}>
            <div className="form-group">
              <label htmlFor="paypalAmount">Amount (USD)</label>
              <input
                type="number"
                value={paypalAmount}
                onChange={(e) => setPaypalAmount(e.target.value)}
                className="form-control"
                id="paypalAmount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paypalAccount">PayPal Account</label>
              <input
                type="text"
                value={paypalAccount}
                onChange={(e) => setPaypalAccount(e.target.value)}
                className="form-control"
                id="paypalAccount"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-paypal mr-2"></i> Pay with PayPal
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Bank Donation</h2>
          <form onSubmit={handleBankSubmit}>
            <div className="form-group">
              <label htmlFor="bankAccount">Account Name</label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="form-control"
                id="bankAccount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bankAmount">Amount (USD)</label>
              <input
                type="number"
                value={bankAmount}
                onChange={(e) => setBankAmount(e.target.value)}
                className="form-control"
                id="bankAmount"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-bank mr-2"></i> Donate via Bank Transfer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;