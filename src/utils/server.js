const yelpApiKey = '7R_9kRtDD_IvRNAVM8M1JDgCX3TLg0SHiryMnoS9Gc0VCemTjz-AhWdEqYYFSJ7EP9CKnQ8TwdkJg6NFogbE_BgTJibLChEEei3gQKWEXm_KvZ9xfjO6Z_ARIYtCZXYx'
const clientId = 'bD0WrZfn9RvEbjc6YcKWTw'

const getData = async () => {
    try {
        const response = await fetch('https://api.yelp.com/v3');
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
        throw new Error('Request failed!');
    } catch(error) {
        console.log(error);
    }
}
