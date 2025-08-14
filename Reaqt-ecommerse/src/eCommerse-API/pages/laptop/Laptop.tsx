import useGetCategory from "../../../hook/queryHook/useGetCategory";
import ComponentOllPages from "../component-for-all-pages/ComponentOllPages";



const Laptop = () => {
  const { data, isLoading } = useGetCategory("laptops");

  if (isLoading) return <h1 className="loading">Loading ..... </h1>;

  return <ComponentOllPages data={data} />
};

export default Laptop;
