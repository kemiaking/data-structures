Before the assingment was coded, a DynamoBD database was created in AWS. A primary key and sort key were created. 
My process blog is based off a movie review blog. The primary key in this case, because I could not figure out how to change it, is just pk for primary key. There is no sort key.


## Part 5.2a: Create some data for the table in your database

<img width="1136" alt="Screen Shot 2021-10-20 at 10 35 19 PM" src="https://user-images.githubusercontent.com/87023658/138365898-aa63f19a-5dd7-45dc-8b9f-4d889678daa0.png">

<img width="1137" alt="Screen Shot 2021-10-20 at 10 35 28 PM" src="https://user-images.githubusercontent.com/87023658/138366328-a3f6b347-b827-4a34-b34a-650c9be22925.png">

## Part 5.2b: Populate your database

After permissions were set up for the cloud9 EC2 instance to be able to access DynamoDB, the starter code was used to populate the database table with. It uses AWS SDK to put the first Item into the DynamoDB table.
From there, an async function was used to get all of the blog entries into the DynamoDB table. 

<img width="1116" alt="Screen Shot 2021-10-20 at 10 35 38 PM" src="https://user-images.githubusercontent.com/87023658/138366794-93cd71bd-dbea-440b-abff-1e3742dd4cc1.png">

These are the results in the DynamoDB table

<img width="1213" alt="Screen Shot 2021-10-20 at 10 34 11 PM" src="https://user-images.githubusercontent.com/87023658/138367058-8b608e10-bc05-4a72-86f0-816c015ee47b.png">
