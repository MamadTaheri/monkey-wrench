## raw URL with POST method

https://translation.googleapis.com/language/translate/v2

## required params for your request

    {
        q: *your_keyword*,

        target: *your_destination_language_like_fa_en_ar*,

        key: *your_key_from_google_website*,

    }

# You can use this API with AXIOS library in React like this:

    <!-- useState Hook -->
    const [term, setTerm] = useState('');
    const [result, setResult] = useState(''); 

    <!-- useEffect Hook -->
    useEffect(() => {       
        axios.post("https://translation.googleapis.com/language/translate/v2",
            {},
            {
                params: {
                    q: term,

                    target: 'fa',

                    key: *your_key_from_google_website*,
                },
            }
        )
        <!-- you can set the result to your state here -->
        <!-- we just print it on console -->
        .then(response => console.log(response));
        .catch(error => console.log(error.message))
        
    }, [term])
