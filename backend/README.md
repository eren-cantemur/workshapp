`
   src
      ├── app.js			app entry point
      ├── /api              controller layer: api routes
      ├── /config			config settings, env variables
      ├── /services         service layer: business logic
      ├── /models           data access layer: database models	
      ├── /scripts          miscellaneous NPM scripts
      ├── /subscribers      async event handlers
      └── /test             test suites

`

``
API Docs

PUT /user
   {
      id : id  
      email : email
      password : password
   }
GET /user
GET /user/:id
GET /user/:name
DELETE /user
   {
      id : id
   }

POST /address 
   {
      lat : lat,
      long : long, 
      country : country,
      city : city,
      county : county,
      openAddress: openAddress,
      postalCode : postalCode
   }
PUT /address 
   {
      id : id,
      lat : lat,
      long : long, 
      country : country,
      city : city,
      county : county,
      openAddress: openAddress,
      postalCode : postalCode
   }
GET /address/:id
GET /address/:workshopId
GET /address 
DELETE /address 
   {
      id : id
   }



PUT /customer
   {
      id : id,
      name : name,
      photo : photo
   }
GET /customer
GET /customer/:id
GET /customer/:name
DELETE /customer
   {
      id : id
   }

POST /review
   {
      comment : comment,
      rate : rate,
      userId : userId,
      workshopId : workshopId
   }
PUT /review
   {
      id : id,
      comment : comment,
      rate : rate,
      userId : userId,
      workshopId : workshopId
   }
GET /review
GET /review/:id
GET /review/:userId
DELETE /review
   {
      id : id
   }

POST /workshop
   {
      name : name,
      capacity : capacity
   }
PUT /workshop
   {
      id : id
      name : name,
      capacity : capacity
   }
GET /workshop
GET /workshop/:id
GET /workshop/:workshopManagerId
DELETE /workshop
   {
      id : id
   }


POST /workshopImage
   {
      path : path,
      workshopId : workshopId
   }
GET /workshopImage
GET /workshopImage/:workshopId
DELETE /workshopImage
   {
      id : id
   }

PUT /workshopManager
   {
      name : name,
      logo : logo,
      photo : photo
   }
GET /workshopManager
GET /workshopManager/:id
GET /workshopManager/:name
DELETE /workshopManager
   {
      id : id
   }
``