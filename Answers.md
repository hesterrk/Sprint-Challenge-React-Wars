# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a component-building library, create complex, rich UI. It means we can compute content on our HTML rather than hard-code it. It works faster as uses the Virtual DOM. It stores the state of the DOM tree and detects that the state of the app has changed. It will then update the virtual DOM, taking note of which nodes have changed due to the state changes. Once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. React is designed to create small, reusable and clearer web components that can create large scale applications. Also, solves the problem of making practical the creating of reusable, components, which keeps our code DRY. 


1. What does it mean to think in react?


-It involves the concepts ‘separation of state’, whereby each code should do one thing, which is what React does with components. 
-It also revolves around ‘Declarative programming’, where we dont describe step by step e.g ‘for’ loops, rather we tell the computer what to do


1. Describe state.

State is an dynamic object, which holds data as a value of a component. It is managed within the component and influences what the component renders. The state can then be manipulate by a setter state, which changes what is rendered. ‘State’ can be used anywhere in the component as we can reference it using dot notation.


1. Describe props.

Props is an object. Any data we wish to inject to a component will be injected as properties on the ‘props’ object. It is used when we want to pass info held on state inside one component onto another component. They are read-only, we receive props, we dont change them. Props value can be anything such as a  string or boolean. The data coming in from props stops you hard-coding in values. 


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

-Side Effects are anything that affects something outside the scope of the function being executed for example getting data from an API, using timers.
-We sync effects by using effect hooks where we pass in a dependency array as the second argument to it. We can tell it with which state or props the effect should be synced.
