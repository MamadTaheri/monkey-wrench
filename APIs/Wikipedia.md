## raw URL with GET method

https://en.wikipedia.org/w/api.php

## required params for your request

    {
        action: 'query', 

        list: 'search',

        origin: '*',

        format: 'json',

        srsearch: *your_keyword*,
    }



# You can use this API with AXIOS library in React like this: 


    <!-- useState Hook -->
    const [term, setTerm] = useState('');
    const [result, setResult] = useState('');

    <!-- useEffect Hook -->
    useEffect(() => {         
        axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
            }
        })
        <!-- you can set the result to your state here -->
        <!-- we just print it on console -->
        .then(response => console.log(response));
        .catch(error => console.log(error.message))

    }, [term])
