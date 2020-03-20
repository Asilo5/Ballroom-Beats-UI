import {getData} from './apiCalls'

describe('getData', () => {
  let mockSonglist;

  beforeEach(() => {
        mockSonglist = {"data": [
        {
            "ID": 1,
            "CreatedAt": "2020-03-18T18:46:18.315937Z",
            "UpdatedAt": "2020-03-18T18:46:18.315937Z",
            "DeletedAt": null,
            "title": "Beyond the Sea",
            "spotifyid": "none",
            "url": "beyond-the-sea",
            "delay": 0.167,
            "avbarduration": 1,
            "duration": 172.47,
            "tempo": 136.482,
            "TimeSignature": 4
        },
        {
            "ID": 2,
            "CreatedAt": "2020-03-18T18:47:52.209918Z",
            "UpdatedAt": "2020-03-18T18:47:52.209918Z",
            "DeletedAt": null,
            "title": "Fly Me To The Moon",
            "spotifyid": "none",
            "url": "fly-me-to-the-moon",
            "delay": 1,
            "avbarduration": 1,
            "duration": 147,
            "tempo": 119,
            "TimeSignature": 3
        }]
      }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
          json: () => {
            return Promise.resolve(mockInfo);
          },
      });
    });
  });

  it('should be passed down the correct URL', () => {
    getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')

    expect(window.fetch).toHaveBeenCalledWith('https://ballroom-beats.herokuapp.com/api/v1/songs')
  })

  it('should return the correct data in the correct format', () => {
    expect(getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')).resolves.toEqual(mockSonglist)
  })

 it('should return an error if response is not ok', () => {
   window.fetch = jest.fn().mockImplementation(() => {
     return Promise.resolve({
       ok: false,
         json: () => {
           return Promise.resolve(mockSonglist);
         },
     });
   });
   expect(getData('https://ballroom-beats.herokuapp.com/api/v1/songs', 'songs')).rejects.toEqual(Error("songs wasn't imported"))
 })
})
