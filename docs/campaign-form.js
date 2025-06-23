function addRow(section) {
  const template = document.getElementById(section + '-template');
  const tbody = document.getElementById(section + '-tbody');
  if (template && tbody) {
    const clone = template.cloneNode(true);
    clone.id = '';
    clone.classList.remove('slds-hide');
    tbody.appendChild(clone);
    const btn = clone.querySelector('.remove-row');
    if (btn) btn.addEventListener('click', removeRow);
  }
}

function removeRow(event) {
  const row = event.currentTarget.closest('tr');
  if (row) row.remove();
}

function initRepeater(section) {
  const addLink = document.getElementById('add-' + section);
  if (addLink) {
    addLink.addEventListener('click', e => {
      e.preventDefault();
      addRow(section);
    });
  }
  document.querySelectorAll('#' + section + '-tbody .remove-row')
    .forEach(btn => btn.addEventListener('click', removeRow));
}

document.addEventListener('DOMContentLoaded', () => {
  ['query', 'transform', 'owner'].forEach(initRepeater);
});

export { addRow, removeRow };
