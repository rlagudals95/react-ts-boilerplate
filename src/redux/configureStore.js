import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// import Comment from "./modules/comment";
// import User from "./modules/user";
// import Post from "./modules/post";
// import Image from "./modules/image";
// import Showme from "./modules/showme";
// import User from "./modules/user";
// import MBTI from "./modules/mbti";
// import Comment from "./modules/comment";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  // comment: Comment,
  // user: User,
  // image: Image,
  // post: Post,
  // mbti: MBTI,
  // showme: Showme,
  // comment: Comment,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
