function handleHeaderChange() {
    const value = document.getElementById('headerDropdown').value;
    const panel = document.getElementById('headerContent');
    console.log(value, "here101.....")

    let html = '';
  
    if (value === 'receipt') {
      html = `
        <div class="receipt">
          <p><strong>Receipt #202504</strong><br>
          Date: 2025-05-06<br>
          Customer: Jane Doe</p>
          <div>
          <ul>
            <li>Product A x1 - $50.00</li>
            <li>Product B x2 - $30.00</li>
          </ul>
          </div>
          <p>Subtotal: $110.00</p>
          <p>Tax: $8.80</p>
          <p><strong>Total: $118.80</strong></p>
        </div>`;
        panel.style.display = 'block';
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
        panel.style.display = 'block';
    } else if (value === 'year') {
      html = `
        <div class="year-statement">
          <p><strong>2024 Year Summary</strong></p>
          <p>Total Invoices: $1,200.00</p>
          <p>Total Payments: $1,200.00</p>
          <p><strong>Year-End Balance: $0.00</strong></p>
        </div>`;
        panel.style.display = 'block';
    } else {
        panel.innerHTML = "";
        panel.style.display = 'none'; // Hide content
        return;
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

  function showPreview() {
    const headerValue = document.getElementById('headerContent').innerHTML;
    const leftValue = document.getElementById('rightPanel').innerHTML;
    const footerValue = document.getElementById('footerContent').innerHTML;
    

    // Dynamically create HTML for the preview
    let previewHTML = `
   <div class="preview-row">
    <div class="preview-section header-preview">
      <h3><strong>Header View:</strong></h3>
      <div class="preview-content">${headerValue}</div>
    </div>
    <div class="preview-section left-info-preview">
      <h3><strong>Selected View Info:</strong></h3>
      <div class="preview-content">${leftValue}</div>
    </div>
    <div class="preview-section footer-preview">
      <h3><strong>Footer Info:</strong></h3>
      <div class="preview-content">${footerValue}</div>
    </div>
  </div>
  `;

    // Insert the preview HTML into the popup
    document.getElementById("previewContent").innerHTML = previewHTML;

    // Show the popup
    if(headerValue && leftValue && footerValue) {
      document.getElementById("popup").style.display = "flex";
    }
  }

    // Function to close the popup
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
  
//   window.onload = () => {
//     document.getElementById('headerDropdown').value = 'receipt';
//     handleHeaderChange();
//   };

  window.addEventListener('DOMContentLoaded', handleFooterChange);

  window.addEventListener('DOMContentLoaded', handleHeaderChange);
