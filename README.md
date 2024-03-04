# This is a repository based design pattern 

**The Repository** : These are the classes or components that encapsulate the logic required to access data sources. They centralize common data access functionality, providing better maintainability and decoupling the infrastructure or technology used  to access databases from the domain model layer. 

The repository pattern acts as a mediator or middleman between the application business logic and data storage, sheilding the rest of the code from the details of how data is fetched stored or manipulated it encapsulates the data access logic which can include querying databases making API calls or working with any other data source into a set of defined methods and operations. 

### Key Charachterstics : 

Abstraction : it provides abstract layer for data operations allowing developers to work with the data using high-level methods rather than dealing with low level data access code. 

Centralization : data access logic is centralized within the Repository making it easier to manage maintain and modify 

Consistency : it enforces a consistent way of interacting with data across the application ensuring that data related operations follow the same patterns and conventions 

Testability : the pattern facilitates unit testing because you can easily replace the actual data access logic with a mock data for testing 

Flexibility : it enables the switching of data sources or storage mechanisms without affecting the rest of the application for example you can switch from a relational database to a nosql database or an external API with minimal code changes. 

In the repository design system we use inheritance pattern where we put majority of the code in the base repository and then we will use child classes that will maybe change some of the functionality of the methods of the base repository. 
