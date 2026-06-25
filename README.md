Project Reflection
Architecture
In this full stack project, I worked with multiple frontend development approaches, including server‑rendered Express HTML, dynamic 
JavaScript, and an Angular single‑page application (SPA). Express allowed for quick rendering of customer‑facing pages, while Angular 
provided a more interactive and modular administrative interface with reusable components and client‑side routing. The backend used a NoSQL MongoDB database because its flexible document structure aligned naturally with the JSON data exchanged between the API and the Angular SPA, making it easier to evolve the data model without rigid schema migrations.

Functionality
JSON differs from JavaScript because it is a lightweight data‑interchange format rather than an executable language. It served as the bridge between the frontend and backend by structuring all API request and response bodies. Throughout development, I refactored code to improve clarity and efficiency—for example, moving logic out of routes and into controllers, consolidating repeated UI elements into Angular components, and restructuring services to reduce duplication. These reusable components improved maintainability and made the admin SPA easier to extend.

Testing
Understanding HTTP methods (GET, POST, PUT, DELETE) and how they map to API endpoints was essential for testing the application. Adding 
authentication introduced additional testing challenges, since protected endpoints required valid JWT tokens and proper error handling for unauthorized requests. Testing had to account for both public and secured routes, ensuring that data retrieval and modification worked correctly while maintaining security.

Reflection
This course strengthened my ability to design and build a complete MEAN‑stack application, deepened my understanding of API architecture, improved my debugging and refactoring skills, and gave me hands‑on experience with secure authentication. These skills directly support my professional goals by making me a more capable and marketable full stack developer who can build, secure, and maintain modern web application. Although I made tons of mistakes along the way, I think I have gained a strong understanding of what goes into building a strong scalable application, and with more practice with the concepts, I'll build more in the future. 
