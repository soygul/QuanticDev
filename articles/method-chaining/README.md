# Method Chaining is Awesome
Have you ever worked with classes that are thousands of lines long? Those classes end up encapsulating tens of related functionality, and you end up repeating that class' name many times, like in the following example:

```python
db.connect('postgresql://localhost/testdb')
db.initialize()

user = db.create_new_user('John Doe', 'john.doe@quanticdev.com')
user.give_permission('create_blog_post')

post = user.new_blog_post('Test Blog Post Title', 'Lorem ipsum dolor sit amet...')
post.upload_thumbnail('./test_thumbnail.jpg')
post.publish()
```

But not today. In this article, we will clean up some mess using method chaining:

```python
db.connect('postgresql://localhost/testdb') \
    .initialize() \
    .create_new_user('John Doe', 'john.doe@quanticdev.com') \
    .give_permission('create_blog_post') \
    .new_blog_post('Test Blog Post Title', 'Lorem ipsum dolor sit amet...') \
    .upload_thumbnail('./test_thumbnail.jpg') \
    .publish()
```

Table of contents:
* [Resources](#resources)
* [Inspiration for This Article](#inspiration-for-this-article)
* [Method Chaining](#method-chaining)
* [Benefits and Drawbacks](#benefits-and-drawbacks)
* [Conclusion](#conclusion)

## Resources
You can find the video version of this article on YouTube: [https://www.youtube.com/watch?v=OdOl_O8hyBM](https://www.youtube.com/watch?v=OdOl_O8hyBM){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/OdOl_O8hyBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The video has animated transitions for all the code if that help you understand better. If you want to read the comments or leave a comment, do so under the YouTube video. If you want to contribute to the article, make a pull request on GitHub.

If you want to read more on the subject, here are some good Wiki articles to check out:
* [https://en.wikipedia.org/wiki/Method_chaining](https://en.wikipedia.org/wiki/Method_chaining){:target="_blank"}
* [https://en.wikipedia.org/wiki/Fluent_interface](https://en.wikipedia.org/wiki/Fluent_interface){:target="_blank"}

## Inspiration for This Article
The inspiration for this article comes from my recent mass cleanup of our test framework at the office. Like many other complex system developers, we have our custom test framework to do all sorts of automated end-to-end testing, simulating real user interactions with our apps on real devices. I can't show the code, but it has been neglected for several years now. While modernizing it, I also decided to refactor it to use chainable methods, just as you would expect from modern test frameworks. The resulting code was exceptionally clean and developer-friendly, and it was well worth the time investment. Before diving into specifics, let me summarize what method chaining is for you.

## Method Chaining
Method chaining is an idiom in object-oriented languages where an object's methods return a reference to the object itself. This way, method calls can be chained together, without requiring variables to store the intermediate method call results.

Imagine a database object. To be able to use it for the first time on an empty database, you first need to connect to your database then initialize it. In code, it would be like this:

```python
db.connect('postgresql://localhost/testdb')
db.initialize()
```

This is not too bad. You only have to reference the database object twice. But imagine if you could chain these calls:

```python
db.connect('postgresql://localhost/testdb').initialize()
```

Much nicer isn't it. And it will become much better in situations where it saves you 5-6 object references. If you like, you can put each method call on a new line so it will be easier to use debug-points. Here is an example using Python syntax:

```python
db.connect('postgresql://localhost/testdb') \
    .initialize() \
    .close()
```

I find method chaining to be an excellent utility for classes with lots of small and relevant functionality. Objects encapsulating database queries, test code, and UI code are great examples of this. Now let's go ahead and investigate the implementation of our database class from the previous example:

```python
class DB:
    def connect(self, url):
        pass

    def initialize(self):
        pass

    def close(self):
        pass
```

In its current shape, you cannot chain the methods in this class. It is an easy fix, though. All we have to do is to finish each method with a "return self" statement so each method will return a reference to the object itself:

```python
class DB:
    def connect(self, url):
        # todo
        return self

    def initialize(self):
        # todo
        return self

    def close(self):
        # todo
        return self
```

Now we can safely chain the methods in our database class. As you might have realized, any function that needs to return something other than the object itself won't be chainable.

Method chaining can also be used to build a fluent interface or implement the builder pattern. If you want to read more on the subject, I have links to several Wiki articles for them in the resources section above. Now let's analyze the benefits and drawbacks of method chains.

## Benefits and Drawbacks
The benefit of method chaining is obvious; cleaner and concise code. You don't have to keep repeating calls to same objects for consecutive operations on the same object, which is especially useful in repetitive code like test code. You also don't need to create temporary variables to store results from previous method calls. However, this will make it difficult to put debug points on the right method in the chain. To get around this limitation, you can separate each method call with a new line or add a chainable `breakpoint()` method. Some programming language debuggers already support adding debug points on methods in the chain directly.

One interesting side effect of method chaining is that it will make logging harder. You normally put logging code in between method calls like this:

```python
db.connect('postgresql://localhost/testdb')
log.info('Initializing the database.')
db.initialize()
```

Once you switch to method chaining, you might add a simple chainable log method to your class to work around the problem:

```python
db.connect('postgresql://localhost/testdb') \
    .log_info('Initializing the database.') \
    .initialize()
```

## Conclusion
In conclusion, method chaining is not a silver bullet, but for where it fits, it brings conciseness and clarity, which I always like. In my experience, tests and data filtering and manipulation code are prime candidates for method chaining. Next time you are going to implement a framework or a utility class, you can provide chainable methods to make life easier for the prospective users of that code.

```javascript
readers
  .filter(p => p.folowed_me_on_twitter === true)
  .sort(p => p.time)
  .pat_on_the_back()
```

If you have checked out the video in the resources section, I have used various code animations for it this time. I will produce a separate article on how I make my code animations. If you don't want to miss it, follow me on my socials.
