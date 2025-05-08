localStorage.getItem("")

function handleHeaderChange() {
  const value = document.getElementById('headerDropdown').value;
  const panel = document.getElementById('headerContent');

  let html = '';

  if (value === 'receipt') {
    html = `
               <img  id="Logo" src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; float: left; border-radius: 50%;">
      <h3 style="text-align: center;padding-left: 24px;">${localStorage.getItem("receiptTitle")}</h3>`;

      panel.style.display = 'block';
  } else if (value === 'statement') {
    html = `
                 <img  id="Logo" src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; float: right; border-radius: 50%;">
        <h3 style="text-align: center;padding-left: 24px;">${localStorage.getItem("receiptTitle")}</h3>
        `;

      panel.style.display = 'block';
  } else if (value === 'year') {
    html = `
             <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 20px;">
  <img src="WU.png" alt="Random Logo" style="max-width: 180px; height: 40px; border-radius: 50%; object-fit: contain;">
  <div>
    <p style="text-align: center; font-size: 1.2rem; font-weight: bold; color: #333; margin: 0;">
    ${localStorage.getItem("receiptTitle")}
    </p>
  </div>
</div>
        `;
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
    content.innerHTML = `
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
    content.innerHTML = `For inquiries or comments please write to:/Si tiene
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
  
  const section1Value = document.getElementById('leftDropdown1').value;
  const section2Value = document.getElementById('leftDropdown2').value;
  const panel1 = document.getElementById('rightPanel1');
  const panel2 = document.getElementById('rightPanel2');

  // Update the content in the panel based on section 1's selection
  if (section1Value === "about") {
    panel1.innerHTML = ` <div class="section-SERVICE DETAILS" style="padding: top -10px;;">
      <h4 style="padding-top: -10px;">SERVICE DETAILS/DETALLES DEL SERVICIO:</h4>
      <div class="row"><span>Date of Transactions:</span><span>${localStorage.getItem("dateOfTransactions")} /${localStorage.getItem("dateOfTransactionsSpanish")}</span></div>
      <div class="row"><span>Time of Transactions:</span><span>${localStorage.getItem("timeOfTransactions")}</span></div>
      <div class="row"><span>Service Type:</span><span>BELIZE CHAMBER OF COMMERCE CASH</span></div>
      <div class="row"><span>Payout Location:</span><span>${localStorage.getItem("payoutLocation")} / ${localStorage.getItem("payoutLocationSpanish")}</span></div>
      <div class="row"><span>Date Available:</span><span>${localStorage.getItem("dateAvailable")} / ${localStorage.getItem("dateAvailableSpanish")}</span></div>
    </div>
    <div class="section-SENDER">
      <h4>SENDER/REMITENTE</h4>
      <p>${localStorage.getItem("sender")}<br>${localStorage.getItem("senderAddress")}<br>${localStorage.getItem("senderPhone")}</p>
    </div>
    `;
    panel1.style.display = 'block';
  } else if (section1Value === "tracking") {
      panel1.innerHTML = `<p>TRACKING NUMBER ${localStorage.getItem("trackingNumber")} 
        / NO. DECONTROL DELENVIO : <strong>973-207-0255</strong></p>
      <p>FOR CUSTOMER SERVICE, CALL ${localStorage.getItem("customerServiceNumber")} / PARA COMUNICARSE CON EL SERVICIO DE ATENCION AL CLIENTE, LLAME AL  ${localStorage.getItem("customerServiceNumber")}</p>
       <p><strong>DUMMY ORGANISATION</strong></p>
      <p>Operator ID / No. ID del Operador: <strong> ${localStorage.getItem("operatorId")}</strong></p>`;
      panel1.style.display = 'block';
  } else if (section1Value === "services") {
    panel1.innerHTML = `<div class="section-RECEIVER">
      <h4>RECEIVER/DESTINATARIO</h4>
      <p>${localStorage.getItem("receiver")}<br>${localStorage.getItem("receiverAddress")}</p>
    </div>

    <div class="section-TRANSACTION DETAILS">
      <h4>TRANSACTION DETAILS/DETALLES DE LA TRANSACCION</h4>
      <div class="row"><span>Transfer Amount:</span><span>${localStorage.getItem("transferAmount")}</span></div>
      <div class="row"><span>Transfer Fees:</span><span>${localStorage.getItem("transferFees")}</span></div>
      <div class="row"><span>Additional Fees:</span><span>${localStorage.getItem("additionalFees")}</span></div>
      <div class="row"><span>Transfer Taxes:</span><span>${localStorage.getItem("transferTaxes")}</span></div>
      <div class="row"><span>Promotion Discount:</span><span>${localStorage.getItem("promotionDiscount")}</span></div>
    
      <!-- Break line before total -->
      <hr class="break">
      <div class="row"><span>Total:</span><span>${localStorage.getItem("totalAmount")}</span></div>
    
      <!-- Break line before exchange rate -->
      <hr class="break">
      <div class="row"><span>Exchange Rate:</span><span>${localStorage.getItem("exchangeRate")}</span></div>
      <div class="row"><span>Transfer Amount:</span><span>${localStorage.getItem("transferAmountAfterExchange")}</span></div>
      <div class="row"><span>Total to Receiver:</span><span>${localStorage.getItem("totaltoReceiver")}</span></div>
    </div>`;
    panel1.style.display = 'block';
  } else if (section1Value === "contact") {
    panel1.innerHTML = 
    `<div class="section-Signature">
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
    <p>Email:${localStorage.getItem("receiverEmail")}<br>Phone: ${localStorage.getItem("receiverPhone")}<br>Location: ${localStorage.getItem("receiverLocation")}</p>`;
    panel1.style.display = 'block';
  }else {
    panel1.innerHTML = "";
    panel1.style.display = 'none'; // Hide content
  }

  if (section2Value === "about") {
    panel2.innerHTML = ` <div class="section-SERVICE DETAILS" style="padding: top -10px;;">
      <h4 style="padding-top: -10px;">SERVICE DETAILS/DETALLES DEL SERVICIO:</h4>
      <div class="row"><span>Date of Transactions:</span><span>${localStorage.getItem("dateOfTransactions")} /${localStorage.getItem("dateOfTransactionsSpanish")}</span></div>
      <div class="row"><span>Time of Transactions:</span><span>${localStorage.getItem("timeOfTransactions")}</span></div>
      <div class="row"><span>Service Type:</span><span>BELIZE CHAMBER OF COMMERCE CASH</span></div>
      <div class="row"><span>Payout Location:</span><span>${localStorage.getItem("payoutLocation")} / ${localStorage.getItem("payoutLocationSpanish")}</span></div>
      <div class="row"><span>Date Available:</span><span>${localStorage.getItem("dateAvailable")} / ${localStorage.getItem("dateAvailableSpanish")}</span></div>
    </div>
    <div class="section-SENDER">
      <h4>SENDER/REMITENTE</h4>
      <p>${localStorage.getItem("sender")}<br>${localStorage.getItem("senderAddress")}<br>${localStorage.getItem("senderPhone")}</p>
    </div>
    `;
    panel2.style.display = 'block';
  } else if (section2Value === "tracking") {
      panel2.innerHTML = `<p>TRACKING NUMBER ${localStorage.getItem("trackingNumber")} 
        / NO. DECONTROL DELENVIO : <strong>973-207-0255</strong></p>
      <p>FOR CUSTOMER SERVICE, CALL ${localStorage.getItem("customerServiceNumber")} / PARA COMUNICARSE CON EL SERVICIO DE ATENCION AL CLIENTE, LLAME AL  ${localStorage.getItem("customerServiceNumber")}</p>
       <p><strong>DUMMY ORGANISATION</strong></p>
      <p>Operator ID / No. ID del Operador: <strong> ${localStorage.getItem("operatorId")}</strong></p>`;
      panel2.style.display = 'block';
  } else if (section2Value === "services") {
    panel2.innerHTML = `<div class="section-RECEIVER">
      <h4>RECEIVER/DESTINATARIO</h4>
      <p>${localStorage.getItem("receiver")}<br>${localStorage.getItem("receiverAddress")}</p>
    </div>

    <div class="section-TRANSACTION DETAILS">
      <h4>TRANSACTION DETAILS/DETALLES DE LA TRANSACCION</h4>
      <div class="row"><span>Transfer Amount:</span><span>${localStorage.getItem("transferAmount")}</span></div>
      <div class="row"><span>Transfer Fees:</span><span>${localStorage.getItem("transferFees")}</span></div>
      <div class="row"><span>Additional Fees:</span><span>${localStorage.getItem("additionalFees")}</span></div>
      <div class="row"><span>Transfer Taxes:</span><span>${localStorage.getItem("transferTaxes")}</span></div>
      <div class="row"><span>Promotion Discount:</span><span>${localStorage.getItem("promotionDiscount")}</span></div>
    
      <!-- Break line before total -->
      <hr class="break">
      <div class="row"><span>Total:</span><span>${localStorage.getItem("totalAmount")}</span></div>
    
      <!-- Break line before exchange rate -->
      <hr class="break">
      <div class="row"><span>Exchange Rate:</span><span>${localStorage.getItem("exchangeRate")}</span></div>
      <div class="row"><span>Transfer Amount:</span><span>${localStorage.getItem("transferAmountAfterExchange")}</span></div>
      <div class="row"><span>Total to Receiver:</span><span>${localStorage.getItem("totaltoReceiver")}</span></div>
    </div>`;
    panel2.style.display = 'block';
  } else if (section2Value === "contact") {
    panel2.innerHTML = 
    `<div class="section-Signature">
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
    <p>Email:${localStorage.getItem("receiverEmail")}<br>Phone: ${localStorage.getItem("receiverPhone")}<br>Location: ${localStorage.getItem("receiverLocation")}</p>`;
    panel2.style.display = 'block';
  } else {
    panel2.innerHTML = "";
    panel2.style.display = 'none'; // Hide content
  }

  // Get both dropdown elements
  const section1Dropdown = document.getElementById('leftDropdown1');
  const section2Dropdown = document.getElementById('leftDropdown2');
  
  // Get all options from both dropdowns
  const section1Options = section1Dropdown.getElementsByTagName('option');
  const section2Options = section2Dropdown.getElementsByTagName('option');
  
  // Enable all options initially (reset both dropdowns)
  for (let i = 1; i < section1Options.length; i++) {
    section1Options[i].disabled = false;
  }
  for (let i = 1; i < section2Options.length; i++) {
    section2Options[i].disabled = false;
  }

  // Disable the option selected in section 1 from appearing in section 2
  for (let i = 1; i < section2Options.length; i++) {
    if (section2Options[i].value === section1Value) {
      section2Options[i].remove(); // Remove the selected option from section 2
    }
  }

  // Remove the selected option in section 2 from section 1
  for (let i = 1; i < section1Options.length; i++) {
    if (section1Options[i].value === section2Value) {
      section1Options[i].remove(); // Remove the selected option from section 1
    }
  }
}


function showPreview() {
  const headerValue = document.getElementById('headerContent').innerHTML;
  const leftValue1 = document.getElementById('rightPanel1').innerHTML;
  const leftValue2 = document.getElementById('rightPanel2').innerHTML;
  const footerValue = document.getElementById('footerContent').innerHTML;
  

  // Dynamically create HTML for the preview
  let previewHTML = `
  <div class="">
    <h3><strong>Header View:</strong></h3>
    <div class="preview-content">${headerValue}</div>
  </div>
  <div class="">
    <h3><strong>Section 1 View:</strong></h3>
    <div class="preview-content">${leftValue1}</div>
  </div>
   <div class="">
    <h3><strong>Section 2 View:</strong></h3>
    <div class="preview-content">${leftValue2}</div>
  </div>
  <div class="">
    <h3><strong>Footer Info:</strong></h3>
    <div class="preview-content">${footerValue}</div>
  </div>
`;

  // Insert the preview HTML into the popup
  document.getElementById("previewContent").innerHTML = previewHTML;

  // Show the popup
  
  if(headerValue && leftValue1 && leftValue2 && footerValue) {
    document.getElementById("popup").style.display = "flex";
  }
}

  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  function setDynamicValues() {
    localStorage.setItem("receiptTitle", "RECEIPT/RECIBO");
    localStorage.setItem("customerServiceNumber", "1-800-777-8784");
    localStorage.setItem("dateOfTransactions", "December 05, 2024");

  }

//   window.onload = () => {
//     document.getElementById('headerDropdown').value = 'receipt';
//     handleHeaderChange();
//   };

window.addEventListener('DOMContentLoaded', setDynamicValues);

window.addEventListener('DOMContentLoaded', handleFooterChange);

window.addEventListener('DOMContentLoaded', handleHeaderChange);

window.addEventListener('DOMContentLoaded', handleLeftChange);
