import PropTypes from 'prop-types';

export default function Filter ({onFilter}) {
  
  const handleFilter = (e) => {
    onFilter(e.currentTarget.value)
  }
  return <label>Find contacts by name <input
    type='text'
    name='filter'
    onChange={handleFilter}
  ></input></label>
    
}

Filter.propTypes = {
onFilter: PropTypes.func
}