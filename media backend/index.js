// import json server package
const jsonserver=require('json-server')

// create jsonserver

const server=jsonserver.create()

const router=jsonserver.router("db.json")

// create middleware-- (middleware use cheythal ann jsonserver data parse cheythit javascript format maatan pattulu)

const middleware=jsonserver.defaults()

// create port for back end
const PORT=process.env.PORT||4000

// middleware use in server
server.use(middleware)
server.use(router)


server.listen(PORT,()=>{
    console.log('media player server started at port :'+PORT);
})