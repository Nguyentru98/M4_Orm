declare class studentservice {
    private studentRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (student: any) => Promise<void>;
}
declare const _default: studentservice;
export default _default;
