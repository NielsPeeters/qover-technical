# Qover Technical challange

## About

This is a technical challenge provided by [Qover](qover.me) build over a span of around ~2,5 days.

## Testing/Running

The easiest way of running this application is by docker compose.

```sh
docker compose up --build
```

## Personal challenge

Every technical challenge is an excuse to try something different, which is true for this one as well. I wanted to explore [Styled components](https://styled-components.com/) again as this is also in use at [Qover](qover.me). At the same time I didn't wanted to use any component library what so ever so I'd have to create all components my self (do not recommend). [Headles UI](https://headlessui.dev/) would've made a great fit for this if you are wondering what I should've used. Instead of using [Formik](https://formik.org/) for form management I wanted to try out [React from hooks](https://react-hook-form.com) for this occasion.

### Conclusions

**Styling with Styled components:**
Considering all advantages/disadvantages of the current big players [Tailwind](https://tailwindcss.com/) and [Styled components](https://styled-components.com/). Both generate css during build, I feel like creating custom components just to style them felt quite dirty and messy, in the end I ended up writing allot of unnessecairty boiler plate and [typescript](https://www.typescriptlang.org/) hacks which should never have come up with [Tailwind](https://tailwindcss.com/). Also having a pre-configured css framework is useful in the case of [Tailwind](https://tailwindcss.com/) where you are forced to reuse default or custom adapted styles. I know you could use a ThemeProvider with [Styled components](https://styled-components.com/) but that would again increase development time, and doesn't solve velocity decrease from [typescript](https://www.typescriptlang.org/).

I also tried out [React from hooks](https://react-hook-form.com) in this project to do the basic form validation, it did not seem to be able to handle out of case validations or full form validation, instead it seems to purely rely on of individual input validation. I kind of had to hack around these issue which I disliked.

**Custom components:**
While it was fun to create my own custom components and a good refresher of semantics, the time investment wast really worth it, as it lead ultimately to A11ly issues which would require more time to solve.

## Project challenge

- Design consistency
  - Allot of the time there where different padding, font sizes, without there being defined set
    - Lost allot of time creating custom styles for each element to be on par with what was provided
  - Login and the 2 other screen had totally different styled almost like the where designed by different people
    - Material design like input fields in login vs other inputs on car page
- Unavailability of the font 'Museo Sans' 700 as it is a payed font, I've replaced it with Roboto

- So what happens after we selected a plan? There is no continuation button, how do I buy your insurance?
- During login there is asked for email, but a username is used

## Things I liked

Its nice to have access to design tools instead of going of of images.
I was able to find design consistency in small places.
Very well prepared and thought trough challenge (just a bit long).

## Make it a real project (things to change)

- Styled components theme
- Reusable styles (abstractions of styled components)
- A11ly for custom components
- Get a decent JWT flow so we can guard our other endpoints
- Style guide review
- Login page interactions
- Do a big refactor, the code is definitely messy
