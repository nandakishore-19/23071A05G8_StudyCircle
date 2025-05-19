import React, { useState } from 'react';

function Payment() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const plans = {
    monthly: { name: 'Monthly Plan', price: 19.99 },
    quarterly: { name: 'Quarterly Plan', price: 49.99 },
    yearly: { name: 'Yearly Plan', price: 149.99 }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleChange = (e) => {
    setPaymentInfo({...paymentInfo, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment info:', paymentInfo, 'Selected plan:', plans[selectedPlan]);
    // Payment processing logic would go here
    alert('Premium membership purchased successfully!');
  };

  return (
    <div className="page">
      <h1>Premium Membership</h1>
      
      <div className="plans-container">
        <div className={`plan-card ${selectedPlan === 'monthly' ? 'selected' : ''}`} onClick={() => handlePlanChange('monthly')}>
          <h3>Monthly</h3>
          <p className="plan-price">${plans.monthly.price}/month</p>
          <ul className="plan-features">
            <li>Unlimited access to all materials</li>
            <li>New materials notifications</li>
            <li>Cancel anytime</li>
          </ul>
          <div className="plan-select">
            <input 
              type="radio" 
              id="monthly" 
              name="plan" 
              checked={selectedPlan === 'monthly'} 
              onChange={() => handlePlanChange('monthly')} 
            />
            <label htmlFor="monthly">Select</label>
          </div>
        </div>
        
        <div className={`plan-card ${selectedPlan === 'quarterly' ? 'selected' : ''}`} onClick={() => handlePlanChange('quarterly')}>
          <h3>Quarterly</h3>
          <p className="plan-price">${plans.quarterly.price}/quarter</p>
          <p className="plan-saving">Save 16%</p>
          <ul className="plan-features">
            <li>All monthly features</li>
            <li>Download up to 50 materials/month</li>
            <li>Study progress tracking</li>
          </ul>
          <div className="plan-select">
            <input 
              type="radio" 
              id="quarterly" 
              name="plan" 
              checked={selectedPlan === 'quarterly'} 
              onChange={() => handlePlanChange('quarterly')} 
            />
            <label htmlFor="quarterly">Select</label>
          </div>
        </div>
        
        <div className={`plan-card ${selectedPlan === 'yearly' ? 'selected' : ''}`} onClick={() => handlePlanChange('yearly')}>
          <h3>Yearly</h3>
          <p className="plan-price">${plans.yearly.price}/year</p>
          <p className="plan-saving">Save 38%</p>
          <ul className="plan-features">
            <li>All quarterly features</li>
            <li>Unlimited downloads</li>
            <li>1-on-1 study sessions (2/month)</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="plan-select">
            <input 
              type="radio" 
              id="yearly" 
              name="plan" 
              checked={selectedPlan === 'yearly'} 
              onChange={() => handlePlanChange('yearly')} 
            />
            <label htmlFor="yearly">Select</label>
          </div>
        </div>
      </div>
      
      <div className="payment-section">
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group half">
              <label>Expiry Date</label>
              <input type="text" name="expiryDate" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={handleChange} required />
            </div>
            <div className="form-group half">
              <label>CVV</label>
              <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handleChange} required />
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p><strong>{plans[selectedPlan].name}</strong>: ${plans[selectedPlan].price}</p>
            <p><strong>Total</strong>: ${plans[selectedPlan].price}</p>
          </div>
          <button type="submit" className="btn">Complete Purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
