var playlist ={'Foo Fighters': 'Everlong',
'  rince': 'Purple Rain'};
function updatePlaylist(playlist, artistName, songTitle)

{
  playlist[artistName]=songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName)
{
  Delete playlist[artistName];
}
