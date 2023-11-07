import instance from './auth';

export const getAllContacts = () => instance.get('/api/contacts');

export const addContact = data => {
  return instance.post('/api/contacts', data);
};

export const deleteContact = id => {
  return instance.delete(`/api/contacts/${id}`);
};

export const editContact = (updatedContactData) => {
  const {_id, ...restOfData} = updatedContactData
  return instance.put(`/api/contacts/${_id}`, restOfData);
};