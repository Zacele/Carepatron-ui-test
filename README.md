---
runme:
  id: 01HRA3ZJHATCDZNNQHBHJ6HMZB
  version: v3
---

# Khoa Le - Senior Front end engineer submission

One paragraph of project description goes here. Explain the purpose of your project and what problem it solves. You can also mention what technologies besides React you used in the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Built With](#built-with)
- [If time wasn't a constraint](#if-time-wasnt-a-constraint)
- [Test difficulties](#test-difficulties)
- [Answer the extra questions](#answer-the-extra-questions)

## Getting Started

To be able to start the project, you need to create a `.env.local` file in the root of the `ui` project folder and add the following environment variables:

```sh {"id":"01HRA82945EHQ8WTZ4237PYP97"}
REACT_APP_PRIMARY_COLOR=#3F5DF9
REACT_APP_SVG_FINISH_COLOR=#317E4A
REACT_APP_BUTTON_HEIGHT=40px
REACT_APP_API_CLIENT_ADDR=http://localhost:5044
```

To be able to fully run the project, you need to start the mock-api service by running the following commands:

`npm install` follow by `npm build`, and then `npm start` in the `mock-api` folder to start the api service.

And run the following commands:

`npm install` follow by `npm start` in the `ui` folder to start the app.

## Built With

- React
- Typescript
- Create-React-App
- React-Context
- React-Hook-Form
- React-Query
- Material-UI

## If time wasn't a constraint

- I would add the unit test suites and integration test for the app, i18n library to handle the translation and localization of the app, and the Cypress to write the end-to-end test for the app.
- Adding the edit functionality, so that the user can click on the item, the data will be populated in the form, and the user can edit the data and save it.

## Test difficulties

- For me, the test is not difficult, and can be done within 3 days.

## Answer the extra questions

- How close to the designs is your submission?

   - Based on the provided design, I think my submission is very close to the design. Due to the lack font and color code, I just can get the color based on Digital Color Meter app on MacOS and using the default font-family, but I think it's very close to the design.

- If you needed to change something in the future (size/color of buttons), how easy would it be?

   - Since I have extracted the color and size to the environment variables, it's very easy to change the color and size of the buttons in the future. Just applied the change into the `.env.local` file and the change will be applied to the whole app.

- How does this look on different devices?

   - I have tested the app on different devices and it looks good on all devices. The app is responsive and looks good on all devices. Please refer to the screenshots for more details.
      - **Desktop:**
      [![Desktop Screenshot (1024x768)](https://i.postimg.cc/fytksS3b/PC.png)](https://postimg.cc/y3K7Xdyq)
      - **Ipad Mini:**
      [![Ipad mini Screenshot (768x1024)](https://i.postimg.cc/SRdkYWnd/Ipad-Mini.png)](https://postimg.cc/p5mgg5Y5)
      - **Iphone 14 Pro Max:**
      [![Iphone 14 pro max Screenshot (430 x 932)](https://i.postimg.cc/Xqj0WpsC/Iphone.png)](https://postimg.cc/N9zn7fqs)
      - **Small Smartphone:**
      [![Small smartphone (320 x 756)](https://i.postimg.cc/SNtp0QCn/Small-smartphone.png)](https://postimg.cc/SJ8PChZ4)

- How can your submission allow for scalability?

   - What if a customer has thousands of records?

      - If the user have thousands of records, on the front-end side, I can apply some virtualization library (like react-window, react-virtualized) to handle the large list of data and combine with these following techniques:
         - Using the pagination to load the data in chunks, so the user can load the data in chunks and the app will not be slow.
         - Using the infinite scroll to load the data, so the user can load the data on demand and the app will not be slow.

   - How is state managed as the codebase grows?

      - I have used React-Context and React-Query and extract the logic into custom hooks so that can be re-use in multiple components. And I also use the `useReducer` hook to manage the state in the app. So the state is managed in a single place and can be easily scaled.

   - How can we support multiple countries?

      - To support multiple countries, we can use the i18n library to handle the translation and localization of the app. And we can also use the localization library to handle the date, time, and currency format based on the user's location. Also access their location and change the content based on their location (browser navigator API, IP address, etc.).

   - How can you ensure the app behaves as you intend it to?

      - To ensure the app behaves the way we intended to, we have incorporate the unit test suites and integration test into the app. We can use the Jest and React Testing Library to write the unit test and integration test for the app. And we can also use the Cypress to write the end-to-end test for the app. So we can ensure the app behaves the way we intended to.

   - How intuitive is the behavior of the app?

      - Based on the design, I have added some component to make sure that the user can follow and understands clearly what and how they need to use the app, such as custom logic for the form validation when they submit each form, adding snackbar on top of the app to let the user know the result of their action, etc. So I think the app is very intuitive and easy to use.
