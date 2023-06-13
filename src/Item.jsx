/* eslint-disable react/prop-types */
import "./index.css";
const Item = ({ item, onDeleteItem, onPackChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => {
          onPackChange(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
        {/* Executing the function onDeleteItem without using the anonymous function can call the function at the time of render this 
        causes the function to delete the added items */}
      </span>
    </li>
  );
};

export default Item;
