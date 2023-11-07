import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filter/filter-selectors";
import { addFilter } from "../../redux/filter/filter-slice";
import styles from "./filter.module.css";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = (e) => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        {/* <label className={styles.title}>Find contacts by name</label> */}
        <input
          type="text"
          placeholder="Find contact by name"
          value={filter}
          name="filter"
          className={styles.input}
          onChange={onFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
