import React from "react";
import { TWEED_DIV_ON_PAGE } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/mixedusecontent/tweedonpage";
import { connect } from "react-redux";
import { DELETE_BUTTON } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/postauthcontent/homepagecontent/deletebuttonfortweeds";

let TWEEDS_PROFILE = (props) => {
  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.userTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplay = testVar.length ? (
    testVar.map((tweed) => {
      return (
        <TWEED_DIV_ON_PAGE
          uid={tweed.uid}
          id={tweed.id}
          tweedText={tweed.tweed}
          deleteButton={<DELETE_BUTTON id={tweed.id} />}
          username={tweed.username}
        />
      );
    })
  ) : (
    <p>empty!</p>
  );

  return <div className="tweedDisplayList">{tweedsDisplay}</div>;
};

const mapStateToProps = (state) => {
  return {
    userTweeds: state.userTweeds,
  };
};

export default connect(mapStateToProps)(TWEEDS_PROFILE);
