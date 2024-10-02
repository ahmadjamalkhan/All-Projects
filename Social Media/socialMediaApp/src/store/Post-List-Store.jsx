import { Children, createContext } from "react";

const PostList = createContext({});
const PostListProvider = ({ children }) => {
  <PostList.Provider 
  value={[]}>{children}</PostList.Provider>;
};
s;
