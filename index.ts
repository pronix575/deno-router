import { serve } from 'https://deno.land/std/http/server.ts'
import { Router } from './router/router.ts'

const PORT = 5000

const server = serve({ port: PORT })

console.log(`Server has been started on port ${ PORT }`)

const router = new Router({
    "/helloWorld": (req) => {
        console.log(req.url)
        req.respond({
            body: 'hello Deno! ;))))'
        })
    } 
})

for await (const req of server) {
    router.use(req)
}
