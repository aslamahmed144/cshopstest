let API_URL = ''

let DEV = false;

if(DEV===true){
	API_URL= 'http://localhost:5000'
}
else{
	API_URL = 'https://cshopsapi.cleverapps.io'
}

export {API_URL}