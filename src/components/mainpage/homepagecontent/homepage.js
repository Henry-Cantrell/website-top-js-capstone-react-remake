import React from "react";
import { HEADER_BAR_HOME_PAGE } from "./headerbarhomepage";
import { TWEED_BOX_FORM } from "./tweedboxform";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import { connect } from "react-redux";
import {DELETE_BUTTON} from './deletebuttonfortweeds'

class HOME_PAGE extends React.Component {
    render() {
      let noUndefined = (item) => {
        return item != undefined;
      };
  
      const testVar = this.props.userTweeds.tweedArray.filter(noUndefined);
  
      const tweedsDisplay = testVar.length ? (
        testVar.map((tweed) => {
          return <TWEED_DIV_ON_PAGE id={tweed.id} button={<DELETE_BUTTON id = {tweed.id} text='Delete this tweed'/>} tweedText={tweed.tweed} username={tweed.username}/>;
        })
      ) : (
        <p>empty!</p>
      );
  
      return (
        <div class="homePageContainer">
          <HEADER_BAR_HOME_PAGE />
          <TWEED_BOX_FORM />
          <div className="borderBlock"></div>
          <div className="tweedDisplayList">{tweedsDisplay}</div>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      userTweeds: state.userTweeds,
    };
  };
  
  export default connect(mapStateToProps)(HOME_PAGE);


  