module.exports ={
    apps:[
        {
            name:'gurunanakWebsite',
            script:'AcceptFile2.js',
            instances:1,
            watch:true,
            autorestart:true,
            max_memory_restart:'1G',
        }
    ]
}
