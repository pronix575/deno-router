import { ServerRequest } from "https://deno.land/std/http/server.ts"

export type RouterResolver = (req: ServerRequest) => void

export type Routes = {
    [url: string]: RouterResolver,
}

export interface IRouter {
    use: (req: ServerRequest) => void    
}