# Total time spent: 6:30h - 4:30(frontend) - 2:00 ("backend")

## Overview
Greeting for everyone in ondo finance, hope you enjoy my test.
The application consists in a material ui frontend and a web3 + infura "backend". I've used next.js for organization pourpuses (not having to deal with routes). The biggest problem (still unsolved) was to fetch the addliquidity and removeliquidity events. I'm very sure that it could be a simple thing to do, but kept me stuck for some time decoding inputs to get the event names then filtering it. Despite it, i could do everything easily.

I've put some effort in the frontend and design part cause it's important for me that you know that i'm capable of both projecting an ui and designing an application. Also, the application is mobile responsive.

I've took a decision to keep both websockets and http requests on the application so we could keep a pattern closest to the example you've sent. I also kept the subgraph part for you to compare the fetched data. Thanks a lot for your time and the test. I'm very excited for the feedback.



## Tasks Completed
-Frontend in React / Material-ui
-Typescript
-Functional application 
-Mobile Responsive
-Fetch data from web3 (also maintened the graphql query)
-Used Web over ethers because of personal preferences
-UI/UX looks good
-Live data using websockets


## Things that could be improved with more time
- Tests (of course)
- Types (The "backend" typing really need improvments also some in the frontend)
- Component organization (Usually, both UI and functions are much more organized than that, using atomic pattern)
- Comments, usually, i like to explain what my functions does.


### Things that i could not do
-As i'm more used to getting data directly from a backend or a subgraph, i couldn't find a way to display live and requested data from add and remove liquidity. Acctually, i've been able tho acomplish that by geting the transaction hash from all the events, deconding the transaction input, and the getting the add liquidity and remove liquidity methods. I've done that using abi decoder and a different other than the one i use to get the events. It was working, but i've discarded that due to performance issues (i had to do thousands of requests and decode the inputs of them to get 4 or 5 add/remove liquidity events). In a normal situtation, i would ask for help, of course.


