declare class blogService {
    private blogRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (student: any) => Promise<void>;
}
declare const _default: blogService;
export default _default;
