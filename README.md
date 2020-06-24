# todo-imageAPI

### First intall all the dependencies which is there in the package.json file using command(should be in the same directory)
```
npm install
```
### After that we will run our node app using command
```
node index.js
```
(no need for running the ``` mongod ``` server locally) 
I have connected it to the mongoDB Atlas.

## Once the app started, we can see all the image and its details which is being stored in the db.

We can go through a particular image by just typing the name of that image at the end of the url (sending GET request)

example- ``` http://localhost:3001/Image1 ```

### We can add image by sending a POST request through **POSTMAN** url- ```http://localhost:3001```
and in that we have to provide the name, url, and type of the image in the body.

### We can view all the images which is stored in an array by sending a GET request through POSTMAN url- ```http://localhost:3001```
Every image has a particular id related to it.
