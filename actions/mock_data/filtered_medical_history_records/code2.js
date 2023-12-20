return {{actions.medical_history_records.data}}
.filter(item => {
  if ({{ui.visitTypeFilter.value}} === 'all') {
    return true;
  }
  return item.visit_type === {{ui.visitTypeFilter.value}};
});