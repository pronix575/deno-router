![Version](https://img.shields.io/badge/version-0.0.1-g.svg)
# Deno router

## using:
```typescript
const router = new Router({
    "/helloWorld": (req) => {
        console.log(req.url)
        req.respond({
            body: 'hello Deno! ;)'
        })
    } 
})

for await (const req of server) {
    router.use(req)
}
```
## respond:
![](/media/helloWorld.png)
![](/media/hello404.png)