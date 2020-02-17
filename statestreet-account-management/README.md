### Instructions:
- The `node_modules` is not included in this github repo. So you may need to run `npm install` to get the modules ready.
- To run the application, make sure you are in the directory `statestreet-account-management`.
- Use command `npm start`, then go to `localhost:3000` to check the features.

### Features:
- The filters allow users to filter the transactions according to the account name and transaction type.
- Users would be redirected to the transaction detail page by clicking the account numbers.

### Notes:
- There might be a `Maximum call stack size exceeded` error showing in the console when starting the application. I believe it is because it loads too much data.
- The structure of transaction detail page would be different if we do an actual data fetching.
