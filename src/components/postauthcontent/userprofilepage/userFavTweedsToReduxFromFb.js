import firebase from "firebase";
import { sendUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendUserFav";
import { clearUserFav } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/clearUserFav";

export let userFavoriteTweedGetFromFb = (uniqueUid, dispatch) => {

  firebase
    .firestore()
    .collection("favoriteTweeds")
    .doc(uniqueUid)
    .collection("tweedsFavoritedByUser")
    .onSnapshot((snapshot) => {
      dispatch(clearUserFav());
      if (!snapshot.empty) {
        snapshot.forEach((tweed) => {
          dispatch(
            sendUserFav({
              tweed: tweed.tweed,
              username: tweed.username,
              id: tweed.id,
              uid: tweed.uid,
            })
          );
        });
      }
    });
};
