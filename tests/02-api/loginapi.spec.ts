import{test,expect,request} from "@playwright/test"
import loginPayload from "../../api-requests/loginPayload.json"

test.use({
     baseURL: 'https://automationexercise.com'
})

test('Verify Login User exists',async({request})=>{
     
    const response = await request.post('/api/verifyLogin',{form:loginPayload} )
    const jsonresponse = await response.json()
    expect(response.status()).toBe(200)
    console.log(jsonresponse)
    //Validate Status
    expect(jsonresponse.responseCode).toBe(200)
    expect(jsonresponse.message).toContain('User exists!')
    //Validate Property
    expect(jsonresponse).toHaveProperty("responseCode")
    
})