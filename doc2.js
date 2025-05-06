function handleHeaderChange() {
    const value = document.getElementById('headerDropdown').value;
    const panel = document.getElementById('headerContent');
  
    let html = '';
  
    if (value === 'receipt') {
      html = `
        <div class="receipt">
          <p><strong>Receipt #202504</strong><br>
          Date: 2025-05-06<br>
          Customer: Jane Doe</p>
          <ul>
            <li>Product A x1 - $50.00</li>
            <li>Product B x2 - $30.00</li>
          </ul>
          <p>Subtotal: $110.00</p>
          <p>Tax: $8.80</p>
          <p><strong>Total: $118.80</strong></p>
        </div>`;
    } else if (value === 'statement') {
      html = `
        <div class="statement">
          <p><strong>April 2025 Statement</strong></p>
          <ul>
            <li>04/02 - Invoice #1001 - $75.00</li>
            <li>04/10 - Invoice #1002 - $85.00</li>
            <li>04/22 - Payment Received - ($160.00)</li>
          </ul>
          <p><strong>Balance: $0.00</strong></p>
        </div>`;
    } else if (value === 'year') {
      html = `
        <div class="year-statement">
          <p><strong>2024 Year Summary</strong></p>
          <p>Total Invoices: $1,200.00</p>
          <p>Total Payments: $1,200.00</p>
          <p><strong>Year-End Balance: $0.00</strong></p>
        </div>`;
    }
  
    panel.innerHTML = html;
  }
  
  function handleFooterChange() {
    const value = document.getElementById('footerDropdown').value;
    const content = document.getElementById('footerContent');
  
    if (value === "support") {
      content.innerHTML = "📞 Contact: support@xorg.com";
      content.style.display = 'block'; // Show content
    } else if (value === "policy") {
      content.innerHTML = "↩️ Returns accepted within 30 days.";
      content.style.display = 'block'; // Show content
    } else {
      content.innerHTML = "";
      content.style.display = 'none'; // Hide content
    }
  }
  
  function handleLeftChange() {
    const value = document.getElementById('leftDropdown').value;
    const panel = document.getElementById('rightPanel');
  
    if (value === "about") {
      panel.innerHTML = "<h3>About Us</h3><p>We are a global technology provider delivering secure and scalable document management systems since 2010.</p>";
    } else if (value === "services") {
      panel.innerHTML = "<h3>Our Services</h3><ul><li>Invoice & Receipt Management</li><li>Statement Generation</li><li>Compliance Audits</li></ul>";
    } else if (value === "contact") {
      panel.innerHTML = "<h3>Contact Us</h3><p>Email: info@xorg.com<br>Phone: (123) 456-7890<br>Location: 123 Innovation Drive, TX</p>";
    } else {
      panel.innerHTML = "";
    }
  }
  
  window.onload = () => {
    document.getElementById('headerDropdown').value = 'receipt';
    handleHeaderChange();
  };

  window.addEventListener('DOMContentLoaded', handleFooterChange);

  