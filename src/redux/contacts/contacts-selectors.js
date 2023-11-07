export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsEditing = state => state.contacts.isEditing;
export const selectSetSelectedId = state => state.contacts.selectedId;
export const selectError = state => state.contacts.error;