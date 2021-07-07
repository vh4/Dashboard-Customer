const filesystem = require('fs')

if(!filesystem.existsSync('database/')){
    filesystem.mkdirSync('database/')
}

if(!filesystem.existsSync('database/data.json')){
    filesystem.writeFileSync('database/data.json', '[]', 'utf-8')
}

const main = async ()=> {
    const file = await filesystem.readFileSync('database/data.json', 'utf-8')
    try {
        if(file.length == 0 ){
            return file;
        }
        else{
            const parse = JSON.parse(file)
            return parse;
        }
    } catch (error) {
        console.log(error)
    }
}