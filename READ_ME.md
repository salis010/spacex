# SPACE-X

## Start

-   `npm i`
-   `npm run start`
-   Open browser in `localhost:3000`

## Shortcomings

### Query surpasses complexity treshold

The query in the assignment returns an error because it surpasses the complexity treshold:

```
{
   "graphQLErrors":[

   ],
   "networkError":{
      "name":"ServerError",
      "response":{

      },
      "statusCode":400,
      "result":{
         "errors":[
            {
               "message":"query exceeds complexity limit",
               "locations":[
                  {
                     "line":1,
                     "column":1
                  }
               ],
               "extensions":{
                  "code":"GRAPHQL_VALIDATION_FAILED"
               }
            }
         ]
      }
   },
   "message":"Response not successful: Received status code 400"
}
```

As such certain features, such as displaying rockets and filtering by rockets could not be developed.

### Some Missions cannot be searched

Either I missed something or certain missions cannot be searched by using either `id` or `mission_name`

I tried using `id` in the spacex-api playground, no success. The documentation says it is of type `ID` which is not human readable, but that it can still accept string or numbers. Still did not work on the playground.

So I used `mission_name` as the search field. However, certain names just throw an error; most notably those that have parenthesis such as the 'Starlink' ones.

### Lack of Time

Anything lacking, such as the Cypress test, resolving the above errors, the Search option, and filtering, is due to lack of time.
