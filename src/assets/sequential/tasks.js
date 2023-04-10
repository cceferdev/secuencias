const util = require ('util')
const sleep =util.promisify(setTimeout)

module.exports={

        async taskOne(){
            await sleep(4000)
            return 'Holi'
        },
        async taskTwo(){
            await sleep (1000)
            return 'Two VALUE'
        }
}