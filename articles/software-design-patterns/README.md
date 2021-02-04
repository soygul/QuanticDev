# Software Design Patterns, Principles, and Best Practices
Refine your knowledge of software design patterns and principles with this guide. This article will also give you tips on software best practices.

Understanding of software design is a must for any software engineer of any seniority. Other engineering disciplines that deal with software will also benefit from it greatly. System and electronics engineers that do microcontroller programming all day long, I am looking at you! Besides, any software engineering job interview will have questions on software design patterns and principles.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=A6Ud7EGAxrc](https://www.youtube.com/watch?v=A6Ud7EGAxrc){:target="_blank"}{:rel="noopener"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/A6Ud7EGAxrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips for each principle discussed. If you want to read the comments or leave a comment, do so under the YouTube video. If you want to contribute to the article, make a pull request on GitHub.

* Software design patterns implementations in all programming languages: [https://github.com/DovAmir/awesome-design-patterns](https://github.com/DovAmir/awesome-design-patterns){:target="_blank"}{:rel="noopener"}

* Software Quality Assurance video with in depth automated and manual testing guides: [https://www.youtube.com/watch?v=ztb8HNc2kCU](https://www.youtube.com/watch?v=ztb8HNc2kCU){:target="_blank"}{:rel="noopener"}

## Article
Let us start with the basics.

1. YAGNI - You Ain't Gonna Need It
   * Absolute first thing to do before taking any action: do you really need what you intend to do? Can you NOT do it? Are you wasting your time building something you do not need?
   * Say if you still need it, can you solve it in another, a simpler way?
   * Can you reuse pre-existing work; from inside your codebase or maybe external libs?
   * Do not reinvent the wheel. You ain't gonna need it.
2. Think Before Coding
   * This is the principle of all principles, the pattern of all patterns. Uninterrupted thinking on a problem is hard but is essential. Take a walk if you need to, to clear yourself of distractions, and focus on the problem in hand and possible solutions. Come up with a comprehensive design before proceeding with the implementation.
   * Google around for pre-existing solutions. Then Google harder to find a more optimized solution. Finally, Google more for comparison of those solutions and decide on the best one.
   * Write pseudo-code. It helps you think better, and it is easier to share with your colleagues or online (Reddit, StackOverflow, etc.), to ask for opinions.
3. KISS – Keep It Simple Stupid
   * Favor simplicity in your design and code. As the saying goes: "If you can't explain it simply enough, you don't understand it good enough."
   * The benefit of introducing a design pattern should outweigh the complexity it adds.
   * Do not insert code patterns just for the sake of it. Only start introducing patterns when they make things cleaner and more comprehensible.
   * Read and re-read your code to see if you can simplify it a bit at every pass.
   * Tip: Remember, good books are not written; they are rewritten. Go over your code over and over again until it is simple and concise enough. I sometimes simplifying an entire paragraph of code into one or two lines, which adds massive readability.
4. DRY – Do not Repeat Yourself
   * Reuse as much of your code as possible. To do this, you need to modularize your code.
     * Break large chunks of code into smaller and reusable functions.
     * Group relevant functions in classes and files.
     * Group relevant classes in namespaces.
     * Publish all these relevant code in the form of libraries. Internal or open source.
   * Use other people's code where you can. Google around for open source or licensable libraries.
   * Tip: "Before software can be reusable, it first has to be usable." – Ralph Johnson
5. Single Responsibility Principle
   * Any function you write should have one responsibility at a time. For instance, a function named "ShowDate", which prints out the current date.
   * Any class you write should also have a singular purpose. For instance, a "DatePicker" class that encapsulates methods necessary to help the user to pick a date. It might have functions for displaying the selected date, setting a date range, etc.
   * The same goes for the libraries and modules. They should have responsibility over a single part of the functionality provided by the entire software.
   * Tip: When you start having functions regarding time and time zone, etc. in your "DatePicker" class, it is a good signal that you should being moving time-related functions into a "TimePicker" class.
6. Separation of Concerns
   * Similar in spirit to single responsibility principle but on a broader spectrum; it is the principle of sectioning a program into separate parts so that each part addresses a different concern.
   * Every program has multiple concerns: for instance, getting data from the server, validating that data, and displaying that data to the user. If you section your app so that you have three layers: one for client-server communication, one for data validation, and one for rendering a user interface, you achieve separation of concerns in that app.
   * Tip: You should take care not to leak the UI related code to your controller, model, and validation layers. Also, be careful not to leak controller logic into the communication code. Using well-thought libraries like React for UI and gRPC for client-server can help you enforce these separations.
7. Composition Over Inheritance
   * Say you are designing a class, and you need a certain functionality. That functionality is provided by a method of another class. Create an instance of that class and access that method. When you need another functionality from another class, create an instance of it and use it too. And keep references to those instances during the lifetime of your class. This is called composition.
   * As an alternative, you can inherit from any class that you need functionality from. And that is inheritance. However, in many languages, you can only have one base class at a time.
   * When overused, inheritance leads to inherent complexity! You might even end up questioning the overall usefulness of object-oriented programming. Do not worry; anyone goes through that phase!
   * Digging into base classes require an intelligent IDE. On the other hand, when a class is constructed with simple composition, you can follow the control flow easily with a simple text editor.
   * As a bonus, if you favor composition over inheritance, you can start utilizing the dependency injection pattern, which is up next.
8. Dependency Injection
   * When one object supplies the dependencies of another object, it is doing simple dependency injection, which also referred to as "Inversion of Control". Basically, instead of all objects managing their own dependencies, they let objects higher in the hierarchy to manage dependencies for them. These dependencies could be classes, services, etc.
   * In functional programming terms, do not instantiate objects randomly in your functions, accept them as arguments to your method.
   * In OOP terms, instead of creating instances of external objects in your class's constructor method, accept them as arguments to your constructor. This achieves several things:
     * First, you will not have to deal with initialization details of all the other objects that you depend on. Whatever is initialization your class through your constructor will have to satisfy all its required dependencies.
     * Second, this ensures that the concern of instantiating objects is separated from the users of them.
     * Finally, it enables test-driven development, which is the next point.
   * Tip: There are many great dependency injection libraries for practically any programming language and environment. However, I do not recommend using them right away. Start by simply listing all class dependencies in your constructor and see if it is enough. In most cases, it will be sufficient.
9. Test-Driven Development
   * Simple principle of writing tests before writing code. After you gather your requirements and designing what you want to do, you can start writing some very high-level test code to assert those requirements and the design decisions. Step by step example:
     * You want to create a calculator program.
     * Capture requirements: your program can add or subtract.
     * Before coding any of part your app, create the following tests: canAdd and canSubtract.
     * Now code your app just enough to make those tests pass.
   * After you create-high level tests and code your app accordingly, you can create more refined tests for lower levels of your app as you code along.
      * You can add tests for exceptional conditions, handling unexpected input, etc.
      * As you find bugs, you write regression tests to reproduce them first, then code the fix to make them pass again.
   * Tip: In test-driven development, test code is a first-class citizen. As your program and design changes, so do your tests. Your whole program lives and dies by its tests!
   * Another Tip: I have a separate video on software quality assurance that goes in depth on automated and manual testing. Go ahead and check it out. I will put the link in the resources section.
10. One Way Communication and Data Flow
    * Whenever possible, make sure that the components of your app communicate with each other in a one-way style of communication. Even better, use a top-to-bottom style of communication. When communication and data flow from top to bottom in your app, it is easier to debug, because you know where the data starts where it ends up. When each component chat with each other in a two-way manner, you lose the ability to debug easily since you can no longer follow the data properly.
    * You can utilize events, communication busses, and publish/subscribe pattern to ensure orderly communication between components and layers of your program.
    * For instance, model/view/controller pattern is a good user-interface data flow pattern. Controller produces some data, it gets encapsulated by the model objects, and view components render those data models in a nice UI. All the while, data flows one way. When the user clicks a button, it raises an event. The controller handles that event, and data flow starts all over again.
    * Tip: Do not start a project by importing a communication bus library, add it when you need it! These patterns are important, but keeping it simple is "importanter". I know it is not a word, but it is a word in my dictionary!
11. Immutability
    * Immutable objects cannot be modified once they are created. This means, if you have an object encapsulating the contact details of a person, you cannot modify them after the object is initialized. So, what do you do if you want to update the contact details? You initialize a new object and copy over details along with updated fields.
    * This sounds inefficient, but once you have hundreds of objects that can mutate at any time, tracking the state of all objects in your app becomes impossible. Instead, mark every field in every object immutable, and create new instances of them when you need to change a field's value. You can easily compare old and new objects to see what has changed.
    * Also, when you have the old and the updated objects separately in your hand, it is easy to calculate their diff and send it over the network when you need to.
    * There are great immutability helper libraries to help you understand this pattern better and apply it to your projects.
    * Immutability will also enable you to better utilize state container pattern, which is up next.
    * Tip: Immutability is important for apps that encapsulate a lot of state like mobile apps that do client-server communication. And it becomes especially important as your app grows, and tracking the local state of every class becomes exponentially harder. A lot of UI frameworks like React have built-in ways to deal with this, so read and follow their guides.
12. State Containers
    * Instead of having your application state scattered throughout your app, you can instead collect all of it in a single state container object.
    * This will enable you to look into a single parent object and observe the entire state of your app.
    * Coupled with immutable state objects, you can easily save and restore the entire state of your app, or even roll it back in case of exceptional situations.
    * Tip: Again, there are some great state container libs. Go check them out if your client-side app is getting out of hand with the state handling. They mostly come bundled with great guides and documentation so do not forget to skim through them also.
13. Factory and Singleton Patterns
    * Once your objects and their constructors become sufficiently complex, instantiating them will be a pain. You will have to know which dependencies they need every time you need to initialize them. And if the constructor changes, you will have to change it everywhere.
    * Instead, you can utilize the Factor Pattern and let a factory object construct any class you need. So, you will have one object handling dependencies for class instances you need.
    * If you need only a single instance of an object to exist during the lifetime of your program, you can use the "Singleton Pattern" instead. Basically, you create a static class with a static member with a read-only field that encapsulates the object instance you need. After that, you can access that object from anywhere in your app, without having to create an instance of it. Remember that this makes testing harder!

Each programming language and each application type (client, server, etc.) have its patterns, so check the link in the description below for a massive list of patterns organized by programming languages.

If you are new to programming, do not stress over patterns too much. Go over this article once a year (or watch the video form), and each time you do, you will understand more of it and internalize more information.

Do not forget "Code is Poetry". It is beautiful when it is well crafted. These patterns help you craft beautify poetry... I mean code. Now go ahead and exercise these principles: make an app that writes poetry for you!
