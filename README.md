Intro: 
Larger project at the end of the "organising Javascript code" section of the JS module, focusing on putting many different parts of learning together in one project. Sample of 
techniques and practices used include using NPM for installing packages such as Webpack and date-fns for date management. Trying to write more modular code in separate files 
and import/export to create a 'dependency line'. The project also relied on Object creation which in my case was done using Class as an object constructor.
The project also included using JSON as well as the first time implementing some data storage using localStorage. The project also required some dynamic JS, as well as 
advanced CSS for styling. The project was intended to be following SOLID Object-oriented-princples, though this will need some refactoring to ensure full compliance. 

Evaluation: (S)ituation (T)ask (A)ction (R)esult
- What went well?
  Once I had some code written down and working even if not correctly or on very basic level, this made it easier to add to it and amend/edit the code to make it work how it should be.
  I think I did well at finding some malfuctioning code in certain unusual user flows and worked systematically to locate these and identify where the flow is going to identify the part
  of code is causing issues. As result was able to learn about how code uses dates and how functions behave if wrong data type parameter is used. Lesson here would be when using date
  objects to display, to ensure that if we're then later using the date object from user input, to transform it back into a Date object to ensure correct data type.

  I found the styling using JS/CSS to be very enjoyable and went pretty smoothly. Wanted to make the page somewhat modern and easy to navigate without too much difficulty. Using some
  squarespace pages for inspiration I created this styling, utilising palette colours and a basic but somewhat related to priorities colour palette, adding a neutral and modern font,
  keeping things round and minimal for a clean finish. Result is that the page does not look like it came out of 2007, which I'm happy with.
  
- What would I do differently (aka what went not so well)
  

 1. (Confused how to comply with principles slowing me down) Started off trying to follow SOLID principles as much as possible keeping everything modular and organised in different files. Quickly stumbled on some issues with this when writing
  functions that required use of variables from the entry file, meaning that I had to either pass what I needed  through as a parameter of the function or import the said variable
  I needed to then later import the whole function back into the entry file. Not sure if this is the correct way of doing this but it felt long-winded and a bit counter intuitive.
  Maybe I'm not fully understanding how the dependency graph should look like or if I'm using import/export correctly. As a result of this confusion, maybe not a bad thing but towards
  the end I ended up writing a few of the functions in the entry file (index.js) to avoid confusion of variables/objects not being available due to not importing or having to pass as
  a parameter of the function. I think some of this writing functions in index is needed esp towards the end as I will need functions/event listeners which interact with many parts of
  my code.
  Still, I think that trying to repeatedly stick to the SOLID principles at the beginning slowed down my progress as I was focusing too much on what 'the right way' to do
  something was rather than actually trying to write the code and test it to then progress further. About half way through when I started prioritising getting things on paper without
  caring about principles is when I think I saw best progress.
  This is because I was just able to try a section/function in its most basic format to see if this would work and then gradually improved it/ built it from the inside out better than
  trying to think how each part would correspond with each other _before_ writing it. This probably also shows that my understanding is still basic as while it was important
  to scaffold out a plan of how my code/website will look, i was not able to effectively and precisely plan this out prior to writing code. the result is that I will need to refactor
  this code down the line as part of evaulation to make it more cohesive and compatible.

  2. (Unsure how to connect things together and at which point) Leading to 2 parts of code doing the same thing (definitely RY)
  At the beginning I was creating little functions each performing one action but once I set those up, there became a point where one had to interact with the other and at that point
  I became a bit stuck due to the importing/exporting and assigning values of function to variables felt almost tedious like i wasn't getting anywhere. It became easier to have a few larger
  functions which seemingly did one thing but including many components (for example the addTaskToHtml() function added the task object into html but this required a) creating elements
  b) assigning appropriate attributes to each of these c) assigning the value of each one  and d) format date to desired format.
  As I write this I realise I could've created helper functions to call these within this function but the import/export of modules of code made this more confusing, so perhaps will need
  to refactor to be more SOLID compliant. I'm not sure how granular the 'single responsibility' of each function needs to be, so will also need to refersher on this. 
  
 3. (Not fully able to make the code work in console) Is this always possible?
  As the title suggests, got to a good level but it was hard to immitate clicks/interactions in console so hard to make everything work perfectly. This is always a good mindset to have
  and imo strong starting point to ensure the logic works irrespective of the UI. I didn't have an entirely separate module due to the points mentioned above, however I did ensure the separation
  of main logic and the UI.

  4.(in terms of workflow, not utilising previous projects enough!! starting everything from scratch, need to build on logic from before!)
  A key issue that I think really slowed me down when tackling this project (and presumably a few before then) is that most of the time I am able to use parts of code and logic from
  previous projects and assessments from the module, thus saving a LOT of time! Rather than feeling daunted by the perceivably huge mountain of a project starting each thing from
  scratch again, it makes it much easier to piece together different parts from prev projects. Examples here are that I was able to use the logic for linking the array of tasks to the
  li elements using data-attributes so that I can easily remove/edit the corresponding item in the array. I was also able to utilise some styling and CSS layout (grid/sidebar/menu bar)
  from the project Dashboard. Next time before I start writing code I would like to go through previous projects in the module to see what parts could be useful and note this down.
  This should hopefully improve my efficiency. 
  
  
 5. (Still confused with how git/github work which causes delays at end, reserarch from yday helps)
  This was apparent in the past project as well when it came to deploying a repo which uses webpack. However, I've spent some time researching and extending my knowledge on git and github
  this time around which I think has helped a lot in understanding these vital concepts of programming. As always there's still much more to learn but I feel like I have a better
  basic understanding of how my local repo interacts with git and github respectively and what I need to do to ensure smooth deploying. 

  6. (Still struggling to modularise to smaller pieces maybe due to returning function outcome/import/export, meant some functions are huge and do a lot)
     Very similar to point 2. Unsure of how single the Single responsibility aspect needs to be so will review this and also I think it would be really good practice to try
     and refactor this project to make it more SOLID and read up some more on MODULARITY and import/export lesson.
  
  
  
- How would I change the way I approach things in the future?
       -Next time, during planning I'd like to have a better browse through previous projects to try and utilise as much as possible the parts/logic used in previous projects to build on
  to it, rather than starting from scratch each time.
      - I want to focus firstly on getting things working on a basic level, before focusing on complying with principles (object oriented/modular). While these are very important and I
    will continue to improve my knowledge in these regions, I understand this will come with time, but it's very important at the beginning to gain momentum in getting things built even
  if not perfect, as this will give more chances for reflection/evaluation and iteration. Practice getting things going off the ground ASAP, rather than focusing on _perfect_. Once I have
  things built, it's then easier to re-write things later, rather than trying to get it all perfect in one. 
  This feels like the key right now to seeing improvements and gaining the much needed practice. Even though there were some delays in personal life, this project took way too long. 
    - try time blocking plan and have clear achievable OUTCOMES for each day (for example get part a working at  basic level on its own or get part B to work with the rest of the code etc).
  
