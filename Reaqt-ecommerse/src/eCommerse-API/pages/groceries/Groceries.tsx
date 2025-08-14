import useGetCategory from "../../../hook/queryHook/useGetCategory";
import ComponentOllPages from "../component-for-all-pages/ComponentOllPages";

const Groceries = () => {
  const { data, isLoading } = useGetCategory("groceries")

    if (isLoading) return <h1 className="loading">Loading ..... </h1>;
  return <ComponentOllPages data={data} />
}

export default Groceries