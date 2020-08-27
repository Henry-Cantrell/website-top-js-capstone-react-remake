import React from "react";
import { PROFILE_PAGE } from "./userprofilepage/profilepage";
import { HOME_PAGE } from "./homepagecontent/homepage";
import { EXPLORE_PAGE_HANDLER } from "./explorepagecontent/explorepagehandler";
import OTHER_USER_PROFILE_HANDLER from "./otheruserprofileview/otheruserprofilehandler";
import { useDispatch, useSelector } from "react-redux";

export let SECOND_BANNER_CONTENT = (props) => {
  const dispatch = useDispatch();

  const otherUserUid = useSelector((state) => state.otherUserUid)

  const userDataObject = {
    username: useSelector((state) => state.userName),
    userBio: useSelector((state) => state.userBio),
    userUid: useSelector((state) => state.userUid),
    joinDate: useSelector((state) => state.joinDate),
  };

  return (
    <div class="second">
      {props.showProfilePage ? (
        <PROFILE_PAGE userUid={userDataObject.userUid} dispatch={dispatch} />
      ) : null}
      {props.showHomePage ? (
        <HOME_PAGE
          dispatch={dispatch}
          userDataObject={userDataObject}
          showOtherUserProfile={props.showOtherUserProfileFunc}
        />
      ) : null}
      {props.showExplorePage ? (
        <EXPLORE_PAGE_HANDLER
          showOtherUserProfile={props.showOtherUserProfileFunc}
        />
      ) : null}
      {props.showOtherUserProfileState && otherUserUid != null ? (
        <OTHER_USER_PROFILE_HANDLER
          otherUserUid={otherUserUid}
          username={userDataObject.username}
          userUid={userDataObject.userUid}
          dispatch={dispatch}
          showOtherUserProfile={props.showOtherUserProfileFunc}
        />
      ) : null}
    </div>
  );
};