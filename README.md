# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Build Process](#build-process)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Chious/multiple-step-form](https://github.com/Chious/multiple-step-form)
- Live Site URL: [https://playful-figolla-578703.netlify.app](https://playful-figolla-578703.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library
- [MUI](https://mui.com) - UI frame work

### Build Process

1. Define needed component & state in `useConetxt` (2hr)

2. Finished `Stepper` and `StepController` (1hr)

![](https://file.notion.so/f/f/a3329b51-a207-43ca-8d9d-85d01045e23a/00ed7fad-4bca-43f6-9a9a-293f3d91f5b6/截圖_2023-10-10_下午3.53.23.png?id=448c52c4-1d16-4858-a1ec-490f369e1a3d&table=block&spaceId=a3329b51-a207-43ca-8d9d-85d01045e23a&expirationTimestamp=1697508000000&signature=DVVmnabVNOaHOIxVXr9EqH_Z0j2SoZn3jN8OujVnWUw&downloadName=截圖+2023-10-10+下午3.53.23.png)

- `StepController` should add or minous the `stage` conditionally
- check if `stageValid` is `true`. If not, `button` should not trigger

2. Finished `Step1` to `Step4` (2hr)

- should check if form is valid and return value to `stageValid`

![](https://file.notion.so/f/f/a3329b51-a207-43ca-8d9d-85d01045e23a/35c76ca5-9ed6-4c26-ada0-e91e0cdad80a/截圖_2023-10-11_下午4.12.49.png?id=b9074bd9-22d2-4f3f-98c9-0498a466755b&table=block&spaceId=a3329b51-a207-43ca-8d9d-85d01045e23a&expirationTimestamp=1697508000000&signature=_UF-GaXy15ipOM8sKUyLyf6JkjZXZF1jdArlVETP74E&downloadName=截圖+2023-10-11+下午4.12.49.png)

4. enable `cartInfo` and `setCartInfo` access to `Step1` ~ `Step4` (2hr)

5. Design view for desktop (2hr)

### What did I learn?

- first time to try RWD for mobile and desktop in the same time.

### Continued development

- since some of css change conditionally, I should define css in the component rather than in `css` file.
- MUI style setting should edit in `themeProvider` rather than in inline .

## Author

- Github - [Chious](https://github.com/Chious)
- Frontend Mentor - [@Chious](https://www.frontendmentor.io/profile/Chious)
