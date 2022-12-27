const dev = {
	baseURL: "https://main.d5b0ibjmhjyr.amplifyapp.com/api/",
	landingPageUrl: "https://main.d5b0ibjmhjyr.amplifyapp.com",
	stripe: {
		free: "price_1JcQD6HIZYvvnKladKayEvOZ",
		entry: "price_1JL68HHIZYvvnKlaBJWS5uDe",
		pro: "price_1JLQhlHIZYvvnKlakrqF8khB"
	},
};
  
const prod = {
	baseURL: '/api/',
	// landingPageUrl: "https://app.openaitemplate.com",
	landingPageUrl: "https://main.d5b0ibjmhjyr.amplifyapp.com",
	stripe: {
		free: "price_1JcQsUHIZYvvnKlaEPy958NF",
		entry: "price_1JLpWpHIZYvvnKlaHxiCr7Js",
		pro: "price_1JLpWxHIZYvvnKlamATZ7Awm"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;