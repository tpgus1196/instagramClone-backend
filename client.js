//PrismaClient 초기화, 호스팅함
import {PrismaClient} from '@prisma/client';
// "type": "module"
//package.json에서 제거함


// import pkg from '@prisma/client';
// const {PrismaClient} = pkg;

const client = new PrismaClient(); 
export default client;
