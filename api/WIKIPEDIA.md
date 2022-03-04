## raw URl with GET method

https://en.wikipedia.org/w/api.php

## required params which should be required

    action: 'query', 

    list: 'search',

    origin: '*',

    format: 'json',

    srsearch: *your_keyword*,



# You can use this API with AXIOS library in React like this: 

    useEffect(() => {
        const search = async () => {
            axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
        }

        search();

    }, [term])
