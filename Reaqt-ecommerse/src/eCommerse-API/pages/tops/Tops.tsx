import useGetCategory from '../../../hook/queryHook/useGetCategory';
import ComponentOllPages from '../component-for-all-pages/ComponentOllPages';

const Tops = () => {
  const { data, isLoading } = useGetCategory("tops")

    if (isLoading) return <h1 className="loading">Loading ..... </h1>;
  return <ComponentOllPages data={data} />
}

export default Tops