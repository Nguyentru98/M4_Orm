declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    delete: (data: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    find: (text: any) => Promise<any>;
    increase: () => Promise<any>;
    decrease: () => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
