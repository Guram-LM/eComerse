import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../ReactQuery/Query/getCategory"
import type { Product } from "../../interface/queryInterface"


const useGetCategory = (category: string) => {
 const result =useQuery<Product []>({
    queryKey: ["category", {category}],
    queryFn: () => getCategory(category)

 })
 return result
}

export default useGetCategory