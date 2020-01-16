# What Is Serverless (Function-as-a-Service), and Is It Worth?
What is serverless (aka function-as-a-service or FaaS)? Is it worth the investment for your next project? Who uses serverless?

This article goes into detail about the uses, advantages, and disadvantages of serverless. It will also give you a live example of serverless deployment using Firebase Functions. You will learn about the alternatives of serverless, as well as recommendations on when and where to use it. Finally you will learn which big enterprises use serverless and my recommendations for you.

## Resources
You can find the video narration of this article on YouTube: [https://www.youtube.com/watch?v=Kqk013ioclA](https://www.youtube.com/watch?v=Kqk013ioclA){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kqk013ioclA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips and illustrations. If you want to read the comments or leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Some of serverless providers:
* Firebase (Google) Functions: [https://firebase.google.com/docs/functions](https://firebase.google.com/docs/functions){:target="_blank"}
  * Has two more variants: Google Cloud Functions and Google AppEngine.
* AWS (Amazon) Lambda: [https://aws.amazon.com/lambda](https://aws.amazon.com/lambda){:target="_blank"}
* Azure (Microsoft) Functions: [https://azure.microsoft.com/en-us/services/functions](https://azure.microsoft.com/en-us/services/functions){:target="_blank"}
* There are many other smaller providers and alternatives which are mentioned and put to comparison in the article.

An example way to utilizing persistent connections (WebSockets) in serverless environment:
* WebSocket APIs in Amazon API Gateway: [https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway](https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway){:target="_blank"}

Example of one-click deployment of my open-source project (KOAN) to Heroku:
* [https://github.com/soygul/koan#heroku-deployment](https://github.com/soygul/koan#heroku-deployment){:target="_blank"}

Hacker News discussion thread on serverless:
* [https://news.ycombinator.com/item?id=21046547](https://news.ycombinator.com/item?id=21046547){:target="_blank"}
* And many others before it: [https://hn.algolia.com/?q=serverless](https://hn.algolia.com/?q=serverless){:target="_blank"}

## What is Serverless?
First off, what is serverless (aka function-as-a-service or FaaS)? Serverless means you write and deploy standalone functions on the cloud, instead of entire apps. Each function serves a distinct need and handles a distinct event, like a web request. This is the reason as to why serverless is also called function-as-a-service.

The functions you write are only loaded in memory when there is a request or event for them to handle and unloaded after serving that request. They also share the same hardware and possibly the same runtime with everybody else's functions. As a result, you generally only pay for the CPU time consumed by your functions, and not for the entire server or VM.

![Serverless Architecture](images/serverless-architecture.png)

Let us see an example of how serverless works in a simplified diagram. The diagram above starts with the client on top. The client could be a browser, could be a mobile app, could be another internal service. The client sends a request to say Firebase Functions, which hosts the target domain and API endpoints at mysite.com. Internally, the request is handled by a load balancer. Load balancer chooses a server with low utilization, and that server loads the code and dependencies for your function and executes it. The server can be handling many functions at the same time for many unrelated domains. Each request to your functions can be executed by different servers. That is at the load balancer's discretion.

## Live Example with Firebase Functions
Implement and deploy a simple "getDate" function using Firebase Functions. Visit the video to watch me do this exercise.

Remember, Firebase has a generous free quota, so you will not pay anything for this sample project.

## Benefits of Serverless
* Low cost of development.
  * Very little to learn or care about. Most of the chores are automated for you.
  * SDKs and documentations are mostly very clear and concise.
* Only billed for function execution based on time and other resources consumed.
  * You only pay for processing power, memory, bandwidth, etc. consumed during function runtime. If your functions are sleeping, you pay nothing — no ongoing cost as in regular servers.
* Little to no DevOps.
  * No server maintenance.
  * No security patches or OS installation to handle.
  * No network maintenance.
  * Disaster recovery is automatic.
  * Logging and auditing are built-in.
  * Deployment, versioning, and reverting is easy.
  * SSL certificates are built-in.
* Automatic scaling.
  * Can easily be scaled since you are forced to write stateless functions and think about scaling right from the start.
* Functions do not need to be public.
  * They can be private functions handling only internal events. For instance, handling an AWS S3 "file upload complete" event to process images uploaded by your users.
  * Providers also allow timed functions so they can run at arbitrary time intervals to perform routine tasks.
  * I am sure you can also come up with many innovative ways to use functions to handle all your backend workload in an event-driven fashion with minimal cost.

Cost of labor is will always higher than the cost of serverless. Say if you go with cheaper AWS EC2 servers instead, you will still have to learn and configure AWS, which is a titanic task in itself.

## Drawbacks of Serverless
* Vendor lock-in.
  * You will have to use the provider's serverless SDK and write vendor-specific code.
  * Your API design will be based on the provider's toolset rather than the optimum one for the problem.
  * You are bound to couple your functions with other vendor-provided tools to persist state, handle file uploads, WebSockets, etc.
  * On the other hand, you are always vendor locked-in. Changing your hosting provider is a major investment, no matter what technology you use.
* No persistent connections as functions are only allowed to run for a limited amount of time.
  * Some providers give you the option to use WebSockets through various mechanisms, but this adds complexity. WebSocket APIs accessible through Amazon API Gateway is a good example of this.
* An order of magnitude more expensive than AWS EC2, which in turn is an order of magnitude more expensive than bare metal server. If you are cost-sensitive, just connecting a Raspberry PI to your network could be a cost-effective option. Do not forget, DevOps will eventually cost you more!
  * Utilize other services like Firebase Authentication whenever possible to delegate work to other Web services. This will decrease the load on your costly functions.
* Limited programming language availability.
  * Not all providers support all runtimes.
  * You will also be limited in your library choices due to the runtime restrictions. i.e., you might not be able to use gRPC out of the box.
* No local state.
  * Once your function execution is complete, all memory is released. Anything you store in memory will be lost.
  * Best is to use Redis or Memcached or other tools offered by your cloud provider.
  * On the bright side, this will enable you to scale easily as you are forced to do stateless design right from the start.
  * You can store longer living data in a database as usual.
* Your functions share the same server or even the same runtime with everybody else, which is always a security consideration in case sandboxing is buggy.
  * There have been very innovative attacks on sandboxing techniques using side-channel attacks lately. You can Google for more info as it is a complicated subject.
* Local development, debugging, and testing will need specialized tooling from the vendor.
  * Most cloud providers already have local emulators and mock libraries to help with this.
* Cold starts.
  * Cold starts of your functions will be costly. For instance, in JavaScript, all libs will be evaluated from scratch, though vendors are coming up with ingenious solutions for it. Choose your vendor considering their cold startup performance on languages that they support.
  * Cache whatever you can to reduce the impact of cold starts. Different caching mechanisms are offered by different serverless vendors.

What we discussed about Amazon Web Services 5 years ago is now on the new serverless discussion. Back then, we were discussion if AWS was a reliable alternative to bare metal servers. I am confident that serverless will gain more acceptance as AWS did.

## Alternatives
* Heroku
  * My personal favorite. You still write traditional forever running server apps, but deployment, scaling, and DevOps is fully automated for you.
  * Great and easy to use tooling.
  * You can deploy projects with a single button click. Check out the resources section above for a demonstration of one-click deployment of one of my open-source projects to Heroku.
* Google App Engine
  * As an example, Snapchat's fast development and success is partly attributed to App Engine and its ease of use.
* Serverless.com
  * Open source serverless app framework.
  * Abstracts away serverless providers, giving you a uniform API. The downside is that it adds complexity.
* Containers using Docker and Kubernetes.
  * Abstracts away all hosting providers.
  * Can run on cloud, bare metal, on Raspberry Pi, etc.
  * More maintenance and much steeper learning curve.
  * More abstraction means more obscure errors.
  * Serverless providers are starting to offer container support, but I have no experience with it: https://cloud.google.com/knative

## Who Uses Serverless?
Many big corps use serverless functions by today, and many others will join the ranks in the coming years. Since they are so versatile, they can be used to handle many small internal tasks. However, notable examples that use function-as-a-service providers as the backbone of their businesses are as follows.
* Snapchat is built on Google App Engine. They signed a $2 billion, five-year contract with Google Cloud Services in 2017. This probably made them the largest serverless deployment on earth at the time. So, if you are experienced with serverless, and want to work for Snapchat, knock on their door already!
* Netflix is slowly switching to serverless. As they put it, they are creating a rule-based self-managing infrastructure using AWS Lambda. They are using event-based triggers to help automate the encoding process of media files, the validation of backup completions, and deployments at scale.
* iRobot (creator of Roomba robotic vacuum), is building their IoT platform using AWS Lambda, and is managed by fewer than 10 people.
* Reddit Videos: According to Hacker News discussions, Reddit's video hosting service is being built and operated by a single engineer on a serverless stack.
* You can find more examples via Googling "serverless case studies".

Serverless is all about bringing your product to the market as fast as possible with as little mistakes as possible. The companies aobe did just that and succeeded.

## My Personal Experience
My personal experience with function-as-a-service is mixed.
* Last year I tried using it for the entire server-side of one of my open-source projects. However, I could not do that as none of the major serverless providers supported the latest version of Node.js, which I needed for async/await functionality. I have recently checked it again, and Firebase Functions now supports the latest LTS version of Node.js.
* I also tried using serverless for one of my games. However, that also failed since I needed persistent connections throughout the gameplay session using WebSockets. No major serverless providers supported a sensible way of using WebSockets. This also changed. Amazon now supports creating WebSocket connections through their API Gateway, which is accessible from Lambda functions.
* On the positive side, I have successfully utilized Firebase Functions to handle user authentication events raised by Firebase Authentication. When a user logs in, Firebase Authentication triggers my authentication handler function. That function checks if the user is logging in for the first time so I can create relevant user tables in my databases. I still use it today, and it has been working a treat.

If you want to experiment with serverless, I recommend Firebase Functions. In my experience, it is the easiest of the bunch and has a generous free tier.

## My Recommendation
I recommend giving serverless a go for your next project. You can quickly come up with a proof-of-concept version of your project and demo it to stakeholders. After you hold discussions around this proof-of-concept build and iterating over your design, you can finalize your decision on whether to use serverless or regular servers. You will still need to factor in all the plusses and minuses mentioned in this article while making a decision.

On the other hand, I do not recommend converting an existing project to serverless. Caveats are too much to handle for an existing project with pre-existing limitations.

## Conclusion
Currently, serverless is in usable state if you are can live its restrictions. On the other hand, it is fast improving. Will it outpace other technologies like containers? We will see.

My personal favorite is still Heroku. It is still a very nice compromise between cloud servers and serverless. However, as I said, I would recommend giving serverless a spin if you can live with the restrictions. If nothing, it could be a good learning experience. I also highly recommend Docker and Kubernetes if they suit your project, but do not forget, they have a much higher learning curve.

Good luck on your serverless journey. If you want to contribute to the article, you can make a pull request on GitHub.
