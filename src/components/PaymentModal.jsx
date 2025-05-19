import React, { useState } from 'react';

function PaymentModal({ isOpen, onClose, material }) {
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: material?.price || 0
  });

  const handleChange = (e) => {
    setPaymentInfo({...paymentInfo, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment info:', paymentInfo, 'For material:', material);
    // Payment processing logic would go here
    alert('Payment successful! Your download will begin shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Payment for {material?.title}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="payment-summary">
          <p><strong>Item:</strong> {material?.title}</p>
          <p><strong>Price:</strong> ${material?.price}</p>
          <p><strong>Type:</strong> {material?.type}</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" name="expiryDate" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handleChange} required />
          </div>
          <div className="form-actions">
            <button type="button" className="btn cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn">Pay ${paymentInfo.amount}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;
