import * as React from 'react';
import Select from "react-select";

const SelectMulti = (props)=>  {
    // console.log(props);
  return (
    <Select
      defaultValue={props.defaultValue}
      isMulti
      menuIsOpen={props.menuOpen}
      name={props.name}
      options={props.options}
      className={props.className}
      classNamePrefix={props.classNamePrefix}
      closeMenuOnSelect={props.closeMenuOnSelect}
      onChange={props.onChange}
      onMenuOpen={props.onMenuOpen}
    />
  );
};

export default SelectMulti;