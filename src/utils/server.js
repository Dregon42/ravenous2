const yelpApiKey = '7R_9kRtDD_IvRNAVM8M1JDgCX3TLg0SHiryMnoS9Gc0VCemTjz-AhWdEqYYFSJ7EP9CKnQ8TwdkJg6NFogbE_BgTJibLChEEei3gQKWEXm_KvZ9xfjO6Z_ARIYtCZXYx'


const getData = async (term, location, sortBy) => {

    
    try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${yelpApiKey}`
            }
        });
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const yelpInfo = jsonResponse
            return yelpInfo
        }
    } catch(error) {
        console.log(error);
    }
}

export default getData;
