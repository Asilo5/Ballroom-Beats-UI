export const getFakeSongs = () => {
  return [{
    SpotifyId: "3KzgdYUlqV6TOG7JCmx2Wg",
    Title: "Beyond The Sea",
    Url: "https://open.spotify.com/album/5MsJK0kqiYIJDmd3cjkGMn?highlight=spotify:track:3KzgdYUlqV6TOG7JCmx2Wg",
    Delay: 0.168,
    AvgBarDuration: 1.764,
    Duration: 172.48,
    Tempo: 136.483,
    TimeSignature: 4
  }]
}



export const getData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn't imported`)
      }
      return response.json()
    })
}
