import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar';
import './MovieDetails.css'
import { Link } from 'react-router-dom';
import { ACTORS_URL, MOVIE_DATA } from '../utilis/Constant';

const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const [actor, setActor] = useState()
    const [movieData, setMovieData] = useState()

    const { id } = useParams();
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=844dba0bfd8f3a4f3799f6130ef9e335`);
            setMovie(response.data);
        }
        fetchMovieDetails()
        //         const ActorsData = async () => {
        //             if(movie){
        //             const response1 = await axios(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`);
        //     setActor(response1.data);
        //             }
        // }
        // ActorsData()

        // const MovieData = async () => {
        //     const response2 = await axios(`https://api.themoviedb.org/3/movie/${movie ? movie.id : "912649"}/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`);
        //     setMovieData(response2.data)
        // }
        // MovieData()


    }, [id])

    useEffect(() => {

        const MovieData = async () => {
            if(movie){
            const response2 = await axios(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=844dba0bfd8f3a4f3799f6130ef9e335`);
            setMovieData(response2.data)
        }
    }
        MovieData()

        const ActorsData = async () => {
            if (movie) {
                const response1 = await axios(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`);
                setActor(response1.data);
            }
        }
        ActorsData()


    }, [movie, id])

   

    const GoHome = (e) => {
        e.preventDefault()
        console.log('clicked');

    }
    return (
        <>
            <Navbar />
            <div>
                <div className="rmdb-navigation">
                    <div className="rmdb-navigation-content">
                        <Link to="/">
                            <p onClick={GoHome}>Home</p>
                            <p>/</p>
                            <p>Kraven the Hunter</p>
                        </Link>
                    </div>
                </div>
            </div>
            {movie ? console.log(movie) : null
            }
            <div className="main-container">
                <div className="container">
                    <div className="img-container">
                        <img src={movie ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : null} alt="" />
                    </div>
                    <div className="content-container">
                        <div className="movie-title">
                            <h1>{movie ? movie.title : null}</h1>

                            <div className="plot-section">
                                <h3>PLOT</h3>
                                <p>{movie ? movie.overview : null}</p>
                            </div>
                            <h3>IMDB RANKING</h3>
                            <div className="rmdb-rating">
                            <meter min="0" max="100" optimum="100" low="40" high="70" value={ (movie ? movie.vote_average * 10 :"7.8" ).toString()} />
                                <p className="rmdb-score">{movie ? (movie.vote_average * 10).toFixed(2) :"7.8"}</p>
                            </div>
                            <h2>DIRECTORS</h2>
                            <h5>J.C. Chandor</h5>


                        </div>
                    </div>
                </div>

            </div>
            {/* {movieData ? console.log(movieData) : null} */}



            <div className="budget-section">
                <h1>Running Time:{movieData ? movieData.runtime : null} Minutes</h1>
                <h1>Budget: ${movieData ? movieData.budget : null}</h1>
                <h1>Revenue: ${movieData ? movieData.revenue : null}</h1>
            </div>



            <div className="Actor-section">
                <div className="Actor-section-cover">
                    <h1>Actors</h1>
                    <div className="Actor-section-cover-card-main-container">
                        {actor ? actor.cast.map((item, id) => {
                            // console.log(item);

                            return (
                                < div className="Actor-card-cover" key={id}>
                                    <div className="Actor-card-img">
                                        <img src={item.profile_path ? `http://image.tmdb.org/t/p/w154/${item.profile_path}` : `https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg`} alt="" />
                                    </div>
                                    <div className="Actor-card-content">
                                        <h4>{item.original_name}</h4>
                                        <h5>{item.character}</h5>
                                    </div>
                                </div>
                            )

                        })

                            : null}
                    </div>
                    {/* {actor ? actor.map((item, index) => {
                        return (
                            < div className="Actor-card-cover">
                                <div className="Actor-card-img">
                                    <img src="https://s.yimg.com/ny/api/res/1.2/IOOkKYjRpb9sYq3vo6Lg3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDA-/https://media.zenfs.com/en/usa_today_entertainment_893/58d31ab4dffd5d8f65fe908267a776a0" alt="" />
                                </div>
                                <div className="Actor-card-content">
                                    <h4>Aaron Taylor-Johnson</h4>
                                    <h5>Sergei Kravinoff / Kraven</h5>
                                </div>
                            </div>
                        )
                    }) : null} */}
                </div>

            </div >
        </>
    );
};

export default MovieDetails;