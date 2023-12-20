if(!actions.medical_history_records.data) {
return [];
}
return {{actions.medical_history_records.data}}.find(item => item.id === state.selectedRecord);