import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/userfavorites/favbuttonhandler";

class OTHER_USER_TWEEDS_PROFILE extends React.Component {
  render() {
    let noUndefined = (item) => {
      return item != undefined;
    };

    const testVar = this.props.otherUserPersonalTweeds.tweedArray.filter(noUndefined);

    const tweedsDisplay = testVar.length ? (
      testVar.map((tweed) => {
        return (
          <TWEED_DIV_ON_PAGE
            showOtherUserProfile = {null}
            uid={tweed.uid}
            likedBy={null}
            retweetedBy={null}
            id={tweed.id}
            tweedText={tweed.tweed}
            likeButton={
              <LIKE_BUTTON_HANDLER
                id={tweed.id}
                tweed={tweed.tweed}
                username={tweed.username}
                userUid={this.props.userUid}
                uid={tweed.uid}
              />
            }
            favoriteButton={
              <FAVORITE_BUTTON_HANDLER
                forOtherUser={true}
                id={tweed.id}
                uid={tweed.uid}
                userUid={this.props.userUid}
                tweed={tweed.tweed}
                username={this.props.username}
                usernameTweed={tweed.username}
              />
            }
            button={null}
            username={tweed.username}
          />
        );
      })
    ) : (
      <p>empty!</p>
    );

    return <div className="tweedDisplayList">{tweedsDisplay}</div>;
  }
}

const mapStateToProps = (state) => { 
  return {
    otherUserPersonalTweeds: state.otherUserPersonalTweeds,
  };
};

export default connect(mapStateToProps)(OTHER_USER_TWEEDS_PROFILE);

//this needs to be connected to state store containing other user tweeds, dispatched on div click from HP