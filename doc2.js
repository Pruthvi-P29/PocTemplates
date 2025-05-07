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
     <img  id="Logo" src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; float: left; border-radius: 50%;">
      <p style="text-align: center;">RECEIPT/RECIBO</p>
      <p style="text-align: center;">TRACKING NUMBER (MTCN) 
          / NO. DE CONTROL DEL ENVIO</p>
        <p class="mtcn" style="text-align: center;">973-207-0255</p>
        <p style="text-align: center;">FOR CUSTOMER SERVICE, CALL 1-800-777-8784 / PARA COMUNICARSE CON EL SERVICIO DE ATENCION AL CLIENTE, LLAME AL 1-800-777-8784</p>`;
  }

  panel.innerHTML = html;
}

function handleFooterChange() {
  const value = document.getElementById('footerDropdown').value;
  const content = document.getElementById('footerContent');

  if (value === "support") {
    content.innerHTML =`
    <p> In addition to the transfer fee, Western Union makes
        money when it changes your dollars into foreign
        currency. See the Terms & Conditions for more
        information about currency exchange. If the exchange
        rate for your transaction was determined at the time
        you sent the money, the currency to be paid out and
        the exchange rate are listed on your receipt. Otherwise,
        the exchange rate will be set when the receiver
        receives the funds.</p>`;
    content.style.display = 'block'; // Show content
  } else if (value === "policy") {
    content.innerHTML =`For inquiries or comments please write to:/Si tiene
        preguntas o comentarios, escriba a:
        WESTERN UNION
        P.O. Box 6036, Englewood, CO 80155
        Full Terms & Conditions including important provisions
        regarding limitations of liability, resolution of disputes, and
        administration charges are available by asking your Agent
        for a copy, calling 1-800-325-6000, or visiting Go.Wu.Com/
        Terms./Términos y condiciones completos, incluidas las
        disposiciones importantes relacionadas con las limitaciones
        de responsabilidad, la resolución de disputas y los cargos
        de administración disponibles mediante la solicitud de una
        copia a tu Agencia, llamando al 1-800-325-6000 o visitando
        Go.Wu.Com/Terms.`;
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
    panel.innerHTML = ` <div class="section-SERVICE DETAILS" style="padding: top -10px;;">
        <h4 style="padding-top: -10px;">SERVICE DETAILS/DETALLES DEL SERVICIO:</h4>
        <div class="row"><span>Date of Transactions:</span><span>December 05, 2024 / Diciembre 05, 2024</span></div>
        <div class="row"><span>Time of Transactions:</span><span>04:13 AM EST</span></div>
        <div class="row"><span>Service Type:</span><span>BELIZE CHAMBER OF COMMERCE CASH</span></div>
        <div class="row"><span>Payout Location:</span><span>Belize / Belice</span></div>
        <div class="row"><span>Date Available:</span><span>December 05, 2024 / Diciembre 05, 2024</span></div>
      </div>
      <div class="section-SENDER">
        <h4>SENDER/REMITENTE</h4>
        <p>RAMSHA ANAMM<br>street number 35, alaska, NY, 10001, USA<br>2035354800</p>
      </div>
      
      <div class="section-Signature">
      <p> ______________________
        <br>
        <strong>Your Signature / Su Firma 
        </strong>
      </p>
      <p>
      </strong> ______________________
    <br>
  <strong>Agent Signature / Firma del Agente <br></p>
    </div>`;
  } else if (value === "services") {
    panel.innerHTML = `<div class="section-RECEIVER">
        <h4>RECEIVER/DESTINATARIO</h4>
        <p>JOJO SHINCHAN<br>Belmopan, Cayo</p>
      </div>

      <div class="section-TRANSACTION DETAILS">
        <h4>TRANSACTION DETAILS/DETALLES DE LA TRANSACCION</h4>
        <div class="row"><span>Transfer Amount:</span><span>1,500.00 USD</span></div>
        <div class="row"><span>Transfer Fees:</span><span>+ 15.00 USD</span></div>
        <div class="row"><span>Additional Fees:</span><span>+ 0.00 USD</span></div>
        <div class="row"><span>Transfer Taxes:</span><span>+ 0.00 USD</span></div>
        <div class="row"><span>Promotion Discount:</span><span>- 0.00 USD</span></div>
      
        <!-- Break line before total -->
        <hr class="break">
        <div class="row"><span>Total:</span><span>1,515.00 USD</span></div>
      
        <!-- Break line before exchange rate -->
        <hr class="break">
        <div class="row"><span>Exchange Rate:</span><span>1 USD = 1.9999 BZD</span></div>
        <div class="row"><span>Transfer Amount:</span><span>2,999.85 BZD</span></div>
        <div class="row"><span>Total to Receiver:</span><span>2,999.85 BZD</span></div>
      </div>
      <div class="section-Signature">
      <p> ______________________
        <br>
        <strong>Your Signature / Su Firma 
        </strong>
      </p>
      <p>
      </strong> ______________________
    <br>
  <strong>Agent Signature / Firma del Agente <br></p>
    </div>
`;
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