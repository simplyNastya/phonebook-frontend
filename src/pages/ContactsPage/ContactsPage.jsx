import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/contacts-selectors";
import { fetchContacts } from "../../redux/contacts/contacts-operations";
// import { Blocks } from "react-loader-spinner";

import ContactForm from "../../components/ContactForm/ContactForm";
import Contacts from "../../components/Contacts/Contacts";
import Filter from "../../components/Filter/Filter";

import styles from "./contactsPage.module.css";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <p className={styles.error}>Something went wrong. Try again later.</p>
      ) : (
        <div className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.sectionTitle}>PhoneBook</h1>
            <div className={styles.wrapper}>
              <ContactForm />
              <div className={styles.contactsListWrapper}>
                <h2>Contacts</h2>
                <Filter />
                {contacts.length !== 0 && <Contacts />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsPage;
