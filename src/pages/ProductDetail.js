import { useParams } from "react-router-dom";
import mockProduct from "../mocks/mockProduct.json";
import ProductItem from "../components/ProductItem";

const ProductDetail = () => {
    const params = useParams();
    const productData = mockProduct;
    
    //Cách nhà quê viết function findProductById
    // function findProductById(product) {
    //     return product.id == params.product_id;
    // }
    // const product = productData.find(findProductById);
    // console.log(product);

    //Arrow function & Destructuring
    const product = productData.find(({ id }) => id == params.product_id);
    const currentPrice = product.price * (1 - product.sale / 100);
    console.log(product);

    //Lấy đc product data = id cho hiển thị ra nội dung chi tiết sản phẩm
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <img src={product.image} />
            <h1>Price: {currentPrice}</h1>
            <iframe width="560" height="315" src={product.video} title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default ProductDetail;