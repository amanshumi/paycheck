# PayCheck
 
## Added Endpoints

### Password Change:

curl --location --request PUT 'localhost:3000/auth/change-password' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NjA5OTA4LCJleHAiOjE3MTc2OTYzMDh9.ORn4CrVck5pQahccV8tS4AVKG52z6fw8_s4wfY4HLhM' \
--data '{
  "oldPassword": "123456",
  "newPassword": "123456"
}
'

### Get Group Member Info
curl --location --request GET 'localhost:3000/group/get-member-detail/1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NjA5OTA4LCJleHAiOjE3MTc2OTYzMDh9.ORn4CrVck5pQahccV8tS4AVKG52z6fw8_s4wfY4HLhM' \
--data-raw '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
'
