Student Enrollment Form using JPDB
This project is a Student Enrollment Form that uses JsonPowerDB (JPDB) as the backend for storing and managing student data. It allows users to enroll students by filling out a form and perform operations like saving, updating, and resetting student records.

Features
Student Information Management: Store and retrieve student details, including:
Roll Number (Primary Key)
Full Name
Class
Birth Date
Address
Enrollment Date
CRUD Operations:
Save: Adds a new student record.
Update: Modifies existing student data.
Reset: Clears the form fields for new data entry.
Form Validation: Ensures that all fields are filled correctly before submission.
Technologies Used
Frontend:
HTML5
CSS (Bootstrap for styling)
JavaScript (AJAX for data handling)
Backend: JsonPowerDB (JPDB) for storing and retrieving data.
Libraries:
Bootstrap 3.4.1 (Responsive design)
jQuery 3.5.1 (AJAX handling)
What is JsonPowerDB (JPDB)?
JsonPowerDB (JPDB) is a high-performance, real-time, and lightweight NoSQL database designed to simplify backend development. It provides a JSON-based storage system, making it easy to interact with data through simple HTTP API calls.

Key Features of JPDB:
JSON-Centric: Stores and retrieves data in JSON format, simplifying data manipulation.
Easy Integration: Directly accessible via REST APIs, making it highly compatible with web applications.
Schema-Free: No predefined schema; flexible and adaptive data models.
High Performance: Efficient data handling with low latency.
Built-In Indexing: Fast retrieval of records through powerful querying.
Benefits for This Project:
Quick Setup: Minimal configuration for storing student records.
Scalable: Supports small and large data sets effectively.
Simple CRUD Operations: Easily manage data using basic HTTP requests.
Learn more about JsonPowerDB on their official website.

Prerequisites
A modern web browser (Chrome, Firefox, etc.).
Internet access to fetch resources from CDNs (Bootstrap, jQuery, JPDB).
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/student-enrollment-form.git
Open the index.html file in your browser to view and interact with the form.

How It Works
1. Filling Out the Form
Enter a unique Roll Number to either add or update a student record.
Upon entering an existing roll number, the form automatically fetches the student’s details from JPDB.
2. Save Operation
Click Save to store new student data in the JPDB database.
3. Update Operation
Modify existing data and click Update to save changes in JPDB.
4. Reset Operation
Clears all fields for new data entry.
File Structure
bash
Copy code
/student-enrollment-form
│
├── index.html           # Main HTML file containing the form
├── index.js             # JavaScript file for form logic and data operations
├── README.md            # Project overview
└── /assets              # Additional resources (optional)
API Documentation (JPDB)
This project uses JPDB’s REST API for all data operations, including:

Create: Add new records.
Read: Retrieve existing data.
Update: Modify records.
Delete: Remove data (if needed).
Example API request structure:

javascript
Copy code
{
   "token": "YOUR_API_TOKEN",
   "dbName": "YOUR_DB_NAME",
   "relation": "YOUR_TABLE_NAME",
   "cmd": "PUT / GET / UPDATE",
   "jsonStr": { /* JSON data */ }
}
Refer to the JPDB API Documentation here for more details.

How to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is open-source and available under the MIT License.

