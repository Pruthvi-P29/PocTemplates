function handleHeaderChange() {
  const value = document.getElementById('headerDropdown').value;
  const panel = document.getElementById('headerContent');

  let html = '';

  if (value === 'receipt') {
    html = `
          <img  id="Logo" src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; float: left; border-radius: 50%;">
      <h3 style="text-align: center;padding-left: 24px;">RECEIPT/RECIBO</h3>
      <h3 style="text-align: center;">TRACKING NUMBER (MTCN) 
          / NO. DE CONTROL DEL ENVIO</h3>
       <p class="mtcn" style="text-align: center;">973-207-0255</p>
        <strong><p style="text-align: center;">FOR CUSTOMER SERVICE, CALL 1-800-777-8784 / PARA COMUNICARSE CON EL SERVICIO DE ATENCION AL CLIENTE, LLAME AL 1-800-777-8784</p></strong>`;
  } else if (value === 'statement') {
    html = `
         <img  id="Logo" src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; float: right; border-radius: 50%;">
      <h3 style="text-align: center;padding-left: 24px;">RECEIPT/RECIBO</h3>
      <h3 style="text-align: center;">TRACKING NUMBER (MTCN) 
          / NO. DE CONTROL DEL ENVIO</h3>
        <strong><p class="mtcn" style="text-align: center;">973-207-0255</p></strong>
        <strong><p style="text-align: center;">FOR CUSTOMER SERVICE, CALL 1-800-777-8784 / PARA COMUNICARSE CON EL SERVICIO DE ATENCION AL CLIENTE, LLAME AL 1-800-777-8784</p></strong>`;
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

function showPreview() {
  const headerValue = document.getElementById('headerContent').innerHTML;
  const leftValue = document.getElementById('rightPanel').innerHTML;
  const footerValue = document.getElementById('footerContent').innerHTML;
  

  // Dynamically create HTML for the preview
  let previewHTML = `
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

window.onload = () => {
  document.getElementById('headerDropdown').value = 'receipt';
  handleHeaderChange();
};

window.addEventListener('DOMContentLoaded', handleFooterChange);