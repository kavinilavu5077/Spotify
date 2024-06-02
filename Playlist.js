import React from "react";
import "./PlayList.css";
import Tracklist from "../TrackList/TrackList";
class Playlist extends React.Component {
constructor(props) {
Super (props);
this.handleNameChange = this.handleNameChange.bind(this);
}
handleNameChange(event) {
this.props.onNameChange(event.target.value);
}
render() {
return (
<div className="Playlist">
<input onChange={this.handleNameChange} defaultValue={"New Playlist"}/>
<TrackList track={this.props.PlayListTracks}
isRemoval={true}
onRemove={this.props.onRemove}/>
<button className="Playlist-save" onClick={this.props.onSave}> Save to Spotify</button>
</div>
);
}
}
export default PlayList;