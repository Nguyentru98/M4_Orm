import { blog } from "../entity/blog";
import {AppDataSource} from "../data-source";

class blogService{
    private blogRepository;
    constructor() {
        this.blogRepository = AppDataSource.getRepository(blog);
    }

    getAll = async () => {
        let blog = await this.blogRepository.find();
        return blog;
    }

    add = async (student) => {
        await this.blogRepository.save(student)
    }
}

export default new blogService();
