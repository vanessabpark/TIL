## Section 3: Big O

### 49. Twitter Exercise

Find the first tweet and the latest tweet.

const array = [
    {
        tweet: "#100DaysOfCode",
        date: 2021
    },
    {
        tweet: "Starting my challenge",
        date: 2022
    },
    {
        tweet: "New Year",
        date: 2023
    }
];

+ If there are a thousand tweets, finding the first and the latest tweets might take a lot of time which costs a lot of money as well.

+ Solution? 
    * Store this information in a better format or do something different with our program in order to avoid something that might be inefficient or expensive for the company. 
    * This is thinking scalable code = long term 

---

### What is the operation and what is it going to cost us?

`'helwoshejhekniuhdsh'.length`

What is the Big O notation of this?

+ It depends on the language you're working with. We needed to know how the method works on the string. ".length" is built into JavaScript. You'll have a different built-in method for your language. Based on how the language is built, "length" might go one by one and iterate over each letter and count up to 20.


+ However, JavaScript has a ".length" property built into each string. So for JavaScript, it is a simple lookup. It's not a function. It's simply a property of an object.


+ Start looking at space and time or things that are valuable to us as engineers as we don't have infinite amount of resources. We have to be careful of when we code, how we use up these resources. 

### Summary

Big O is used to describe how efficiently we can run our code. It saves companies a lot of money if people they hire know how to write efficient code. We are always looking at the worst case scenario. We want to be pessimistic and say, "What is the worst case scenario here with our code?" so we can be prepared when the time comes.
