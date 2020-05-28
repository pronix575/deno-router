import { ServerRequest } from "https://deno.land/std/http/server.ts"
import { Routes, IRouter } from "./router.types.ts"

export class Router implements IRouter {
    constructor(
        private Routes: Routes
    ) {}

    get routes() {
        return this.Routes
    }

    set routes(routes: Routes) {
        this.Routes = routes
    }

    use(req: ServerRequest) {
        if (this.routes[req.url]) { 
            
            this.routes[req.url](req) 
        
        } else {

            req.respond({
                status: 404,
                body: `error 404 (not found) route: ${ req.url }`
            })

        }        
    }
}

