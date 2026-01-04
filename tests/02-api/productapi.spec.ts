import{test,expect,request} from "@playwright/test"

test.use({
    baseURL:'https://automationexercise.com'
})

test('Search the Products',async({request})=>{
     const response = await request.post('/api/searchProduct',{form:{search_product:'jean'}})
     const Json = await response.json()
     console.log(JSON.stringify(Json,null,2))
     expect(response.status()).toBe(200)
     expect(Json).toHaveProperty('products')
     expect(Json.responseCode).toBe(200)
})