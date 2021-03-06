import React from "react";
import { PRE_AUTH_DISPLAY_CONTROLLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/preauthcontent/preauthdisplaycontroller";
import { POST_AUTH_DISPLAY_CONTROLLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/postauthdisplaycontroller";
import { useSelector, useDispatch } from "react-redux";
import { deleteDuplicateTweeds } from "./controllermodules/deleteduplicatetweeds"; 
import { sortFollowedUserLikesInFb } from "./controllermodules/sortfolloweduserlikesinfb"; 
import { followedUserTweedsFbToRedux } from "./controllermodules/followedusertweedsfbtoredux"; 
import { userTweedsFbToRedux } from "./controllermodules/usertweedsfbtoredux"; 
import { likedByFollowedFbToRedux } from "./controllermodules/likedbyfollowedfbtoredux"; 
import { userFavsFbToRedux } from "./controllermodules/userfavfirebasetoredux"; 

export let LOGIN_STATUS_CONTROLLER = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const userUid = useSelector((state) => state.userUid);
  const usernameOfCurrentUser = useSelector((state) => state.username);
  const dispatch = useDispatch();

  //these funcs place onSnapshot listeners to firebase data items
  deleteDuplicateTweeds(userUid, usernameOfCurrentUser);
  sortFollowedUserLikesInFb(userUid);
  followedUserTweedsFbToRedux(userUid, dispatch);
  userTweedsFbToRedux(userUid, dispatch);
  likedByFollowedFbToRedux(userUid, dispatch);
  userFavsFbToRedux(userUid, dispatch);

  return <>{isLogged ? <POST_AUTH_DISPLAY_CONTROLLER /> : <PRE_AUTH_DISPLAY_CONTROLLER />}</>;
};
