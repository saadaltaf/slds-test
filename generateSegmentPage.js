const fs = require('fs');
const path = require('path');

const campaignName = process.argv[2] || 'Demo Campaign';
const suppliersPath = path.join(__dirname, 'src', 'suppliers.json');
const outputDir = path.join(__dirname, 'docs');
const outputPath = path.join(outputDir, 'segment-review.html');

const suppliers = JSON.parse(fs.readFileSync(suppliersPath, 'utf8'));

const rows = suppliers.map(s => `\n          <tr class="slds-hint-parent">
            <th data-label="ID" scope="row">
              <div class="slds-truncate" title="${s.supplierId}">${s.supplierId}</div>
            </th>
            <td data-label="Name">
              <div class="slds-truncate" title="${s.supplierName}">${s.supplierName}</div>
            </td>
            <td data-label="Country">
              <div class="slds-truncate" title="${s.country}">${s.country}</div>
            </td>
            <td data-label="Segment">
              <div class="slds-truncate" title="${s.segment}">${s.segment}</div>
            </td>
          </tr>`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Supplier Review - ${campaignName}</title>
  <link rel="stylesheet" href="https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css">
</head>
<body>
  <div class="slds-m-around_medium">
    <h1 class="slds-text-heading_large slds-m-bottom_medium">Supplier Review - ${campaignName}</h1>
    <table class="slds-table slds-table_cell-buffer slds-table_bordered">
      <thead>
        <tr class="slds-line-height_reset">
          <th scope="col">
            <div class="slds-truncate">Supplier ID</div>
          </th>
          <th scope="col">
            <div class="slds-truncate">Name</div>
          </th>
          <th scope="col">
            <div class="slds-truncate">Country</div>
          </th>
          <th scope="col">
            <div class="slds-truncate">Segment</div>
          </th>
        </tr>
      </thead>
      <tbody>${rows}
      </tbody>
    </table>
  </div>
</body>
</html>`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, html);
console.log(`Written ${outputPath}`);
