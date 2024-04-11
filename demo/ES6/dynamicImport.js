
setTimeout(()=>{
    import("./person.js").then((module)=>{
        const defaultExport=module.default
        const name=module.name
        console.log(name,defaultExport)
    })
},3000)