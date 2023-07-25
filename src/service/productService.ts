import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro); // truy vấn bảng nào truyền vào getRepository bảng đã tạo ở entity
    }

    getAll = async () => {
        let products = await this.productRepository.find({
                relations: {
                    Students: true,
                },
            })
        return products;
    }

    add = async (product) => {
        await this.productRepository.save(product)
    }

    delete = async (data) => {
        return await this.productRepository.delete(data)
    }
    update = async (id, data) => {
        return await this.productRepository.update(id,data)
    }
    find = async (text) => {
        return await this.productRepository.find({
            where: {
                name: text,   
            },
        }) 
    }
    increase = async () => {
        return await this.productRepository.find({order: {price: 'ASC'}})
    }
    decrease = async () => {
        return await this.productRepository.find({order: {price: 'DESC'}})
    }
    findByName = async (name) => {
        console.log(name);
        return await this.productRepository.find({
            where: {
               name: name  
            },
        })
    }
}

export default new ProductService();
