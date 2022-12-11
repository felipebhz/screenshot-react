## Frontend Solution thought process
I decided to use **React JS for the Frontend** part of the test and I have also used some styles, themes and libs to make it a little bit prettier.

### The application
For the frontend I was asked to create a simple, not too advanced interface, using a popular framework/lib to show the data I have on the backend.

I have started this creating the **React App** and adding the necessary components to split the interface into smaller parts, as it is the most common way to build a modern interface.

* `Casino List` - is composed of CasinoItem(s)
* `CasinoItem` - is the smaller portion of the screen to load and render the casino information

Beyond the components, I have also added the **React Router (v6)** to have some pages and also to render the interface once and have it **similar to a SPA** to load faster after the initial loading. **React Router** also helps to **navigate inside** the application and deal with links in a more efficient way.

Related to the *data brought into the application*, I could use only a simple request using `fetch()` or even `Axios` and render it into the interface, but I prefered to show some more of my knowledge using a **Context File**, to also make use of `useEffect(), useState(), useContext() and other React Hooks`, taking advantage to do not have to pass the props down under the components, creating the props drilling issue. Although, I prefered to use **Fetch API**, instead of an *external lib like Axios* so I didn't add too much complexity and external libs to a very simple app.

`Async / Await` was also used in many places in a form of showing my knowledge of the (*arguably*) more proeminent **ES6+ feature**.

On the **App.js** I have used render element `<Navbar />` and `<Footer />` to show some knowledge of **interface composition**, using individual elements.

### Styling and User Interface
Styling the interface was part of the test, although it was asked only to load the images on the interface, but I wanted to have a more complete application, *closer to a real-world* model.
**Tailwind CSS and DaisyUI** have been added to the application because **Tailwind** is a very popular choice nowadays and **DaisyUI** is very simple yet complete theme and elements *"lib"*. **Documentation** is also very good on both.

### Testing

The process of testing the application was quite simple, yet enough to show that I can use **Jest** to write and run tests on the application. Some Jest's methods have been imported *only to provide information that I know they exist* and can be used to create tests assertions.

I have written simple tests for the most common parts, so I could show my ability to work with `Jest JS` for testing purposes.

  

### Docker

Docker containers have been implemented using the most simple requirements not last because, the front end relies more on the realm of `NodeJS + Application's files`.

### Improvement suggestions
Add the possibility to:
- Add to favorites
- Add user's prefered sites on the top
- Create some lazy loading to rely on the matter of networks slowness, yet showing a wireframe (just like mobile apps: eg.: Facebook, Twitter...)
- Ability to input a casino website and add as suggestion for reviews

**Code suggestions**
 - Use reducers files and actions files to make it easier to scale and maintain.
 - Use libs to detect internet speed on the client and bring from the backend a image size that suits the user's internet speed.