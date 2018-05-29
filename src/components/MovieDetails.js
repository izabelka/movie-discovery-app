import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class MovieDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: {},
    };
  }

  componentWillMount = () => {
    this.setMovie(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setMovie(nextProps)
  }

  setMovie = (props) => {
    this.setState({
      movie: props.movieDetails,
    })
  }

  render() {
    let {
      title,
      tagline,
      homepage,
      overview,
      poster_path: posterPath,
      genres,
    } = this.state.movie ? this.state.movie : '';
    return (
      <Wrapper>
        <Poster
          src={`http://image.tmdb.org/t/p/w342//${posterPath}`} />
        <TextWrapper>
          <Title>
            {title}
          </Title>
          <Tagline>
            {tagline}
          </Tagline>
          {genres &&
            <GenresWrapper>
              {genres.map((genre) => (
                <Genre
                  key={genre.id}>
                  {genre.name}
                </Genre>
              ))}
            </GenresWrapper>
          }
          <Description>
            {overview}
          </Description>
        </TextWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 34px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
`;

const Poster = styled.img`
  margin-right: 34px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  margin-bottom: 0.6em;
`;

const Tagline = styled.h2`
  font-size: 1.6em;
  font-weight: 500;
  margin-bottom: 1.6em;
`;

const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.6em;
`;

const Genre = styled.span`
  &:not(:last-of-type){
    margin-right: 14px;
  }
`;

const Description = styled.p`

`;

const mapStateToProps = state => ({
  movieDetails: state.selectedMovie,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
