/* eslint-disable react/prop-types */
import "./index.css";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  // const packedItems = items
  //   .filter((items) => items.packed)
  //   .reduce((acc, item) => acc + item.quantity, 0);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
