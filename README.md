
Test app to illustrate https://github.com/testing-library/user-event/issues/268's behavior with cypress per https://github.com/testing-library/user-event/issues/268#issuecomment-628275654

This is a simple app that renders an input box and will render text after capturing an `onChange` event.

# Running

* Install dependencies

  ```
  npm ci
  ```

* Run CRA:

  ```
  npm start
  ```

* In a separate terminal, open cypress

  ```
  npx cypress open
  ```

* Run test

  There's only one test, it should pass showing that `onChange` was fired
