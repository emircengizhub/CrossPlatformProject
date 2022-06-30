import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import UserList from "./userlistPage";
import UserInfo from "../routes/userinfoPage";
import HomeMenu from "./homeMenu";
import PostList from "../routes/postlistPage";
import PostInfo from "./postinfoPage";
import PhotosPage from "../routes/photosPage";
import PhotosInfo from "./photosınfoPage";
import TodoPage from "../routes/todolistPage";

const screens = {
  HomePage: {
    screen: HomeMenu,
  },
  UserListPage: {
    screen: UserList,
  },
  UserInfoPage: {
    screen: UserInfo,
  },
  PostListPage: {
    screen: PostList,
  },
  PostInfoPage: {
    screen: PostInfo,
  },
  PhotosPage: {
    screen: PhotosPage,
  },
  PhotosInfoPage: {
    screen: PhotosInfo,
  },
  TodoPage: {
    screen: TodoPage,
  },
};

const HomeStack = createStackNavigator(screens);
console.log("create");
export default createAppContainer(HomeStack);
