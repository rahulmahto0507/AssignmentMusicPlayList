import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const Artist = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const Info = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 15%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
  overflow-y: scroll;
  height: 90vh;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
