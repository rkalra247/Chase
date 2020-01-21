
me-React

# Goal

Your mission, dear developer, is to create a working dashboard which visualizes the real time and historical values of a hypothetical set of equipment in the field. The equipment publishes its data every 1.3 seconds

Provided sample demo:

![Graph Image](https://i.postimg.cc/yYp9mjFB/Screen-Shot-2020-01-20-at-9-40-09-PM.png)

# Step 0 - Looking at resources

Resources that you get to start with:

- Graphql sandbox: [https://react.eogresources.com/api](https://react.eogresources.com/api)
    - Task: Make sure you have queries for every request
- Initial Repository: `npx eog-react-visualization-cli create`
    - What we can get out of the initial App
        - `Components` folder should store all UI related components
        - `Features`  folder should store data connected components
    - Global State -
        - `redux` - stores application data
        - `Apollo-Client` - fetches data from server
- Libraries - Alternatives were presented, we should pick the libraries we have experience with
    - [Material UI](https://material-ui.com/) for UI
    - [ReCharts](http://recharts.org/en-US/) or [Plotly](https://plot.ly/javascript/) for Graphs: Picked **ReCharts** because it seems easier.
    - [ApolloClient](https://www.apollographql.com/docs/react/) or [Urql](https://formidable.com/open-source/urql/) for sending GraphQL requests: Picked **ApolloClient** because of prior expeirence
    - Other resources
        - Intro to [React Hooks](https://reactjs.org/docs/hooks-intro.html)
        - Intro to [GraphQl](https://graphql.org/learn/)

# Planning

Technical decisions and overview of how I would plan to tackle this app.

- New Feature - In the demo graph, it is difficult to correlate the realtime card with the corresponding line graph in the chart. We should color code the metric in the card to match the color of the metric in the graph.
    - Will create a helper file called `colors.js` that does the following:
        - `setMetricsColors` - This function will receive an array of metric strings and will assign a color to each metric. The file will store a simple key/value map of metric to color.
        - `getColorForMetric` - Takes in a metric name and returns the corresponding color.
- Testing - This repository does not have testing, which can cause potential issues for our development as well as future developers taking over the project. To protect ourselves, we can add two things
    - Storybook - Allows us to visually see, plan, and design all the different states of a component that we will need to use to power our app. Due to the nature of this project, this method is superior over jest snapshot testing because we are building from scratch and UI will likely change often. We need strong UI cues.
    - Unit Testing - We can use Jest for unit testing after we plan out our application and how to pass data between components and how to format data.
- GamePlan - High level overview of the different steps we should follow to finish this project. Each point would be a commit.
    1. Setup Story Book
    2. Create components that our application would need:
        1. MultiSelect - Component that allows users to select metrics from dropdown.
            - Should correctly display one and multiple selected metrics correctly
            - Loading State - Should be disabled while retrieving a list of available metrics
            - Error - Should be disabled on error state.
        2. Card - Component that display a card for a metric.
            - Error State - `Error: Cannot retrieve Metric for Water Temp`
            - Loading State - Loading Icon
            - Normal State - Shows name, value and unit, time, and color
        3. Line Graph - Component that displays the graph over time
            - Zero State - When nothing is selected, prompt users to select.
            - Graph State - Displays graphs
                - Color must match the color for the metric
                - Y axis must be available for each metric

        Helper functions may be required for step 3 to split data array into correct number of components.

    3. Setup ApolloClient
    4. Create feature components:
        1. MetricSelection - Loads all metrics and sends data into MultiSelect component.
            - Should update client side cache with user selection
        2. MetricCardList - List of cards powered by Card component to be displayed based on user selections. (Not realtime)
            - Implement color library to set and retrieve metric color. MetricCard must display correct color.
        3. MetricGraph - Line graphs powered by LineGraph to be displayed based on user selections. 
            - Must continue to persist even as new data is being fetched (in loading state)
            - Colors must be correct.
    5. Setup ApolloClient to subscribe to realtime data. New data must update client side cache.
    6. Setup RealTime updates for card and graph

# Technical Decisions

In building this app with limited time, a few tradeoffs had to be made.

1. Redux will not be used. This is because ApolloClient has the ability to manage client side state, making redux unnecessary.

# Progress


