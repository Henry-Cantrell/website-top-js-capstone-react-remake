export function sendUserFav (tweed, username, id, uid) {
    return ({
        type: 'TWEED_SEND_USER_FAV',
        tweed,
        username,
        id,
        uid
    })
}