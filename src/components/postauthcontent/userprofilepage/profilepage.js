import React from "react";
import { TOP_DIV_CONTENT } from "./topdivcontent";
import { MIDDLE_DIV_CONTENT } from "./middlediv";
import { BUTTON_BAR } from "./buttonbar";
import firebase from "firebase";
import TWEED_PROFILE from "./usertweedlistprofilepage";
import FAVORITES_PROFILE from "./userfavoritesforprofilepage";

export class PROFILE_PAGE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserProfile: true,
      showUserFavorites: false,
      userBio: null,
      joinDate: null,
      username: null,
      userUid: this.props.userUid
    };
  }

  getUserInfoFromFirestore = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(this.state.userUid)
      .get()
      .then((doc) => {
        this.setState({
          userBio: doc.data().userBio,
          username: doc.data().username,
          joinDate: doc.data().joinDate,
          userUid: doc.data().uid
        });
      });
  };

  showUserProfileToggle = () => {
    this.setState({
      showUserProfile: true,
      showUserFavorites: false,
    });
  };

  showUserFavoritesToggle = () => {
    this.setState({
      showUserProfile: false,
      showUserFavorites: true,
    });
  };

  componentDidMount() {
    this.getUserInfoFromFirestore();
  }

  render() {
    return (
      <div class="parentDiv">
        <TOP_DIV_CONTENT uid={this.props.userUid}/>
        <MIDDLE_DIV_CONTENT
          userUid={this.state.userUid}
          joinDate={this.state.joinDate}
          userBio={this.state.userBio}
          username={this.state.username}
        />
        <BUTTON_BAR
          showUserProfileToggle={this.showUserProfileToggle}
          showUserFavoritesToggle={this.showUserFavoritesToggle}
        />
        {this.state.showUserProfile ? (
          <TWEED_PROFILE />
        ) : this.state.showUserFavorites ? (
          <FAVORITES_PROFILE />
        ) : null}
      </div>
    );
  }
}