import ComponentOllPages from '../component-for-all-pages/ComponentOllPages';
import useGetCategory from '../../../hook/queryHook/useGetCategory';

const HomeDecoration = () => {
  const { data, isLoading } = useGetCategory("home-decoration")

    if (isLoading) return <h1 className="loading">Loading ..... </h1>;
  return <ComponentOllPages data={data} />
}

export default HomeDecoration