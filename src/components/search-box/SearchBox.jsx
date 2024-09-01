import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.search}>
      <label>
        Find contacts by name
        <input type="text" defaultValue={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
      </label>
    </div>
  );
};

export default Contact;
