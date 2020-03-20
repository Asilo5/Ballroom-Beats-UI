import { getData } from './apiCalls.js'

describe('getData', () => {
  let mockSonglist;

  beforeEach(() => {
    mockSonglist = {
      data: [{
          title: "Beyond the Sea",
          spotifyid: "none",
          url: "beyond-the-sea",
          delay: 0.167,
          avbarduration: 1,
          duration: 172.47,
          tempo: 136.482,
          TimeSignature: 4
        },
        {

          title: "Fly Me To The Moon",
          spotifyid: "none",
          url: "fly-me-to-the-moon",
          delay: 1,
          avbarduration: 1,
          duration: 147,
          tempo: 119,
          TimeSignature: 3
        }
      ]
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockSonglist);
        },
      });
    });
  });

  it('should be passed down the correct URL', () => {
    getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')

    expect(window.fetch).toHaveBeenCalledWith('https://ballroom-beats.herokuapp.com/api/v1/songs')
  })

  it('should return the correct data in the correct format', async () => {
    await expect(getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')).resolves.toEqual(mockSonglist)
  })

  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockSonglist);
        },
      });
    });
    await expect(getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')).rejects.toEqual(Error("songs wasn't imported"))
  })
})
