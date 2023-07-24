"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../entity/blog");
const data_source_1 = require("../data-source");
class blogService {
    constructor() {
        this.getAll = async () => {
            let blog = await this.blogRepository.find();
            return blog;
        };
        this.add = async (student) => {
            await this.blogRepository.save(student);
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.blog);
    }
}
exports.default = new blogService();
//# sourceMappingURL=blogService.js.map