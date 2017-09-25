# What this portfolio app focused on.

#### redux has 4 disadvantages. 

1. no memoization.
  due to absence of memoization, redux always give whole state to our react components when its state is updated. it means some of our react components will be provided a state which doesn’t need to be update. it can  be solved by adding memoization functionality. it’s possible to  make own memoization  logic inside of mapStateToProps function of react-redux connect.
  However, there are more handy solutions. Reselect is  one of them which is very popular library providing memoization. i used Reselect to implement memoization of my app.

2. batched action problem
  when Action is dispatched, redux should update its store. and all react components connected to store by react-redux connect() will be updated too. it is very natural behavior as redux’s core principle.
  but sometimes we need to dispatch several actions sequentially .   it will be needed quite often in case of big application or when using some library like redux-saga.  Then, series of action dispatching should update store(state) multiple times as number of action dispatched.  it makes performance decrease because application will be updated unnecessarily. 

  core idea to solve this problem is just stop updating reducer until all of batched actions are gathered. i just choose one which has same idea. i made type definition file for it.

3. action must be passed whole reducers.

  redux app should have rootReducer which is reducer combining all partial reducers. redux provides helper function ‘combineReducer’ which creates rootReducer conveiniently.
  we use switch statement in our reducers normally.  

4. it is hard to deal with deep structure object.
    redux is based on immutability concept which forced to return new state based on pure function rather than mutating state’s reference directly. when state is shallow, it’s not a big problem. but, As state grows, 

what i need to implement 
- [x] improving redux architecture. 
- [ ] implement some features for app. (it's not problem on react, actually it comes from dynamodb-related.
- [ ] serverside-rendering, web-socket. (i will do it soon).

You can see demo app:
http://stupendous-rake.surge.sh
