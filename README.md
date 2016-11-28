
# simple-form-creator

> Creates a DOM form from your options object using vanilla js

## Installation

Simple form creator is available as an [npm package](https://www.npmjs.com/package/simple-form-creator).

```sh
npm install simple-form-creator
```

## Usage

Include the module in your script.

```sh
import SimpleFormCreator, { SimpleFormCreatorWrapper } from 'simple-form-creator';
```

Create an object containing the form's settings:
* formId (form's id, if not provided, defaults to random string of characters)
* action (action url, if not provided, defaults to empty string
* method (GET, POST, ... - if not provided, defaults to POST)
* formData (data to fill the form with, if not provided, defaults to empty object)

Example:
```sh
const formObject = {
    'formId': 'myNewForm123',
    'action': 'http://mydomain.com/example-post',
    'method': 'POST',
    'formData': {
        'firstName': 'John',
        'lastName': 'Smith',
        'phoneNumber': '+123456789'
    }
}
```
Now create the form
```sh
const form = new SimpleFormCreator.SimpleFormCreator(formObject);
```
or, if you prefer not to use the new operant, use
```sh
const form = SimpleFormCreatorWrapper(formObject);
```

Your brand new form is set up. Now you can use it make form post (or get) submits, 
append it to DOM or what not. Just one example:
```sh
form.submit();
```

## Contributing

### Getting started

1. Fork the Simple-form-creator repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/simple-form-creator.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes and add tests for them, lint, test then push to to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.

### Scripts
- Install `npm install`
- Start developing `npm start`
- Lint `npm run lint`
- Test `npm test`
- Build `npm run build`
- Publish `npm run publish`
- Static server `npm run static-server`

### Coding style
Please follow the coding style of the current code base.
Simple-form-creator uses eslint, so if possible, enable linting in your editor to get realtime feedback.
The linting rules can be run manually with `npm run lint`.