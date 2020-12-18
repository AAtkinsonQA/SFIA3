# SFIA3 Group Project

  

## Brief

  

The aim of the project is to create a Help Queue web application consisting of three applications, a front-end, back-end and a gateway service. The purpose of the Help Queue is so that trainees can post issues and queries about things they are not sure about so that trainers can solve them. The tickets are placed in a chronological list, with the oldest ticket at the top. The trainer would deal with the issue, mark the ticket as Done and added to a completed list.

  

The ticket comprises of the following attributes:

  
|  |  |  |
|--|--|--|
|Title    |	Author| Description
|Time Created | Urgency | Solution 
|Status | Email | Topic




  

Software Development Requirements:

  
|  |  |  |
|--|--|--|
|Databases	|Java SE| Spring Boot 
|Front-End React | Automated Testing | Continuous Integration
| Cloud Fudamentals
  

DevOps Requirements:

  
|  |  | |
|--|--|--|
|Continuous Integration	|Containerisation|Cloud Solutions|
|Infrastructure Management | Orchestration


## Planning and Development

A Jira board was used to assign tasks and stories to different members of the team.

  

![Jira](https://i.imgur.com/pIwZami.png)

  

Link to Jira Board: [https://qatraineejaguila.atlassian.net/jira/software/projects/FPJB/boards/7](https://qatraineejaguila.atlassian.net/jira/software/projects/FPJB/boards/7)

  

## Risk Assessment

  

##### Pictured below is our risk assessment for this project:

  

![Risk assessment](https://i.imgur.com/UY2d5p3.png)

  

Link to risk assessment excel document: https://drive.google.com/file/d/1Y4ZpXI3PZlmaikk7Xa196gbesynZnyPp/view?usp=sharing

  

## Front End

  

![The QAC Ticketing Home page](https://i.imgur.com/61pcFlG.png)

  

The front-end service acts as the web application’s user interface and is written in React.

  

For the design of the front-end, extensive research was completed to ensure that the aesthetics and functionality were in-line with modern web design principles. Initial research into web design showed that websites with poor design tend to perform poorly. To ensure that the website met the high standards that users expect, the design should meet the principles of:

|  |  | |  |  |
|--|--|--|--|--|
| Purpose| Communication | Typeface | Colour | Images
| Navigation | Grid Layout | F-Patterns | Web Conventions | Mobile Friendly


  

**Purpose**

To have sufficient purpose, the website included full CRUD (Create, Read, Update, Delete) functionality. The create-form page offers all of the required input fields to create a ticket that is solvable by a trainer.

  

**Communication**

Communication with the user is important as users need to be able to have their voices heard. To ensure that users can report issues that they find with the website, a 'Contact Us' page was added. This feature sends an automatic email with the bug description to the developers so that bugs can be patched to improve the reliability of the webpage and encourage return traffic.

  

**Typeface**

To enforce *continuity* between the live QA Community page and the ticketing service, the typeface styling was carried over into the design of the ticketing pages. By doing this, the theme of QA Community is carried into the design of the ticketing page. This ensures that the user knows they are still connected to the official QA page and have not navigated to a third party site.

  

**Colour**

Similar to the typeface, the colours of the live QAC page was carried over to ensure consistent theming between the web pages. The current live QA Community page features a triadic colour scheme (3 colours). This is a well known *fundamental rule for good website design* . This colour design also improves user confidence in the website as they will know that it is an extension of the live page.

![colours](https://i.imgur.com/oc9onGJ.png)

  

**Images**

Images are an important part of web design. They are used to break up heavy text and create easy-viewing for the user. For our home page, a vector-art image was created by our team. This image is user friendly and is not intense on the eyes. By doing this, the user is pleased by a friendly image, yet they are not distracted from the links that they need to access in order to use the website.

  

**Navigation**

The navigation for the website is consistent across the whole website. This ensures consistency across the webpage and makes it easy for the user to access all the pages that they will need efficiently and effectively. The navbar keeps the theming of the QA Community live page and also includes the logo of the company as the home button, which is standard for most websites.

  

![enter image description here](https://i.imgur.com/BYqPOlN.png)

  
  

**Grid Layout**

By using the react-bootstrap extension, the web page was able to adhere to the grid structure. Bootstrap splits the page into rows with 12 columns. The purpose of this is to ensure **readability** across all devices, regardless of resolution.

  

![bootstrap grid layout](https://i.imgur.com/gYGhwzX.png)

  
  
  

**Mobile Friendly**

![enter image description here](https://i.imgur.com/zush2rJ.jpg) | ![enter image description here](https://i.imgur.com/CL2tK9p.jpg) |
|--|--|

  

  

  

### Tickets, Templates and Wireframes

  

At the start of the project, previous help queue services were researched, establishing the key features that would be best for this project. Templates were drawn up and wireframes were constructed for both MVP and stretch goal designs.

  

  

### Tickets

  **Initial Designs**
For the first design, a very simple design was created as a skeleton for the team to work from. This included information such as the title, date and author. The ticket width spreads across the whole column within the container. This ensures maximum size and makes the ticket the focal point of the page.

![enter image description here](https://i.imgur.com/NdNgz4W.png)
  
**Final Designs**
The final design looks alot slicker with some improvements in viewer comfort. The colours and typeface were carried over into the tickets to give a more consistent theme. Additionally, the date was formatted into a more readable structure. 
In the bottom left corner, badges were used to indicate certain features of the ticket. This is the sub-optimal element of the ticket, as they will primarily go for the title and then this. The badges indicate information to the user which may be helpful, such as urgency, topic and resolved/unresolved. These badges are colour coded to indicate their urgency, and resolved state. (see two images below)
![enter image description here](https://i.imgur.com/PJzY0U9.png)
  
![enter image description here](https://i.imgur.com/Ro6vOGT.png)

 
### Wireframes

  

  ***MVP Create Tickets***

![MVP Create Tickets](https://i.imgur.com/ITyaCe0.png)


***Stretch Goals Create Ticket***

![Stretch Create Tickets](https://i.imgur.com/C3VLve5.png)


### Pages
**Create Ticket**
The create ticket page has a simple layout and includes all of the relevant fields to populate a ticket. THis includes an extended textbox, so that the user can type the full issue and read it all. 
![enter image description here](https://i.imgur.com/6ZABTSy.png)

When the ticket is submitted, a modal was used on the webpage, to confirm that the ticket has been sent off. This ensures that the user does not double-submit a ticket and gives the trainee reassurance that a trainer will be reviewing their query.

![enter image description here](https://i.imgur.com/jrFxxG2.png)

**View Tickets**
The view tickets page is the place where trainees can view all of the tickets in a list. A filter system provides the trainee with options to sort tickets down depending on topic and urgency. This is important as a trainee will not want to view tickets for all tickets unrelated to their query.
![enter image description here](https://i.imgur.com/t6wvsum.png)

The sidebar on the left is reserved for when the trainee clicks "more information". This will open the full ticket in the sidebar, allowing the trainee to see the solution to the issue. This bar also allows trainers to provide solutions to the problems as well.

**Home Page & Search Bar**
The home page, although simple, contains a search bar which allows trainees to search through all completed tickets. Once they search, the front end scans for any tickets with the search term in the title and provides the full card with the detailed solution. This is a quick way for users to find the answers that they need without even clicking to another link on the page.
![enter image description here](https://i.imgur.com/QVAdWhC.png)

**Contact-Us**
A Contact-Us page was added to give users the opportunity to contact the team directly with any enquiries, questions or bugs that they my find whilst operating on the webpage. This page operates using emailJS, an email provisioning service that integrates with react to send forms via email to a recipient address. When a user fills out the form, an email with their name, contact email and message is sent to the develops so that they are able to report any messages directly. This page also includes information about the developers and the work that they had done, as well as individual links to the devs linked in and githubs.

![enter image description here](https://i.imgur.com/HMzFuKu.png)
## Gateway

The gateway service acts as a middleman between the front-end and back-end service. The front-end makes requests to the backend via the gateway service, using Spring Boot.

This was configured with NGINX in Kubernetes.

  

## Back-end

  

#### Microservices

  

The Backend is written in Java and consists of several microservices: *create*, *delete*, *get*, *getSingle* and *update*:

  ![enter image description here](https://i.imgur.com/uWIOPPw.jpg)

  

Microservices benefitted us throughout the cloud computing process. The application was initially tested in Google Cloud Platform(GCP) to cut costs. Splitting the application into smaller, composable fragments made the testing process much smoother as the free virtual machines weren't being worked to full capacity.

  

Microservice infrastructure also provided flexibility. Once a certain service is no longer needed for the application, it can be removed easily due to the decoupled architecture

  

Pictured below is our projection for how the backend architecture will evolve:

  ![enter image description here](https://i.imgur.com/nOY4QWh.jpg)
  

The initial architecture was monolithic which isn’t ideal but provides us with a backup and can be used for testing. The super stretch goal was implementing microservices in AWS where each software is built to work smoothly with each other on the same platform.

  

*Postman* is used to test our backend (whilst the frontend wasn't built yet) with JSON http requests. JSON object example:

> {
> "id": 111,
> "title": "My Macbook wont allow me to connect to Teams",
> "author": "Carlos Aguila",
> "description": "My macbook wont allow me to access teams. It is
> working on my ubuntu laptop so it is not a big deal but i would like
> to be able to use my mac.",
> "timeCreated": [2020,12,16,16,18, 35, 369000000],
> "urgency": "low",
> "solution": "no solution",
> "status": false,
> "email": "ca@qa.com",
> "topic": "Mac"
> }

  

## Database

The data is persisted in an AWS RDS database, built using Terraform.

  

#### Database Infrastructure

  

Development has started on the Java microservices for *Cohorts*, *Trainers* and *Trainees.

Pictured below is a comparison diagram which shows the entities and relationships required to implement this vs the current Minimum Viable Product:

  

![ERD](https://i.imgur.com/eRaopD5.png)

  

## DevOps

  

### Terraform

Terraform spins up the following Virtual Machines (VMs): a Bastion Host, Jenkins server, a Nexus/Build VM and an additional one to run tests on. Each VM is configured with a Virtual Private Cloud (VPC). The VPC has five subnets (two private and three public), uses three security groups and also contains a NAT gateway. A separate RDS is also spun up in the private subnet and the database is created using a SQL script.

  

![Terraform Diagram with attributes](https://i.imgur.com/fFQEDhc.png)

  

The private subnet is not accessible directly from the Internet, only through the NAT Gateway via the Bastion Host, which is locked down to allow only incoming SSH from the developer IPs.

  

### Ansible

Ansible is an open-source automation tool used to deploy software and DevOps tools. Roles are used to install different programs onto different VMs. In the Jenkins VM: awscli, kubectl, Docker, Java and Jenkins were installed. Maven was installed in the Test VM, and Docker was installed on the Build VM. Mysqlclient is installed to connect to the RDS from the VPC and administer the setup SQL script.

  

### Jenkins

A Jenkins Pipeline with several stages to build our application.

  

The command

  

> mvn test

  

was used to run our unit tests in the Test VM. After that, the images were built from the frontend and backend microservice files.

For the second stages, the images were built for the frontend and backend microservices from each of their directories in the Build VM. Kubernetes was deployed in the final stage in the Jenkins VM. Jenkins credentials were used to get the IPs for the Test and Build VMs.

  

![Jenkins Pipeline](https://i.imgur.com/TISjH4X.png)

  
  

### Kubernetes

Kubernetes was used to deploy the front-end and microservices to a cluster, connected using an NGINX gateway. A load balancer was also created to expose the NGINX gateway. The Kubernetes deployments and clusters were originally built and tested on GCP before being deployed to AWS.

  

### Improvements

  

OWASP ZAP could be implemented in the pipeline to check our app for vulnerabilities and automate security testing before deployment.

The Trainee, Trainer, Cohort Spring Boot backends are currently in development.

A secure login function would be implemented with users.

  

## Authors
| Name|Responsibilities|
|--|--|
| Carlos Aguila	|Full Stack Developer & DevOps Engineer|
| Scott Nicolson| Lead UX Designer & Frontend Developer
| Jonathan Hunt | Lead Frontend Engineer & Developer
|Albert Atkinson | Lead Backend Engineer |
|Rohithan Carthigeya | Lead DevOps Engineer
## Acknowledgements

Benson Luke, Trainer
Harrison Jordan, Trainer
Vaithilingam Savannah, Trainer
Kolluru Raji, Trainer
Alan Davies, Trainer
