# Send Mail using Node and Mailgun

Clone the repo or download the zip file into your machine. Expected the domain is already added to mailgun and the from email is already registered there.

Please follwo the steps before you using the application : 

1. npm init
2. npm update
3. Set all required configuration like API key, Doamin, From Email ID
4. go to terminal and run the index.js [ node index.js ]
5. Test the endpoint with Postman [ http://locahost:8888/testMail ]
6. Set the Request method to POST
7. Set the Request Body to JSON 
8. Add Parameter : 

'{
    "mail": "tristup@gmail.com",
    "subject": "test subject",
    "msg":"Hello how r u? "
}'