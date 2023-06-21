import { useSelector } from 'react-redux';

const Category = () => {
  const { status } = useSelector((state) => state.category);
  return (
    <div>
      <p className="under-construction">{status}</p>
    </div>
  );
};
export default Category;
