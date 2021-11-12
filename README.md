# Lab 8 - Starter

## Partners: Euvin Keel, Caiwei Xiao

1. Where would you fit your automated tests in your Recipe project development pipeline?

    I would fit the automated tests within a Github action in order to make sure the latest code doesn't break any unexpected functionality. We shouldn't worry about running them manually as the sole filter (although it would probably be encouraged before pushing code), and we certainly wouldn't wait until the very end of development to test the code.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No, it seems excessive since checking the output of a function won't require emulating user actions.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, since we cannot test how these individual functions or components interact with each other on the application level (which could include checking to see if messages display properly, are styled properly, if the other person recieves it in their chatbox, etc)

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, since a simple comparison of a message length would probably only require a single function call.
