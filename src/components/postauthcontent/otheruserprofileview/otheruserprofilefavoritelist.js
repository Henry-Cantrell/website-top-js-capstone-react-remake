import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/userfavorites/favbuttonhandler";

export function OTHER_USER_FAVORITES_PROFILE(props) {
  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.otherUserFavoriteTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplay = testVar.length ? (
    testVar.map((tweed) => {
      return (
        <TWEED_DIV_ON_PAGE 
          uid={tweed.uid}
          id={tweed.id}
          tweedText={tweed.tweed}
          username={tweed.username}
          likeButton={
            <LIKE_BUTTON_HANDLER
              id={tweed.id}
              tweed={tweed.tweed}
              username={tweed.username}
              userUid={props.userUid}
              uid={tweed.uid}
            />
          }
          favoriteButton={
            <FAVORITE_BUTTON_HANDLER
              forOtherUser={true}
              id={tweed.id}
              uid={tweed.uid}
              userUid={props.userUid}
              tweed={tweed.tweed}
              username={props.username}
              usernameTweed={tweed.username}
            />
          }
        />
      );
    })
  ) : (
    <p>empty!</p>
  );

  return <div className="tweedDisplayList">{tweedsDisplay}</div>;
}

const mapStateToProps = (state) => {
  return {
    otherUserFavoriteTweeds: state.otherUserFavoriteTweeds,
  };
};

export default connect(mapStateToProps)(OTHER_USER_FAVORITES_PROFILE);
